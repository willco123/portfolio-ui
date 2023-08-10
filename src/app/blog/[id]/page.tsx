import { getMdData } from "../../../lib/read-markdown";
import { getRouteIds } from "@/lib/get-routes";
import { Metadata, ResolvingMetadata } from "next";
import Content from "@/components/AboutContent";
import { headers } from "next/headers";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page(props: Props) {
  const postId = props.params.id;
  const mdData = await getMdData(postId, "/src/blog-data");
  if (!mdData) return null;
  const { contentHtml } = mdData;
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const cleanHtml = purify.sanitize(contentHtml);
  return <Content contentHtml={cleanHtml} />;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata | null> {
  const routeId = params.id;
  const mdData = await getMdData(routeId, "/src/blog-data");
  if (!mdData) return null;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: mdData.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}
//will set dynamic rendering if used, disable generateStaticParams if used
function getHeaders() {
  const headersList = headers();
  const referer = headersList.get("referer");
  return referer;
}

export async function generateStaticParams() {
  const posts = getRouteIds();
  return posts.map((post) => ({
    id: post.id,
  }));
}
