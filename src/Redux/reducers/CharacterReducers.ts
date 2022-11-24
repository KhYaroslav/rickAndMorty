import { PayloadAction } from '@reduxjs/toolkit';
import { GET_CHARACTER } from '../types';

const CharacterReducers = (state = [], action: PayloadAction<string>) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTER:
      return payload;
    default:
      return state;
  }
};

export default CharacterReducers;
