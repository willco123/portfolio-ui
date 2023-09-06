import ExpressIcon from "../../../public/tech-icons/express-js.svg";
export default function ExpressWidget() {
  return (
    <div className="flex gap-1">
      <div>Express</div>
      <ExpressIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
