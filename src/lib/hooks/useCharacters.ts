import { useInfiniteQuery } from "@tanstack/react-query";

import { getCharacters } from "@lib/requests";
import { CHARACTERS } from "@lib/constants/queryKey";

export const useCharacters = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: CHARACTERS,
    queryFn: ({ pageParam }) => getCharacters(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isLoading,
    isError,
    error,
  };
};
