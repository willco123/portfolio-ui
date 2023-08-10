import { getMdData } from "@/lib/read-markdown";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import AboutContent from "@/components/AboutContent";

const pageId = "about";
const markDownDir = "/src/markdown-data";

export default async function Page() {
  const mdData = await getMdData(pageId, markDownDir);
  if (!mdData) return null;
  const { contentHtml } = mdData;
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const cleanHtml = purify.sanitize(contentHtml);
  return <AboutContent contentHtml={cleanHtml} />;
}
