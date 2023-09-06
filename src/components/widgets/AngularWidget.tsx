import AngularIcon from "../../../public/tech-icons/angular.svg";
export default function AngularWidget() {
  return (
    <div className="flex gap-1">
      <div>Angular</div>
      <AngularIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
