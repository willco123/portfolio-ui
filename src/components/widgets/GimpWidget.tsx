import GimpIcon from "../../../public/tech-icons/gimp.svg";
export default function GimpWidget() {
  return (
    <div className="flex gap-1">
      <div>Gimp</div>
      <GimpIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
