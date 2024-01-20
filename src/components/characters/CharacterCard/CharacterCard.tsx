import { Image } from "@components/common";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { CHARACTER_PAGE } from "routes/app";

export interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
  status: string;
  episodesCount: number;
  location: string;
}

export function CharacterCard({
  id,
  image,
  name,
  status,
  episodesCount,
  location,
}: CharacterCardProps) {
  return (
    <Link to={CHARACTER_PAGE(id)}>
      <div className="flex sm:flex-col gap-1 bg-white w-full p-1 rounded-xl">
        <div className="flex items-center relative w-5/12 sm:w-full rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="aspect-square object-cover w-full rounded-lg"
          />
          {!!episodesCount && (
            <div className="absolute top-3 left-0 bg-lime-600 text-white py-1 px-2 rounded-e-lg">
              In {episodesCount} {episodesCount > 1 ? "episodes" : "episode"}
            </div>
          )}
        </div>
        <div className="p-2 flex flex-col justify-between w-7/12 sm:w-full">
          <div>
            <h2 className="text-xl font-black text-ellipsis text-nowrap overflow-hidden">
              {name}
            </h2>
            <div
              className={classNames("capitalize text-base", {
                "text-green-700": status.toLocaleLowerCase() === "alive",
                "text-red-700": status.toLocaleLowerCase() === "dead",
                "text-neutral-500": status.toLocaleLowerCase() === "unknown",
              })}
            >
              {status}
            </div>
          </div>

          <div className="text-ellipsis text-nowrap overflow-hidden mt-3">
            <span className="flex items-center text-neutral-600 text-sm">
              last location:
            </span>
            <span className="flex items-center font-semibold">{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
