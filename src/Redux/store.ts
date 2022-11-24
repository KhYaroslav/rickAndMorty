import { configureStore } from '@reduxjs/toolkit';
import ApiReducers from './reducers/ApiReducers';
import CharacterReducers from './reducers/CharacterReducers';

export const store = configureStore(
  {
    reducer: {
      api: ApiReducers,
      character: CharacterReducers,
    },
  });

