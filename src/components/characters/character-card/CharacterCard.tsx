import { Image } from "@components/common";
import classNames from "classnames";

export interface CharacterCardProps {
  image: string;
  name: string;
  status: string;
  episodesCount: number;
  location: string;
}

export function CharacterCard({
  image,
  name,
  status,
  episodesCount,
  location,
}: CharacterCardProps) {
  return (
    <div className="flex sm:flex-col gap-1 bg-white w-full p-1 rounded-xl">
      <div className="flex items-center relative w-5/12 sm:w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="aspect-square object-cover w-full rounded-lg"
        />
        {!!episodesCount && (
          <div className="absolute top-3 left-0 text-xs bg-green-800 text-white py-0.5 px-2 rounded-e-sm">
            In {episodesCount} {episodesCount > 1 ? "episodes" : "episode"}
          </div>
        )}
      </div>
      <div className="p-2 flex flex-col justify-between w-7/12 sm:w-full">
        <h2 className="font-black text-ellipsis text-nowrap overflow-hidden">
          {name}
        </h2>
        <div
          className={classNames("text-xs capitalize", {
            "text-green-700": status === "alive",
            "text-red-700": status === "dead",
            "text-neutral-600": status === "unknown",
          })}
        >
          {status}
        </div>

        <div className="text-ellipsis text-nowrap overflow-hidden mt-3">
          <span className="flex items-center text-neutral-600 text-xs">
            last location:
          </span>
          <span className="flex items-center text-sm font-semibold">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}
