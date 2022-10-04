import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Dono from '../components/Dono/Dono';
import FormLogin from '../components/FormLogin/FormLogin';

function Login() {
  return (
    <>
        <Header />
        <FormLogin />
        <Footer />
        <Dono />
    </>
  )
}

export default Login;