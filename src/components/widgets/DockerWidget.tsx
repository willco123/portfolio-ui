import DockerIcon from "../../../public/tech-icons/docker.svg";

export default function DockerWidget() {
  return (
    <div className="flex gap-1">
      <div>Docker</div>
      <DockerIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
