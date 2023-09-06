import NextjsIcon from "../../../public/tech-icons/nextjs.svg";
export default function NextjsWidget() {
  return (
    <div className="flex gap-1">
      <div>NextJS</div>
      <NextjsIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
