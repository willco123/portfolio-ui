import * as fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type MatterData = {
  title: string;
};

type BlogData = {
  id: string;
  title: string;
  content: string;
};

export async function getMdData(id: string, folderLoc: string) {
  try {
    const mdDirectory = path.join(process.cwd(), folderLoc);
    const fullPath = path.join(mdDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const matterData = matterResult.data as MatterData;

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterData,
    };
  } catch (err) {
    return null;
  }
}
