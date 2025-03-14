import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LandingBlog from "@/components/LandingBlog";
import MemeCooking from "@/components/MemeCooking";
import ShitzuRevival from "@/components/ShitzuRevival";
import TokenFarm from "@/components/TokenFarm";
import Tokenomics from "@/components/Tokenomics";
import EcosystemMap from "@/components/EcosystemMap";
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
      <div className="w-full">
        <Hero />
      </div>

      <div className="w-full">
        <Tokenomics />
      </div>
      <div className="w-full">
        <MemeCooking />
      </div>
      <div className="w-full">
        <ShitzuRevival />
      </div>
      <div className="w-full">
        <EcosystemMap />
      </div>
      <div className="w-full">
        <TokenFarm />
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
