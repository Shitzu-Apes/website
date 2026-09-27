const DEFAULT_SITE_URL = "https://shitzuapes.xyz";

function resolveSiteUrl(): URL {
  const raw = process.env.METADATABASE?.trim();

  // Reject "set-but-empty" values, which CI can produce from unset repo vars.
  if (raw && raw !== "undefined" && raw !== "null") {
    try {
      return new URL(raw);
    } catch {
      // Fall through to the default rather than emitting a broken metadataBase.
    }
  }

  return new URL(DEFAULT_SITE_URL);
}

export const siteUrl = resolveSiteUrl();

/** Normalised to either "" or a leading-slash path with no trailing slash. */
export const basePath = (process.env.BASEPATH ?? "").replace(/\/+$/, "");

/**
 * Builds an absolute URL for a site-relative path, honouring BASEPATH.
 * Use for metadata assets (favicons, og images) so they stay correct when the
 * site is served from a sub-path.
 */
export function absoluteUrl(path: string): string {
  const clean = path.replace(/^\/+/, "");
  return new URL([basePath, clean].filter(Boolean).join("/"), siteUrl).toString();
}
