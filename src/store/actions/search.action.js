import * as TYPES from '../types';

export const setArea = (area) => {
  return {
    type: TYPES.AREA_SEARCH,
    payload: area,
  };
};
