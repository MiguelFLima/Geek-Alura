import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Dono from '../components/Dono/Dono';
import FormularioLogin from '../components/FormularioLogin/FormularioLogin';

function Login() {
  
  return (
    <>
        <Header isInTheLoginPageOrLogged={true} />
        <FormularioLogin />
        <Footer />
        <Dono />
    </>
  )
}

export default Login;