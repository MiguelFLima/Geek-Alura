import { ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import React from 'react';
import consoles from '../../Dados/consoles';

function SessaoConsoles() {

    return (
        <div>
          <div className='flex justify-between items-center mt-4 mb-4'>
              <h1 className='flex mb-2 justify-center items-center font-bold text-[22px] ml-4 h-[26px]'>Consoles</h1>
              <div className='flex justify-center items-center mr-4'>
                <p className='text-[#2a7ae4] h-[26px] text-[16px] font-semibold'>Ver tudo {<ArrowForwardIcon />}</p>
              </div>
          </div>
    
          <div className='flex w-full flex-wrap items-center justify-center gap-7 mb-6'>
              {consoles?.map((produto) => (
                <div key={produto.id}>
                  <Image src={produto.foto} height='170px' width='156px' alt={`Produto ${produto.id}`} />
                  <p className='font-semibold'>{produto.nome}</p>
                  <p>{produto.preco}</p>
                  <p className='font-bold text-sm text-[#2a7ae4]'>Ver produto</p>
                </div>
              ))}
          </div>
    
    
        </div>
    
  )
}

export default SessaoConsoles