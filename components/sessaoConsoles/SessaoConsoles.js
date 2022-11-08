import { ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { dadosListState } from '../../atoms/dadosAtom';

function SessaoConsoles() {

  const dadosAtom = useRecoilValue(dadosListState)
  const meusDados = dadosAtom.filter((dado) => dado.categoria === 'consoles');

    return (
      <div>
      <div className='flex justify-between items-center mt-4 mb-4 xl:ml-24'>
          <h1 className='flex justify-center items-center mb-2 font-bold text-[22px]  ml-4 h-[26px] md:text-3xl xl:ml-0 xl:w-full md:my-5'>Consoles</h1>
          <div className='flex justify-center items-center xl:w-[130px] mr-4'>
            <p className='text-[#2a7ae4] xl:mr-4  h-[26px] text-[16px] font-semibold md:text-lg'>Ver tudo{<ArrowForwardIcon />}</p>
          </div>
      </div>

      <div className='flex w-full flex-wrap items-center justify-center gap-10 mb-6'>
          {meusDados.map((produto) => (
            <div key={produto.id}>
              <div className='xl:w-[176px] xl:h-[174px]'>
                <Image src={produto.foto} height='170px' width='156px'  alt={`Produto ${produto.id}`} />
              </div>
              <p className='font-bold xl:text-lg'>{produto.nome}</p>
              <p className='font-semibold xl:text-lg'>{produto.preco}</p>
              <p className='font-bold text-sm xl:text-lg text-[#2a7ae4]'>Ver produto</p>
            </div>
          ))}
      </div>


    </div>
    
  )
}

export default SessaoConsoles