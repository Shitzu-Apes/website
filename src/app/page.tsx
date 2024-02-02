import ChainTab from "@/components/ChainTab";
import FAQ from "@/components/FAQ";
import LandingBlog from "@/components/LandingBlog";
import Scene from "@/components/Scene";
import Tokenomics from "@/components/Tokenomics";
import { BlogMetadata } from "@/utils/blog";
import { readFrontmatter } from "@/utils/markdown";
import { readdirSync } from "fs";

export default async function Home() {
  let files = readdirSync("./blogs", { withFileTypes: true });

  files.sort((a, b) => {
    return b.name.localeCompare(a.name);
  });
  files = files.slice(0, 3);

  const blogmetadata = [];
  for await (const file of files) {
    const frontmatter = await readFrontmatter(`./blogs/${file.name}/readme.md`);

    const metadata = BlogMetadata.parse({
      ...(frontmatter.data.matter as Object),
      slug: file.name,
    });
    blogmetadata.push(metadata);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative flex flex-col-reverse md:flex-row place-items-center min-h-[100vh] w-full px-3 md:px-0">
        <div className="w-full md:w-3/5 h-full text-4xl md:text-8xl font-bold text-white md:px-10 flex flex-col items-center justify-center">
          <div className="w-full">
            UNITE <span className="text-primary">SHITZU</span> Apes
          </div>
          <div className="text-sm md:text-lg font-light text-justify text-white mt-5">
            Unparalleled in its design,{" "}
            <span className="text-primary font-bold">$SHITZU</span> sets itself
            apart as a meme token like no other. With a 24-hour free and fair
            mint using the innovative{" "}
            <span className="text-primary font-bold">Proof of Finger</span>{" "}
            consensus, a total supply of{" "}
            <span className="text-primary font-bold">576,167,000</span> tokens,
            and a fully verified contract,{" "}
            <span className="text-primary font-bold">$SHITZU</span> promises a
            unique and transparent experience. What's more, there are no trading
            taxes, no centralized dev team—just a 100% community-owned and
            driven initiative.
          </div>
          <div className="mr-auto flex flex-col justify-stretch items-stretch text-lg mt-16 w-full md:w-auto">
            <span className="text-xl">Find us on</span>
            <div className="mt-3 w-full md:w-auto">
              <ChainTab />
            </div>
          </div>
          <button></button>
        </div>
        <div className="w-full md:w-2/5 h-[450px] md:min-h-[100vh]">
          <Scene />
        </div>
      </div>
      <div className="w-full">
        <Tokenomics />
      </div>
      <div className="w-full">
        <LandingBlog blogs={blogmetadata} />
      </div>
      <div id="FAQ" className="w-full">
        <FAQ />
      </div>
    </main>
  );
}
