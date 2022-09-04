import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { NAME } from '../types';

export const gettingNames = () => {
  return async (dispatch) => {
    await axios
      .get('https://rickandmortyapi.com/api/character')
      .then((payload) => dispatch({ type: NAME, payload: payload.data.results }));
  };
};
