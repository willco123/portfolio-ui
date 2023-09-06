import InkscapeIcon from "../../../public/tech-icons/inkscape.svg";
export default function InkscapeWidget() {
  return (
    <div className="flex gap-1">
      <div>Inkscape</div>
      <InkscapeIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
