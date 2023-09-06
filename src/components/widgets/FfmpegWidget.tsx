import FfmpegIcon from "../../../public/tech-icons/ffmpeg.svg";
export default function FfmpegWidget() {
  return (
    <div className="flex gap-1">
      <div>Ffmpeg</div>
      <FfmpegIcon className="w-[30px] h-[30px] text-softblue-light dark:text-softblue-dark" />
    </div>
  );
}
