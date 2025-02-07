import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemContato from './ItemContato';
import FormularioContato from './FormularioContato';

const ListaContatos = () => {
  const [contatoParaEditar, setContatoParaEditar] = useState(null);
  const contatos = useSelector((state) => state.contatos.contatos);

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <FormularioContato
        contatoParaEditar={contatoParaEditar}
        setContatoParaEditar={setContatoParaEditar}
      />
      {contatos.map((contato) => (
        <ItemContato
          key={contato.id}
          contato={contato}
          editarContato={setContatoParaEditar}
        />
      ))}
    </div>
  );
};

export default ListaContatos;