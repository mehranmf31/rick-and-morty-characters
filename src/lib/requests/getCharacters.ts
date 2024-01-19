import { CHARACTERS } from "@lib/constants/apiRoutes";
import { get } from "@lib/utils/api";
import { CharacterType } from "@types";

interface CharacterResponse {
  list: CharacterType[];
  nextPage: number | null;
}

export const getCharacters = (page: number): Promise<CharacterResponse> =>
  get(CHARACTERS(page))
    .then((response: any) => {
      return {
        list: response.results,
        nextPage: page < response.info.pages ? page + 1 : null,
      };
    })
    .catch((response) => {
      throw new Error(response.error);
    });
