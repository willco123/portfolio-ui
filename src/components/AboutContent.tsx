"use client";
import { useEffect, useState } from "react";
import profile from "../../public/BOC.jpg";
import Image from "next/image";

export default function AboutContent({ contentHtml }: { contentHtml: string }) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowContent(true);
  }, []);
  return (
    <main
      className={`flex flex-col md:flex-row-reverse ${
        showContent
          ? "opacity-100 duration-2000 ease-in transition"
          : "opacity-100 "
      }`}
    >
      <section className="self-center ">
        <Image
          src={profile}
          alt="Picture of the author"
          // sizes="100vw"
          style={{
            width: "200px",
            height: "300px",
            overflow: "hidden",
          }}
        />
      </section>
      <article
        className="text-center border "
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
