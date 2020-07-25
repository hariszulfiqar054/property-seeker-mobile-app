import * as Types from '../types';

const initialState = {
  user: null,
  token: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SAVE_USER: {
      return {
        ...state,
        user: action.payload,
        token: action.payload?.access_token,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
