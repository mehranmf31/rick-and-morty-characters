import { CHARACTER } from "@lib/constants/apiRoutes";
import { get } from "@lib/utils/api";

export const getCharacter = (id: number) =>
  get(CHARACTER(id))
    .then((response: any) => {
      return response;
    })
    .catch((response) => {
      throw new Error(response.error);
    });
