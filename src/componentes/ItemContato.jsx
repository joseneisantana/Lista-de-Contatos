import React from 'react';
import { useDispatch } from 'react-redux';
import { removerContato } from '../recursos/contatosSlice';
import styled from 'styled-components';

const Item = styled.div`
  background: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ItemContato = ({ contato, editarContato }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <div>
        <strong>{contato.nome}</strong>
        <div>{contato.email}</div>
        <div>{contato.telefone}</div>
      </div>
      <div>
        <Button onClick={() => editarContato(contato)}>Editar</Button>
        <Button onClick={() => dispatch(removerContato(contato.id))}>Remover</Button>
      </div>
    </Item>
  );
};

export default ItemContato;