import NodejsIcon from "../../../public/tech-icons/nodejs.svg";
export default function NodejsWidget() {
  return (
    <div className="flex gap-1">
      <div>NodeJS</div>
      <NodejsIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
