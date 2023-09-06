import PostgresqlIcon from "../../../public/tech-icons/postgresql.svg";
export default function PostgresqlWidget() {
  return (
    <div className="flex gap-1">
      <div>PostgreSQL</div>
      <PostgresqlIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
