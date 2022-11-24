import { PayloadAction } from '@reduxjs/toolkit';
import { DELETE_API_POST, GET_API_POSTS, GET_CHARACTER } from '../types';

const allApiPost = (state = [], action: PayloadAction<string>) => {
  const { type, payload } = action;

  switch (type) {
    case GET_API_POSTS:
      return payload;
    case DELETE_API_POST:
      return state.filter((el: any) => el.id !== payload);
    default:
      return state;
  }
};

export default allApiPost;
