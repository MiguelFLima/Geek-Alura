import React from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import starwars from '../../Dados/starwars';

function SecaoSW() {
  return (
    <div>
      <div className='flex justify-between items-center mt-4 mb-4'>
          <h1 className='flex justify-center items-center mb-2 font-bold text-[22px] ml-4 h-[26px]'>Star Wars</h1>
          <div className='flex justify-center items-center mr-4'>
            <p className='text-[#2a7ae4] h-[26px] text-[16px] font-semibold'>Ver tudo {<ArrowForwardIcon />}</p>
          </div>
      </div>

      <div className='flex w-full flex-wrap items-center justify-center gap-7 mb-6'>
          {starwars.map((produto) => (
            <div key={produto.id}>
              <Image src={produto.foto} height='170px' width='156px' alt={`Produto ${produto.id}`} />
              <p className='font-bold'>{produto.nome}</p>
              <p className='font-semibold'>{produto.preco}</p>
              <p className='font-bold text-sm text-[#2a7ae4]'>Ver produto</p>
            </div>
          ))}
      </div>


    </div>
  )
}

export default SecaoSW;