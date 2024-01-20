import { LoadingWrapper } from "@components/common";
import { useEpisode } from "@lib/hooks";
import { DetailRow } from "@components/characters";
import { DetailTitle } from "../DetailTitle/DetailTitle";

export interface EpisodeDetailsProps {
  list: string;
}

export function EpisodesDetails({ list }: EpisodeDetailsProps) {
  const { data, isLoading } = useEpisode(list);

  return (
    <>
      {isLoading && <LoadingWrapper />}
      {!!data && (
        <>
          <DetailTitle content={`Episodes (${data.length || 0})`} />
          {data.map((item) => (
            <DetailRow title={item.episode} content={item.name} />
          ))}
        </>
      )}
    </>
  );
}
