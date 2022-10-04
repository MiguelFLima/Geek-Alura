import React from "react";

function FormularioLogin() {
  return (
    <div className="w-[100%] h-[492px] justify-center items-center flex flex-col bg-gray-100 ">
      <p className="font-bold text-xl w-[131px] h-[29px] mb-[24px]">Iniciar Sessão</p>
      <input placeholder="Digite seu email" className="border-b-2 xl:w-[423px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-2"  />
      <input placeholder="Digite sua senha" className="border-b-2 xl:w-[423px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-2" />
      <button className="xl:w-[423px] xl:h-[63px] md:w-[50%] w-[80%] h-[40px] bg-blue-700 hover:bg-blue-800 transition ease-in-out delay-130 text-white text-lg">Entrar</button>
    </div>
  );
}

export default FormularioLogin;