import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className=' relative h-[192px] xl:h-[352px] w-full'>
      <div  className='md:hidden'>
        <Image layout='fill' height='192px' src='/Cogumelo Banner.jpg' alt='' />
      </div>
      <div  className=' sm:hidden hidden md:inline-block'>
        <Image layout='fill' height='192px' src='/Hero MD.png' alt='' />
      </div>
      <div  className=' sm:hidden hidden md:hidden xl:inline-block'>
        <Image layout='fill' height='352px' src='/Hero MD.png' alt='' />
      </div>
        {/* <Image layout='fill' height='192px' src='/Cogumelo Banner.jpg sm:hidden' alt='' /> */}
        <div className='z-10'>
            <p className='absolute ml-[16px] top-[30%] text-2xl xl:text-4xl font-bold text-[#FFFFFF]'>Dezembro Promocional</p>
            <p className='absolute ml-[16px] top-[50%] text-sm font-semibold xl:text-2xl text-[#FFFFFF]'>Produtos selecionados com 33% de desconto</p>
            <button className='absolute w-[119px] h-[40px] xl:w-[130px] xl:h-[51px] flex justify-center xl:text-[16px] items-center ml-[16px]  top-[70%] bg-[#2a7ae4] text-sm font-semibold text-white'>Ver Consoles</button>
        </div>
    </div>
  )
}

export default Banner