import { useQuery } from "@tanstack/react-query";

import { getLocation } from "@lib/requests";
import { LOCATION } from "@lib/constants/queryKey";

export const useLocation = (id: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: LOCATION(id),
    queryFn: () => getLocation(id),
    enabled: !!id,
  });

  return { data, isLoading, isError, error };
};
