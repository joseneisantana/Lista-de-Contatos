import React from 'react';
import FormularioContato from './components/FormularioContato';
import ListaContatos from './components/ListaContatos';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;


const Titulo = styled.h1`
  text-align: center;
  color: #333;
   margin-bottom: 20px
`;
const FormularioWrapper = styled.div`
  margin-bottom: 30px; // Adiciona um espaçamento abaixo do formulário
`;
function App() {
  return (
    <AppContainer>
      <Titulo>Lista de Contatos</Titulo>
      <FormularioContato />
      <ListaContatos />
    </AppContainer>
  );
}

export default App;