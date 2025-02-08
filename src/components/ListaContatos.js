import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removerContato, editarContato } from '../features/contatos/contatosSlice';
import styled from 'styled-components';

const ListaContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const ItemLista = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EditarButton = styled(Button)`
  background-color: #ffc107;
`;

const ListaContatos = () => {
  const contatos = useSelector((state) => state.contatos.contatos);
  const dispatch = useDispatch();
  const [editando, setEditando] = useState(null);
  const [novoNome, setNovoNome] = useState('');
  const [novoEmail, setNovoEmail] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');

  const handleEditar = (index, contato) => {
    setEditando(index);
    setNovoNome(contato.nome);
    setNovoEmail(contato.email);
    setNovoTelefone(contato.telefone);
  };

  const handleSalvarEdicao = (index) => {
    dispatch(
      editarContato({
        index,
        contato: { nome: novoNome, email: novoEmail, telefone: novoTelefone },
      })
    );
    setEditando(null);
  };

  return (
    <ListaContainer>
      {contatos.map((contato, index) => (
        <ItemLista key={index}>
          {editando === index ? (
            <>
              <input
                type="text"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
              />
              <input
                type="email"
                value={novoEmail}
                onChange={(e) => setNovoEmail(e.target.value)}
              />
              <input
                type="tel"
                value={novoTelefone}
                onChange={(e) => setNovoTelefone(e.target.value)}
              />
              <Button onClick={() => handleSalvarEdicao(index)}>Salvar</Button>
            </>
          ) : (
            <>
              <span>{contato.nome}</span>
              <span>{contato.email}</span>
              <span>{contato.telefone}</span>
              <EditarButton onClick={() => handleEditar(index, contato)}>
                Editar
              </EditarButton>
              <Button onClick={() => dispatch(removerContato(index))}>Remover</Button>
            </>
          )}
        </ItemLista>
      ))}
    </ListaContainer>
  );
};

export default ListaContatos;