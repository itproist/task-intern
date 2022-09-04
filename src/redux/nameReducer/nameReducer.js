// eslint-disable-next-line import/no-unresolved
import { NAME } from '../types';

export const initialState = {
  name: [],
};

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME:
      // eslint-disable-next-line no-case-declarations
      const listNimes = action.payload.map((response) => {
        return {
          id: response.id,
          name: response.name,
        };
      });
      return {
        ...state,
        name: listNimes,
      };
    default:
      return state;
  }
};
