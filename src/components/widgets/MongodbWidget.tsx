import MongodbIcon from "../../../public/tech-icons/mongodb.svg";
export default function MongodbWidget() {
  return (
    <div className="flex gap-1">
      <div>MongoDB</div>
      <MongodbIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
