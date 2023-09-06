import profile from "../../public/garden.jpg";
import Divider from "./Divider";
import Image from "next/image";
import * as widgets from "@/components/widgets/index";

export default function AboutContent({ contentHtml }: { contentHtml: string }) {
  return (
    <>
      <header className="flex flex-col gap-2 animate-fadeFast">
        <h1 className="text-center ">About</h1>
        <Divider />
      </header>
      <section
        className={` relative animate-fadeFast 
        flex flex-col
        items-center
        xl:place-items-center
      gap-2
      xl:grid grid-rows-3 md:grid-rows-3 sm:grid-rows-2
      xl:grid-cols-7 xl:grid-rows-1 flex-1
      `}
      >
        <figure
          className="
      rounded-md
      xl:order-2 xl:col-span-3
      relative xl:h-5/6 xl:w-5/6 h-[350px] w-4/6 min-w-[380px]

      "
        >
          <Image
            src={profile}
            alt="Picture of the author"
            sizes=""
            fill={true}
            style={{ objectFit: "contain" }}
            className="rounded-md"
          />
        </figure>
        <div className="xl:col-span-4 xl:self-center row-span-2 flex flex-col gap-10 justify-center">
          <article
            className="space-y-3
            animate-fadeFast
          leading-7
          flex-1
          "
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <div
            className="
          flex justify-center flex-wrap
          items-center
          flex-grow-0
          gap-2
          flex-0 relative
          "
          >
            <widgets.RTLWidget />
            <widgets.PostmanWidget />
            <widgets.PlaywrightWidget />
            {/* {<widgets.AngularWidget />} */}
            <widgets.Css3Widget />
            {/* {<widgets.DockerWidget />} */}
            <widgets.ExpressWidget />
            <widgets.FfmpegWidget />
            <widgets.GimpWidget />
            <widgets.InkscapeWidget />
            <widgets.JestWidget />
            <widgets.JavascriptWidget />
            <widgets.MongodbWidget />
            <widgets.MysqlWidget />
            <widgets.NextjsWidget />
            <widgets.NodejsWidget />
            <widgets.PostgresqlWidget />
            <widgets.ReactWidget />
            <widgets.SassWidget />
            <widgets.TailwindCssWidget />
            <widgets.TypescriptWidget />
            <widgets.WebpackWidget />
          </div>
        </div>
      </section>

      {/* <footer className=""></footer> */}
    </>
  );
}
// ${
//   showContent
//     ? "opacity-100 duration-2000 ease-in transition"
//     : "opacity-100 "
// }
