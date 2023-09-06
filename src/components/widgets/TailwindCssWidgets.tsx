import TailwindCssIcon from "../../../public/tech-icons/tailwindcss.svg";
export default function TailwindCssWidget() {
  return (
    <div className="flex gap-1">
      <div>TailwindCSS</div>
      <TailwindCssIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
