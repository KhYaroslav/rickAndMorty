import axios from 'axios';

import { GET_API_POSTS,DELETE_API_POST, GET_CHARACTER } from '../types';

export const getApiPosts = (payload: string) => (dispatch: any) => {
  axios('https://rickandmortyapi.com/api/character', {
    params: payload,
  }).then((res) => dispatch({ type: GET_API_POSTS, payload: res.data.results }));
};

export const fetchCharacter = (id :string) => (dispatch: any) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`,

).then((res) => dispatch({ type: GET_CHARACTER, payload: res.data }));
};

export const deleteApiPost = (id: string) => ({
  type: DELETE_API_POST,
  payload: id,
});

