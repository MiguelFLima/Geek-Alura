import React, { useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { dadosListState } from "../../atoms/dadosAtom";
import { child, get, ref, onValue } from "firebase/database";
import { db } from "../../firebase";

function SecaoSW() {
  const [dados, setDados] = useRecoilState(dadosListState);
  const meusDados = dados?.filter((dado) => dado.categoria === "starwars");

  // FUNCAO CERTA
  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, "products"))
    .then((snapshot) => {
      const data = snapshot.val()
      setDados(data)
    })
  }, [])

  // FUNCAO ATRIBULADA
  // useEffect(() => {
  //   const dbRef = ref(db);
  //   get(child(dbRef, "products"))
  //   .then((snapshot) => {
  //     const data = snapshot.val()
  //     console.log("data", data)
  //     Object.values(data).map((product) => {
  //       setDados(oldArray => [...oldArray, product])
  //     })
  //   })

  // }, [])

  // set data
  // useEffect(() => {
  //     .then((snapshot) => {
  //       const data = snapshot.val();
  //       Object.values(data).map((product) => setDados([...dados, product]), []);

  // useEffect(() => {
  //   onValue(ref(db), (snapshot) => {
  //     console.log("data", data)
  //     if (data !== null) {
  //       Object.values(data).map((product) => {
  //         setDados([...dados, product]);
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div>
      <div className="flex justify-between items-center mt-4 mb-4 xl:ml-24">
        <h1 className="flex justify-center items-center mb-2 font-bold text-[22px]  ml-4 h-[26px] md:text-3xl xl:ml-0 xl:w-full md:my-5">
          Star Wars
        </h1>
        <div className="flex justify-center items-center mr-4 xl:mr-0 xl:w-[130px] ">
          <p className="text-[#2a7ae4] xl:mr-4 h-[26px] text-[16px] font-semibold md:text-lg">
            Ver tudo {<ArrowForwardIcon />}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-10 mb-6">
        {meusDados?.map((produto) => (
          <div key={produto.id}>
            <div className="xl:w-[176px] xl:h-[174px]">
              <Image
                src={produto.foto}
                height="170px"
                width="156px"
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
    </div>
  );
}

export default SecaoSW;
