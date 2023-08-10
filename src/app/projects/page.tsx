import Card from "@/components/Card";

export default async function Page() {
  return (
    <main className="grid grid-rows-2 min-h-screen justify-center">
      <section className="grid grid-cols-3 ">
        <article>Article</article>
        <video autoPlay loop className="justify-self-end  col-span-2 h-full">
          <source src="/output.webm" type="video/webm" />
        </video>
      </section>
      <section className="grid grid-cols-3 items-center gap-4">
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
