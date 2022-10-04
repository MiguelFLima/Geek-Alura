import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className='h-[553px] w-full md:flex-row md:justify-around md:h-[400px] flex flex-col justify-center items-center gap-2 bg-[#EAF2FD]'>

      <div className='flex flex-col justify-center items-center gap-2 md:gap-3'>
        <Image className='' width='176px' height='50px' src='/Logo.png' alt='Logo'></Image>
        <p className='text-lg text-[#464646] drop-shadow-2xl border-none'>Quem somos nós</p>
        <p className='text-lg text-[#464646] drop-shadow-2xl border-none'>Política de privacidade</p>
        <p className='text-lg text-[#464646] drop-shadow-2xl border-none'>Programa fidelidade</p>
        <p className='text-lg text-[#464646] drop-shadow-2xl border-none'>Nossas lojas</p>
        <p className='text-lg text-[#464646] drop-shadow-2xl border-none'>Quero ser franqueado</p>
        <p className='text-lg text-[#464646] drop-shadow-2xl border-none'>Anuncie aqui</p>
      </div>

        <div className=''>
            <p className='text-black  text-lg font-bold shadow-[0px_1px_1px_gray] mt-[30px] md:mt-[30px]'>Fale conosco</p>
            <input className='w-[340px] rounded-md h-[56px] flex justify-center pl-3 items-center shadow-2xl mt-[10px] md:mt-[30px]' placeholder='Nome'/>
            <input className='w-[340px] rounded-md h-[82px] flex md:mt-[30px] justify-center pl-3 items-center shadow-2xl mt-[10px] place' placeholder='Escreva sua mensagem'/>
            <button className='bg-[#2a7ae4] flex justify-center items-center w-[151px] rounded-md h-[40px] mt-[10px] md:mt-[30px] text-white'>Enviar Mensagem</button>
        </div>
    </div>
  )
}

export default Footer