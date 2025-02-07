import { configureStore } from '@reduxjs/toolkit';
import contatosReducer from './recursos/contatosSlice';

export const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
});