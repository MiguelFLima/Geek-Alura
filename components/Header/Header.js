import Image from 'next/image';
import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';

function Header() {
  return (
    <div className='w-full h-[72px] flex items-center justify-around gap-3'>
      <div className='w-[133px] h-[40px] py-3 px-4 flex items-center justify-center'>
        <Image className='' width='100px' height='28px' src='/Logo.png' alt='Logo'></Image>
      </div>
      <button className='w-[133px] h-[40px] text-[#2A7AE4] py-3 px-4 border border-solid border-[#2a7ae4] font-semibold text-sm flex items-center justify-center'>Login</button>
      <Search2Icon height='20px' width='20px' className='mr-[5px]' />
    </div>
  )
}

export default Header