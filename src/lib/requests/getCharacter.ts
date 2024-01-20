import { CHARACTER } from "@lib/constants/apiRoutes";
import { get } from "@lib/utils/api";
import { CharacterType } from "@types";

export const getCharacter = (id: number): Promise<CharacterType> =>
  get(CHARACTER(id))
    .then((response: any) => {
      return response;
    })
    .catch((response) => {
      throw new Error(response.error);
    });
