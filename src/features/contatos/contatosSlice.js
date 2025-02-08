import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contatos: [],
};

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action) => {
      state.contatos.push(action.payload);
    },
    removerContato: (state, action) => {
      state.contatos = state.contatos.filter((_, index) => index !== action.payload);
    },
    editarContato: (state, action) => {
      const { index, contato } = action.payload;
      state.contatos[index] = contato;
    },
  },
});

export const { adicionarContato, removerContato, editarContato } = contatosSlice.actions;
export default contatosSlice.reducer;