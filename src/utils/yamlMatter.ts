import { VFile } from "vfile";
import { matter } from "vfile-matter";

export default function yamlMatter() {
  return function (_tree: any, file: VFile) {
    matter(file);
  };
}
