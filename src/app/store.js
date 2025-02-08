import { configureStore } from '@reduxjs/toolkit';
import contatosReducer from '../features/contatos/contatosSlice';

export const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
});