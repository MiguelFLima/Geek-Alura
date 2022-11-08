import React from "react";
import Image from "next/image";
import { toast } from 'react-toastify';

function Footer() {

  const handleInvalid = () => {
    toast.error('Por favor, preencha os campos respeitando os requisitos', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className="h-[553px] w-full md:flex-row md:justify-around md:h-[400px] flex flex-col justify-center items-center gap-2 bg-[#EAF2FD]">
      <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
        <Image
          className=""
          width="176px"
          height="50px"
          src="/Logo.png"
          alt="Logo"
        ></Image>
        <p className="text-lg text-[#464646] drop-shadow-2xl border-none">
          Quem somos nós
        </p>
        <p className="text-lg text-[#464646] drop-shadow-2xl border-none">
          Política de privacidade
        </p>
        <p className="text-lg text-[#464646] drop-shadow-2xl border-none">
          Programa fidelidade
        </p>
        <p className="text-lg text-[#464646] drop-shadow-2xl border-none">
          Nossas lojas
        </p>
        <p className="text-lg text-[#464646] drop-shadow-2xl border-none">
          Quero ser franqueado
        </p>
        <p className="text-lg text-[#464646] drop-shadow-2xl border-none">
          Anuncie aqui
        </p>
      </div>

      <div className="">
        <p className="text-black  text-lg font-bold shadow-[0px_1px_1px_gray] mt-[30px] md:mt-[30px]">
          Fale conosco
        </p>
        <form>
          <input
            required
            className="w-[340px] h-[56px] rounded-md flex justify-center pl-3 items-center shadow-2xl mt-[10px] md:mt-[30px]"
            placeholder="Nome"
            maxLength={40}
            minLength={6}
            onInvalid={handleInvalid}
          />
          <input
            required
            className="w-[340px] h-[82px] rounded-md flex md:mt-[30px] justify-center pl-3 items-center shadow-2xl mt-[10px] place"
            placeholder="Escreva sua mensagem"
            maxLength={120}
            onInvalid={handleInvalid}
          />
          <button className="w-[151px] h-[40px] mt-[10px] bg-[#2a7ae4] hover:bg-blue-600 transition duration-100 active:scale-95 flex justify-center items-center rounded-md md:mt-[30px] text-white">
            Enviar Mensagem
          </button>
        </form>
      </div> 
    </div>
  );
}

export default Footer;
