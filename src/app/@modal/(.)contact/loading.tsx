import LoadingSVG from "../../../../public/loading.svg";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto  bg-weak-black">
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadingSVG
          className="
        w-20 h-20 text-subtle-gray dark:text-subtle-white 
        fill-softblue-light dark:fill-softblue-dark 
        animate-spin dark:text-gray-600 fill-blue-600
       "
        />
      </div>
    </div>
  );
}
