import { LOCATION } from "@lib/constants/apiRoutes";
import { get } from "@lib/utils/api";
import { LocationType } from "@types";

export const getLocation = (id: number): Promise<LocationType> =>
  get(LOCATION(id))
    .then((response: any) => {
      return response;
    })
    .catch((response) => {
      throw new Error(response.error);
    });
