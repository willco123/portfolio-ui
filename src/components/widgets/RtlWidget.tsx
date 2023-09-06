import RTLIcon from "../../../public/tech-icons/rtl.svg";
export default function RTLWidget() {
  return (
    <div className="flex gap-1">
      <div className="">React Testing Library</div>
      <RTLIcon className="h-[30px] w-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
