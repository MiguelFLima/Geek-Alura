import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import app from "../../firebase";
import { useRecoilState } from "recoil";
import { userAtomCredential } from "../../atoms/userAtomCredential";

function FormularioLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const auth = getAuth(app);
  const [userCredential, setUserCredential] = useRecoilState(userAtomCredential);

  // HandleChange
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserCredential(user)
        console.log("user", user)
      })
      .then((user) => {
        if (user !== null) {
          router.push('/Produtos')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage)
      });
  }

  // ===== Authentication =====

  return (
    <div className="w-[100%] h-[492px] justify-center items-center flex flex-col bg-gray-100 ">
      <p className="font-bold text-xl w-[131px] h-[29px] mb-[24px]">
        Iniciar Sessão
      </p>
      <form onSubmit={signIn} className="justify-center items-center flex flex-col">
        <input
          minLength={6}
          maxLength={40}
          required
          placeholder="Digite seu email"
          className="outline-none border-b-2 xl:w-[423px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-2"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type='password'
          minLength={6}
          maxLength={40}
          required
          placeholder="Digite sua senha"
          className="outline-none border-b-2 xl:w-[423px] xl:h-[63px] w-[80%] md:w-[60%] h-[40px] mb-[24px] pl-2"
          value={user.password}
          onChange={handleChange}
          name="password"
        />
        <button className="xl:w-[423px] xl:h-[63px] md:w-[50%] w-[80%] h-[40px] bg-blue-700 hover:bg-blue-800 transition ease-in-out delay-130 text-white text-lg">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default FormularioLogin;
