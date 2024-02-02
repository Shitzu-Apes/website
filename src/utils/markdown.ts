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
