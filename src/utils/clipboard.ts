/**
 * Copies text to the clipboard, reporting whether it actually worked.
 *
 * The async Clipboard API is only exposed in a secure context, so calling it
 * unguarded throws a TypeError anywhere else (for example a dev server reached
 * over a LAN IP). Where it is unavailable, or where it rejects, we fall back to
 * the legacy execCommand path.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (
    typeof window !== "undefined" &&
    window.isSecureContext &&
    typeof navigator !== "undefined" &&
    typeof navigator.clipboard?.writeText === "function"
  ) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Permission denied or document not focused; try the legacy path.
    }
  }

  if (typeof document === "undefined") return false;

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  // iOS ignores select() alone, so set an explicit selection range too.
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
}
