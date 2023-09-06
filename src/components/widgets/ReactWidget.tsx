import ReactIcon from "../../../public/tech-icons/react.svg";
export default function ReactWidget() {
  return (
    <div className="flex gap-1">
      <div>React</div>
      <ReactIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
