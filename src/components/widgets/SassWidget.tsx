import SassIcon from "../../../public/tech-icons/sass.svg";
export default function SassWidget() {
  return (
    <div className="flex gap-1">
      <div>SASS</div>
      <SassIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
