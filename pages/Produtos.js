import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Dono from "../components/Dono/Dono";
import ListaProdutos from "../components/ListaProdutos/ListaProdutos";
import { useRouter } from "next/router";

function Produtos() {
  const router = useRouter();

  // Checking if the user is logged
  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, []);

  return (
    <>
      <Header isInTheLoginPageOrLogged={true} isLogged={true} />
      <ListaProdutos />
      <Footer />
      <Dono />
    </>
  );
}

export default Produtos;
