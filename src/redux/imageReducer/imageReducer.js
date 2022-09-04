// eslint-disable-next-line import/no-unresolved
import { IMAGE } from '../types';

export const initialState = {
  image: [],
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE:
      // eslint-disable-next-line no-case-declarations
      const listImages = action.payload.map((response) => {
        return {
          id: response.id,
          image: response.image,
        };
      });
      return {
        ...state,
        image: listImages,
      };
    default:
      return state;
  }
};
