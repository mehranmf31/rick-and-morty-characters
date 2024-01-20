export const CHARACTERS = (page: number | string): string =>
  `/character?page=${page}`;
export const CHARACTER = (id: number | string): string => `/character/${id}`;
