export function CardSkeleton() {
  return (
    <div className="flex sm:flex-col gap-1 bg-white w-full p-1 rounded-xl">
      <div className="flex items-center w-5/12 sm:w-full rounded-lg overflow-hidden">
        <div className="bg-gray-300 animate-pulse aspect-square object-cover w-full rounded-lg" />
      </div>
      <div className="p-2 flex flex-col justify-between w-7/12 sm:w-full">
        <div className="my-4">
          <div className="w-full h-6 animate-pulse bg-gray-300 rounded-lg" />
          <div className="w-full h-6 animate-pulse bg-gray-300 rounded-lg mt-2.5" />
          <div className="w-1/2 h-6 animate-pulse bg-gray-300 rounded-lg mt-2.5" />
        </div>
      </div>
    </div>
  );
}
