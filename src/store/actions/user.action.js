import * as Types from '../types';

export const saveUser = (user) => {
  return {
    type: Types.SAVE_USER,
    payload: user,
  };
};

export const errorUser = () => {
  return {
    type: Types.ERROR_USER,
  };
};
