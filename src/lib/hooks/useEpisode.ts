import { useQuery } from "@tanstack/react-query";

import { getEpisode } from "@lib/requests";
import { EPISODES } from "@lib/constants/queryKey";

export const useEpisode = (list: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: EPISODES(list),
    queryFn: () => getEpisode(list),
    enabled: !!list,
  });

  return { data, isLoading, isError, error };
};
