export const CHARACTERS = (page: number | string): string =>
  `/character?page=${page}`;
export const CHARACTER = (id: number | string): string => `/character/${id}`;
export const LOCATION = (id: number | string): string => `/location/${id}`;
export const EPISODES = (list: string): string => `/episode/${list}`;
