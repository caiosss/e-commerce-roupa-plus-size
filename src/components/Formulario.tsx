import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../images/logo.png";

export default function FormularioLogin() {
  return (
    <div className="flex justify-center items-center h-screen font-medium text-xl">
      <div className="flex bg-purple-300 p-4 rounded-xl items-center">
        <Image src={logo} alt="logo" width={300} />

        <form action="" className="flex gap-3 items-center flex-col text-black">
          <label htmlFor="email" className="">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="seu@email.com"
            className="p-3 rounded-lg"
          />
          <label htmlFor="senha" className="">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            placeholder="****"
            className="p-3 rounded-lg"
          />
          <Link href={".."}>
            <Button className="bg-green-500 font-medium text-2xl">
              Entrar
            </Button>
          </Link>
          <div className="font-light text-sm">
            <p>
              Não possui conta? <Link href={"#"}>Cadastre-se</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
