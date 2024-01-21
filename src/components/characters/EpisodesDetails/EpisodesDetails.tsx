import { Error, LoadingWrapper } from "@components/common";
import { useEpisode } from "@lib/hooks";
import { DetailRow, DetailTitle } from "@components/characters";
import { GENERAL_ERROR } from "@lib/constants/errors";

export interface EpisodeDetailsProps {
  list: string;
}

export function EpisodesDetails({ list }: EpisodeDetailsProps) {
  const { data, isLoading, isError, error } = useEpisode(list);

  if (isLoading) return <LoadingWrapper />;

  if (!data || (isError && error))
    return (
      <Error message={error?.message || GENERAL_ERROR} className="mt-12" />
    );

  return (
    <>
      <DetailTitle content={`Episodes (${data.length || 0})`} />
      {data.map((item) => (
        <DetailRow title={item.episode} content={item.name} />
      ))}
    </>
  );
}
