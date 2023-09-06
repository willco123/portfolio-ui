import PlaywrightIcon from "../../../public/tech-icons/playwright.svg";
export default function PlaywrightWidget() {
  return (
    <div className="flex gap-1">
      <div>Playwright</div>
      <PlaywrightIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
