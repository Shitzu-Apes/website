import yamlMatter from "@/utils/yamlMatter";
import { readFileSync } from "fs";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";

export async function readFrontmatter(filePath: string) {
  const content = readFileSync(filePath, "utf-8");

  const fm = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkStringify)
    .use(yamlMatter)
    .process(content);

  return fm;
}

/**
 * Strips inline emphasis and code markers from a string.
 * Frontmatter descriptions are authored as Markdown, but they are emitted into
 * <meta> tags verbatim, so the markers would otherwise leak into search results
 * and social cards.
 */
export function stripMarkdown(value: string): string {
  return value
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .trim();
}
