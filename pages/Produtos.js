import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Dono from '../components/Dono/Dono';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

function Produtos() {
  return (
    <>
        <Header isInTheLoginPageOrLogged={true} />
        <ListaProdutos />
        <Footer />
        <Dono />
    </>
  )
}

export default Produtos;