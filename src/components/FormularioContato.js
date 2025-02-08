import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarContato } from '../features/contatos/contatosSlice';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px; // Largura máxima do formulário
  margin: 0 auto; // Centraliza o formulário na página
  padding: 20px; // Adiciona um espaçamento interno
  border: 1px solid #ccc; // Adiciona uma borda para melhor visualização
  border-radius: 8px; // Borda arredondada
  background-color: #f9f9f9; // Cor de fundo suave
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; // Faz o input ocupar 100% da largura do contêiner
  max-width: 300px; // Define uma largura máxima para os inputs
  margin: 0 auto; // Centraliza os inputs
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%; // Faz o botão ocupar 100% da largura do contêiner
  max-width: 300px; // Define uma largura máxima para o botão
  margin: 0 auto; // Centraliza o botão
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center; // Centraliza a mensagem de erro
`;

const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const dispatch = useDispatch();
  const contatos = useSelector((state) => state.contatos.contatos);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o contato já existe
    const contatoExistente = contatos.some(
      (contato) => contato.email === email || contato.telefone === telefone
    );

    if (contatoExistente) {
      setErro('Este contato já existe!');
    } else {
      dispatch(adicionarContato({ nome, email, telefone }));
      setNome('');
      setEmail('');
      setTelefone('');
      setErro('');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />
      {erro && <ErrorMessage>{erro}</ErrorMessage>}
      <Button type="submit">Adicionar Contato</Button>
    </FormContainer>
  );
};

export default FormularioContato;