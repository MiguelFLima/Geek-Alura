import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className=' relative h-[192px] w-full'>
        <Image layout='fill' height='192px' src='/Cogumelo Banner.jpg' alt='' />
        <div className='z-10'>
            <p className='absolute ml-[16px] top-[30%] text-2xl font-bold text-[#FFFFFF]'>Dezembro Promocional</p>
            <p className='absolute ml-[16px] top-[50%] text-sm font-semibold text-[#FFFFFF]'>Produtos selecionados com 33% de desconto</p>
            <button className='absolute w-[119px] h-[40px] flex justify-center items-center ml-[16px] top-[70%] bg-[#2a7ae4] text-sm font-semibold text-white'>Ver Consoles</button>
        </div>
    </div>
  )
}

export default Banner