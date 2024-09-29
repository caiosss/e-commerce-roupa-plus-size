import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useContext } from "react";
import CarrinhoContext from "@/context/CarrinhoContext";

interface CardsProps {
  nome: string
  url: string
  preco: number
  id: string
}

export default function Cards(props: CardsProps) {

  const { adicionarItem, removerItem } = useContext(CarrinhoContext)

  return (
    <div
      className=" p-4 rounded-xl max-h-svh
            flex flex-col gap-3 flex-wrap max-w-xs
        "
    >
      <div>
        <Link href={`/produto/${props.id}`}>
          <Image
            src={props.url}
            alt={"teste"}
            height={300}
            width={400}
            className="rounded-xl"
          />
        </Link>
      </div>
      <div>
        <h1 className="font-black text-black text-2xl">{props.nome}</h1>
      </div>
      <div className="font-black text-black text-md flex gap-5">
        <p>R${props.preco.toFixed(2)}</p>
        <Button className="bg-green-500 hover:bg-green-700 font-black text-2xl" onClick={() => adicionarItem(props)}>+</Button>
        <Button className="bg-red-500 hover:bg-red-700 font-black text-2xl" onClick={() => removerItem(props)}>-</Button>
      </div>
    </div>
  );
}
