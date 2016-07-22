import { INITIAL_STATE, SEARCH_LOCALES } from './types';

export const initialAction = () => {
  return { type: INITIAL_STATE };
};

export const searchLocales = (query, state) => {
  return { type: SEARCH_LOCALES, payload: { query } };
};
