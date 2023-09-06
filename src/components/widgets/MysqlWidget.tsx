import MysqlIcon from "../../../public/tech-icons/mysql.svg";
export default function MysqlWidget() {
  return (
    <div className="flex gap-1">
      <div>MySQL</div>
      <MysqlIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
