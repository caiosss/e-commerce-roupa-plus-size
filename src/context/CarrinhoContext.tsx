/* eslint-disable @typescript-eslint/no-explicit-any */
import ItemCarrinho from "@/data/ItemCarrinho";
import { createContext, useState } from "react";

interface CarrinhoContextProps {
  itens: ItemCarrinho[];
  valorTotal: number;
  adicionarItem: (produto: any) => void;
  removerItem: (produto: any) => void;
  limpar: () => void
}

const CarrinhoContext = createContext<CarrinhoContextProps>({} as any);
export default CarrinhoContext;

export function CarrinhoProvider(props: any) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarItem(produto: any) {
    const item = itens.find((i) => i.produto.id === produto.id) ?? {
      produto,
      quantidade: 0,
    };
    const novoItem = { ...item, quantidade: item.quantidade + 1 };
    const outrosItens = itens.filter((i) => i.produto.id !== produto.id);
    setItens([...outrosItens, novoItem].sort(ordernarItem));
  }

  function removerItem(produto: any) {
    const novosItens = itens
      .map((item) => {
        return item.produto.id === produto.id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item;
      })
      .filter((item) => item.quantidade > 0);
    setItens(novosItens);
  }

  function limpar() {
    setItens([])
  }

  function valorTotal() {
    return itens.reduce((total: number, item: ItemCarrinho) => {
      return total + ((item.quantidade * item.produto.preco));
    }, 0);
  }

  function ordernarItem(a: ItemCarrinho, b: ItemCarrinho) {
    return a.produto.nome > b.produto.nome ? 1 : -1;
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        limpar,
        get valorTotal() {
          return valorTotal();
        },
      }}
    >
      {props.children}
    </CarrinhoContext.Provider>
  );
}
