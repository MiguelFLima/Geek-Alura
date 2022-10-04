import React from 'react';


function FormProdutoNovo() {
  return (
    <div className="w-[100%] xl:h-[750px] h-[550px] justify-center items-center flex flex-col bg-gray-100 ">
      <form className='w-[100%] xl:h-[750px] h-[620px] justify-center items-center flex flex-col bg-gray-100 xl:mb-10 '>
        <p className="font-bold xl:text-[32px] text-[22px] h-[44px] xl:w-[559px] w-[70%] flex justify-center xl:h-[29px] mb-[40px] xl:mb-[60px]">Adicionar novo produto</p>
        <input required placeholder="URL da imagem" className="border-b-2 xl:w-[580px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-4"  />
        <input required placeholder="Categoria" className="border-b-2 xl:w-[580px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-4" />
        <input required placeholder="Nome do Produto" className="border-b-2 xl:w-[580px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-4" />
        <input required placeholder="Preço do Produto" className="border-b-2 xl:w-[580px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-4" />
        <input required placeholder="Descrição do Produto" className="border-b-2 xl:w-[580px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[40px] pl-4" />
        <button className="xl:w-[423px] xl:h-[63px] md:w-[50%] w-[80%] h-[40px] bg-blue-700 hover:bg-blue-800 transition ease-in-out delay-130 xl:text-[26px] text-white text-lg">Cadastrar</button>
      </form>
    </div>
  )
}

export default FormProdutoNovo