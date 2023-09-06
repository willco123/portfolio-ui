import WebpackIcon from "../../../public/tech-icons/webpack.svg";
export default function WebpackWidget() {
  return (
    <div className="flex gap-1">
      <div>Webpack</div>
      <WebpackIcon className="h-[35px] w-[35px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
