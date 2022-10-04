import Image from "next/image";
import React from "react";
import consoles from "../../Dados/consoles";
import diversos from "../../Dados/diversos";
import starwars from "../../Dados/starwars";

function ListaProdutos() {
  return (
    <div className="xl:h-[942px] xl:w-[100%] flex justify-center items-center xl:mt-[90px]">
      <div className="w-[80%]">
        <div className="flex justify-between items-center w-[100%] xl:mb-[50px] xl:mt-[50px]">
          <h1 className="font-bold text-lg">Todos os Produtos</h1>
          <button className="bg-blue-700 text-white text-sm flex justify-center items-center xl:w-[164px] xl:h-[40px] xl:p-4">
            Adicionar Produto
          </button>
        </div>

        <div className='flex w-full flex-wrap items-center justify-between gap-10 mb-6'>
          {starwars.map((produto) => (
            <div key={produto.id}>
              <div className='xl:w-[176px] xl:h-[174px]'>
                <Image src={produto.foto} height='174px' width='176px' alt={`Produto ${produto.id}`} />
              </div>
              <p className='font-bold xl:text-lg'>{produto.nome}</p>
              <p className='font-semibold xl:text-lg'>{produto.preco}</p>
              <p className='font-bold text-sm xl:text-lg text-[#2a7ae4]'>Ver produto</p>
            </div>
          ))}
      </div>


      <div className="flex w-full flex-wrap items-center justify-between gap-10 mb-6">
          {consoles.map((produto) => (
            <div key={produto.id}>
              <div className="xl:w-[176px] xl:h-[174px]">
                <Image
                  src={produto.foto}
                  height='174px' width='176px'
                  alt={`Produto ${produto.id}`}
                />
              </div>
              <p className="font-bold xl:text-lg">{produto.nome}</p>
              <p className="font-semibold xl:text-lg">{produto.preco}</p>
              <p className="font-bold text-sm xl:text-lg text-[#2a7ae4]">
                Ver produto
              </p>
            </div>
          ))}
        </div>

        <div className='flex w-full flex-wrap items-center justify-between gap-10 mb-10 xl:mb-[120px]'>
          {diversos.map((produto) => (
            <div key={produto.id}>
              <div className='xl:w-[176px] xl:h-[174px]'>
                <Image src={produto.foto} height='174px' width='176px'  alt={`Produto ${produto.id}`} />
              </div>
              <p className='font-bold xl:text-lg'>{produto.nome}</p>
              <p className='font-semibold xl:text-lg'>{produto.preco}</p>
              <p className='font-bold text-sm xl:text-lg text-[#2a7ae4]'>Ver produto</p>
            </div>
          ))}
      </div>

      

      
      </div>
    </div>
  );
}

export default ListaProdutos;
