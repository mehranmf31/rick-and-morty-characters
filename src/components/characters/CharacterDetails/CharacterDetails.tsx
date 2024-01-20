import { Image } from "@components/common";
import { CharacterType } from "@types";

interface CharacterDetailsProps extends CharacterType {}

export function CharacterDetails({
  name,
  image,
  status,
  species,
  gender,
  episode,
}: CharacterDetailsProps) {
  return (
    <div className="flex max-sm:flex-col p-5 bg-white gap-8 rounded-xl xl:w-1/2 mx-auto">
      <div>
        <Image
          src={image}
          alt={name}
          className="rounded-xl w-96 max-sm:w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:col-span-2">
          {name}
        </h1>
        <DataRow title="Status" content={status} />
        <DataRow title="Species" content={species} />
        <DataRow title="Gender" content={gender} />
        <DataRow title="Episodes" content={`${episode?.length || ""}`} />
      </div>
    </div>
  );
}

function DataRow({ title, content }: { title: string; content: string }) {
  return (
    <div className="mb-3">
      <div className="text-neutral-500 block text-lg">{title}</div>
      <div className="text-neutral-900 block text-2xl font-bold">{content}</div>
    </div>
  );
}
