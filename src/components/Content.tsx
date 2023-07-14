"use client";
import { useEffect, useState } from "react";
import profile from "../../public/BOC.jpg";
import Image from "next/image";

export default function Content({ contentHtml }: { contentHtml: string }) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowContent(true);
  }, []);
  return (
    <main
      className={`flex flex-col md:flex-row-reverse ${
        showContent
          ? "opacity-100 duration-2000 ease-in transition"
          : "opacity-0 "
      }`}
    >
      <section className="self-center">
        <Image
          src={profile}
          alt="Picture of the author"
          // sizes="100vw"
          style={{
            width: "200px",
            height: "300px",
          }}
        />
      </section>
      <article
        className="flex-1 text-center border col-span-2 n"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
