
export const SkeletonBoxView = () => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 rtl:space-x-reverse md:flex flex-col md:items-center"
    >
      <div className="flex items-center justify-center bg-gray-300 rounded-xl w-[300px]  md:w-[190px] lg:w-[210px] h-[200px] lg:h-[260px] xl:w-[240px] mb-4">
        <svg
          className="w-20 h-20 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full">
        <div className="h-6 bg-gray-200 rounded-full  w-full mb-4 mx-0"></div>
        <div className="h-6 bg-gray-200 rounded-full  w-48 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded-full  w-48 mb-4"></div>
      </div>
    </div>
  );
};


export const SkeletonListView = () => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg w-full animate-pulse">
      <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
      <div className="flex-grow space-y-2">
        <div className="h-5 bg-gray-200 rounded-full w-[60%]"></div>
        <div className="h-5 bg-gray-200 rounded-full w-[40%]"></div>
        <div className="h-5 bg-gray-200 rounded-full w-[30%]"></div>
      </div>
      <div className="ml-auto">
        <div className="bg-gray-300 text-transparent py-2 px-4 rounded-[25px] animate-pulse h-10 w-28"></div>
      </div>
    </div>
  );
};


export const Skeleton = ({ className = '', barClassName = '', width = 'w-full', height = 'h-6' }) => {
  return (
    <div
      role="status"
      className={`space-y-8 animate-pulse md:space-y-0 rtl:space-x-reverse md:flex flex-col md:items-center ${className}`}
    >
      <div className={`${width}`}>
        <div className={`bg-gray-200 rounded-full ${height} ${barClassName} mb-4 mx-0`}></div>
      </div>
    </div>
  );
};
