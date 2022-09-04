import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { IMAGE } from '../types';

export const gettingImage = () => {
  return async (dispatch) => {
    await axios
      .get('https://rickandmortyapi.com/api/character')
      .then((payload) => dispatch({ type: IMAGE, payload: payload.data.results }));
  };
};
