import React from 'react';
import {Link} from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

// import { Container } from './styles';

function CadastroCategoria() {
  return (
    <PageDefault >
        <h1>Cadastro de Categoria</h1>
        <form>
          <label for="categoria">Nome da categoria</label>
          <input name="categoria" type="text" />
          <button type="submit">Cadastrar</button>
        </form>
        
        <Link to="/" >
            <span>ir para home</span>
        </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;