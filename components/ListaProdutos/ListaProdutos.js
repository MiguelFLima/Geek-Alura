import Image from "next/image";
import React from "react";
import consoles from "../../Dados/consoles";
import diversos from "../../Dados/diversos";
import starwars from "../../Dados/starwars";

function ListaProdutos() {
  return (
    <div className="xl:h-[942px] xl:w-[100%] flex justify-center items-center xl:mt-[90px] xl:flex-row flex-col">
      <div className="xl:w-[80%] w-[70%] md:w-[80%]">
        <div className="flex justify-between items-center mt-4 flex-col xl:flex-row md:flex-row w-[100%] mb-6 xl:mb-[50px] xl:mt-[50px] md:mb-[60px] md:mt-[30px]">
          <h1 className="font-bold xl:text-[32px] text-[20px] md:text-[24px] mb-4">Todos os Produtos</h1>
          <button className="bg-blue-700 text-white p-2 mb-2 text-sm flex justify-center items-center xl:w-[164px] md:p-2 xl:h-[40px] xl:p-4">
            Adicionar Produto
          </button>
        </div>

        <div className='flex w-full flex-wrap items-center md:justify-between xl:justify-between justify-center gap-10 mb-6'>
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


      <div className="flex w-full flex-wrap items-center md:justify-between xl:justify-between justify-center gap-10 mb-6">
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

        <div className='flex w-full flex-wrap items-center md:justify-between xl:justify-between justify-center gap-10 mb-10 xl:mb-[120px]'>
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
