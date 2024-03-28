import { readFileSync } from "fs";
import mime from "mime";

export default function toDataURL(src: string): string {
  const content = readFileSync(src);
  const mimeType = mime.getType(src);
  const b64 = Buffer.from(content).toString("base64");

  if (!mimeType) {
    return "";
  }

  return `data:${mimeType};base64,${b64}`;
}
