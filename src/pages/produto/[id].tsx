/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagina from "@/components/Pagina";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CarrinhoContext, { CarrinhoProvider } from "@/context/CarrinhoContext";
import produto from "@/data/produto";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
// import VerProduto from "@/components/VerProduto";

interface ProdutoProps {
  nome: string;
  preco: number;
  url: string;
}

export default function Produto(props: ProdutoProps) {
  
    const { adicionarItem } = useContext(CarrinhoContext)

  return (
    <CarrinhoProvider>
      <Pagina>
        <div className="flex my-20 gap-10 bg-purple-500 p-4 w-3/5 rounded-xl">
          <Image
            src={props.url}
            alt={props.nome}
            width={400}
            height={300}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-10">
            <span className="font-bold text-black text-5xl">
              <h1>{props.nome}</h1>
            </span>
            <span className="flex gap-2">
              <Badge className="bg-green-500 hover:bg-green-700 cursor-pointer text-black font-semibold">
                Ótimo
              </Badge>
              <Badge className="bg-green-500 hover:bg-green-700 cursor-pointer text-black font-semibold">
                Qualidade Boa
              </Badge>
              <Badge className="bg-green-500 hover:bg-green-700 cursor-pointer text-black font-semibold">
                Em estoque
              </Badge>
            </span>
            <span className="font-semibold text-2xl text-black">
              <h2>R${props.preco.toFixed(2)}</h2>
            </span>
            <span className="font-medium text-lg text-black">
              <h3>Descrição: </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pulvinar faucibus elit ac ultricies. Pellentesque nec libero
                ultrices, euismod nisi sit amet, iaculis orci.
              </p>
            </span>
            <div className="flex gap-2">
              <Button
                className="bg-green-500 font-black text-2xl"
                onClick={ () => adicionarItem(props)}
              >
                Comprar
              </Button>
              <Link href={".."}>
                <Button className="bg-red-500 font-black text-2xl">
                  Cancelar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Pagina>
    </CarrinhoProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.params!;

  const produtoSelecionado = produto.find((prod) => prod.id === id);

  if (!produtoSelecionado) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...produtoSelecionado,
    },
  };
};
