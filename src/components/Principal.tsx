/* eslint-disable @typescript-eslint/no-explicit-any */
import { Produto } from "@/data/produto";
import Cards from "./Cards";

interface PrincipalProps {
  produtos: Produto[]
}

export default function Principal({ produtos }: PrincipalProps) {

  function criaCard() {
    return produtos.map((prod) => {
      return (
        <Cards
          key={prod.id}
          nome={prod.nome}
          preco={prod.preco}
          url={prod.url}
          id={prod.id}
        />
      );
    });
  }

  return (
    <div
      className="
            my-32 flex w-11/12
            p-14 rounded-xl flex-wrap gap-20
        "
    >
      {criaCard()}
    </div>
  );
}
