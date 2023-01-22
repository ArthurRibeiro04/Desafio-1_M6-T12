import React from 'react';
import Formulário from '../components/Formulário';
import ListaRecebimentos from '../components/Lista';
import { Background } from './style';




const HomePage = () => {
    return (
        <Background>
            <Formulário></Formulário>
            <ListaRecebimentos></ListaRecebimentos>
        </Background>
      );
}

export default HomePage