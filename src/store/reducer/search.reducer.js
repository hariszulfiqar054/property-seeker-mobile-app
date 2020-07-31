import * as TYPES from '../types';

const initialState = {
  area: null,
};
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AREA_SEARCH: {
      return {
        ...state,
        area: action.payload,
      };
    }

    default:
      return state;
  }
};

export default SearchReducer;
