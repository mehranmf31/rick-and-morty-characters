import { EPISODES } from "@lib/constants/apiRoutes";
import { get } from "@lib/utils/api";
import { EpisodeType } from "@types";

export const getEpisode = (list: string): Promise<EpisodeType[]> =>
  get(EPISODES(list))
    .then((response: any) => {
      return Array.isArray(response) ? response : [response];
    })
    .catch((response) => {
      throw new Error(response.error);
    });
