import PostmanIcon from "../../../public/tech-icons/postman.svg";
export default function PostmanWidget() {
  return (
    <div className="flex gap-1">
      <div>Postman</div>
      <PostmanIcon className="h-[35px] w-[35px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
