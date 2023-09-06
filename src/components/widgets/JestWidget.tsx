import JestIcon from "../../../public/tech-icons/jest.svg";
export default function JestWidget() {
  return (
    <div className="flex gap-1">
      <div>Jest</div>
      <JestIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
