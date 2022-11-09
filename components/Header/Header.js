import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { dadosListState } from "../../atoms/dadosAtom";
import { useRouter } from "next/router";

function Header({ isInTheLoginPageOrLogged, isLogged = false }) {
  const [search, setSearch] = useState("");
  const [dados, setDados] = useRecoilState(dadosListState);
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setDados(dados.filter((dado) => dado.nome.toLowerCase().includes(search)));
  }, [search]);

  return (
    <div className="w-full h-[72px] flex items-center justify-around gap-3">
      <div className="w-[133px] h-[40px] xl:w-[176px] xl:h-[50px] py-3 px-4 flex items-center justify-center">
        <Link href="/">
          <a>
            <Image
              className=""
              width="120px"
              height="36px"
              src="/Logo.png"
              alt="Logo"
            />
          </a>
        </Link>
      </div>
      <div className="md:flex justify-between items-center relative hidden xl:ml-[-400px] ">
        <input
          type="text"
          className="border placeholder:text-sm w-[300px]  rounded-[24px] px-7 ml-[-80px] bg-gray-100 placeholder:text-gray-400 placeholder:flex placeholder:items-center placeholder:justify-start py-1"
          placeholder="O que deseja encontrar ?"
          value={search}
          onChange={handleSearchChange}
        />
        <div className="flex justify-between items-center ml-[-35px]">
          <Image
            height="24px"
            width="24px"
            src="/Lupa.png"
            alt="Lupa"
            className=""
          />
        </div>
      </div>

      {isInTheLoginPageOrLogged ? (
        ""
      ) : (
        <Link href="/Login">
          <a>
            <button className="w-[133px] h-[40px] text-[#2A7AE4] py-3 px-4 border border-solid hover:bg-cyan-900 hover:text-white transition ease-in-out delay-130 border-[#2a7ae4] font-semibold text-sm flex items-center justify-center">
              Login
            </button>
          </a>
        </Link>
      )}

      {isLogged ? (
        <button
          onClick={() => router.push("/profile")}
          className="px-3 py-2 bg-green-600 rounded-lg text-white transition duration-100 active:scale-95 hover:bg-green-700"
        >
          Acessar meu perfil
        </button>
      ) : (
        ""
      )}

      <div className="md:hidden flex justify-center items-center">
        <Search2Icon height="20px" width="20px" className="mr-[5px]" />
      </div>
    </div>
  );
}

export default Header;
