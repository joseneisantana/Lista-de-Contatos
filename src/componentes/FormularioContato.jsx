import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarContato, editarContato } from '../recursos/contatosSlice';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FormularioContato = ({ contatoParaEditar, setContatoParaEditar }) => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState(contatoParaEditar ? contatoParaEditar.nome : '');
  const [email, setEmail] = useState(contatoParaEditar ? contatoParaEditar.email : '');
  const [telefone, setTelefone] = useState(contatoParaEditar ? contatoParaEditar.telefone : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contato = {
      id: contatoParaEditar ? contatoParaEditar.id : Date.now(),
      nome,
      email,
      telefone,
    };
    if (contatoParaEditar) {
      dispatch(editarContato(contato));
    } else {
      dispatch(adicionarContato(contato));
    }
    setNome('');
    setEmail('');
    setTelefone('');
    setContatoParaEditar(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button type="submit">
        {contatoParaEditar ? 'Salvar Edição' : 'Adicionar Contato'}
      </Button>
    </Form>
  );
};

export default FormularioContato;