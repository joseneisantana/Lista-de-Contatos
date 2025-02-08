import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removerContato, editarContato } from '../features/contatos/contatosSlice';
import styled from 'styled-components';

const ListaContainer = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 400px; // Define uma largura máxima para a lista
  margin: 20px auto 0; // Adiciona um espaçamento no topo e centraliza a lista
`;

const ItemLista = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center; // Alinha os itens verticalmente ao centro
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: white; // Fundo branco para os itens da lista
`;

const DadosContato = styled.div`
  flex: 1; // Faz com que os dados ocupem o espaço disponível
  margin-right: 10px; // Adiciona um espaçamento à direita
`;

const BotaoContainer = styled.div`
  display: flex;
  gap: 5px; // Adiciona um espaçamento entre os botões
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EditarButton = styled(Button)`
  background-color: #ffc107;
`;

const InputEdicao = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px; // Largura fixa para os inputs de edição
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
              <InputEdicao
                type="text"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
              />
              <InputEdicao
                type="email"
                value={novoEmail}
                onChange={(e) => setNovoEmail(e.target.value)}
              />
              <InputEdicao
                type="tel"
                value={novoTelefone}
                onChange={(e) => setNovoTelefone(e.target.value)}
              />
              <BotaoContainer>
                <Button onClick={() => handleSalvarEdicao(index)}>Salvar</Button>
              </BotaoContainer>
            </>
          ) : (
            <>
              <DadosContato>
                <div><strong>Nome:</strong> {contato.nome}</div>
                <div><strong>E-mail:</strong> {contato.email}</div>
                <div><strong>Telefone:</strong> {contato.telefone}</div>
              </DadosContato>
              <BotaoContainer>
                <EditarButton onClick={() => handleEditar(index, contato)}>
                  Editar
                </EditarButton>
                <Button onClick={() => dispatch(removerContato(index))}>Remover</Button>
              </BotaoContainer>
            </>
          )}
        </ItemLista>
      ))}
    </ListaContainer>
  );
};

export default ListaContatos;