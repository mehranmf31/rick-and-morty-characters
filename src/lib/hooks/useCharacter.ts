import { useQuery } from "@tanstack/react-query";

import { getCharacter } from "@lib/requests";
import { CHARACTER } from "@lib/constants/queryKey";

export const useCharacter = (id: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: CHARACTER(id),
    queryFn: () => getCharacter(id),
    enabled: !!id,
  });

  return { data, isLoading, isError, error };
};
