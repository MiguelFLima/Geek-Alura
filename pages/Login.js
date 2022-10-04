import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Dono from '../components/Dono/Dono';

function Login() {
  return (
    <>
        <Header isInTheLoginPageOrLogged={true} />
        <Footer />
        <Dono />
    </>
  )
}

export default Login;