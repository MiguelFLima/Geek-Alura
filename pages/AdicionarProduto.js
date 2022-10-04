import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Dono from '../components/Dono/Dono';
import FormNovoProduto from '../components/FormProdutoNovo/FormProdutoNovo';

function AdicionarProduto() {
  return (
    <>
        <Header />
        <FormNovoProduto />
        <Footer />
        <Dono />
    </>
  )
}

export default AdicionarProduto;