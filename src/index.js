import { createSlice } from '@reduxjs/toolkit';

const estadoInicial = {
  contatos: [],
};

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: estadoInicial,
  reducers: {
    adicionarContato: (state, action) => {
      state.contatos.push(action.payload);
    },
    removerContato: (state, action) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editarContato: (state, action) => {
      const index = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      );
      if (index !== -1) {
        state.contatos[index] = action.payload;
      }
    },
  },
});

export const { adicionarContato, removerContato, editarContato } = contatosSlice.actions;
export default contatosSlice.reducer;


