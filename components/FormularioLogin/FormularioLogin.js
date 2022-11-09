import React, { useState } from "react";

function FormularioLogin() {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUser({...user, [name]: value})
  }  

  return (
    <div className="w-[100%] h-[492px] justify-center items-center flex flex-col bg-gray-100 ">
      <p className="font-bold text-xl w-[131px] h-[29px] mb-[24px]">
        Iniciar Sessão
      </p>
      <form className="justify-center items-center flex flex-col">
        <input
          minLength={6}
          maxLength={40}
          required
          placeholder="Digite seu email"
          className="outline-none border-b-2 xl:w-[423px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-2"
          value={user.email}
          onChange={handleChange}
          name='email'
        />
        <input
          minLength={6}
          maxLength={40}
          required
          placeholder="Digite sua senha"
          className="outline-none border-b-2 xl:w-[423px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-2"
          value={user.password}
          onChange={handleChange}
          name='password'
        />
        <button className="xl:w-[423px] xl:h-[63px] md:w-[50%] w-[80%] h-[40px] bg-blue-700 hover:bg-blue-800 transition ease-in-out delay-130 text-white text-lg">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default FormularioLogin;
