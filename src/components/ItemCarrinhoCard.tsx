import ItemCarrinho from "@/data/ItemCarrinho";
import { Button } from "./ui/button";
import { useContext } from "react";
import CarrinhoContext from "@/context/CarrinhoContext";

interface ItemCarrinhoCardProps {
  item: ItemCarrinho;
}

export default function ItemCarrinhoCard(props: ItemCarrinhoCardProps) {
  const { item } = props;
  const { adicionarItem, removerItem } = useContext(CarrinhoContext);

  return (
    <div className="flex bg-black rounded-md gap-5">
      <span>{item.produto.nome}</span>
      <div className="flex items-center gap-2">
        <Button
          className="flex justify-center items-center rounded-sm h-2 bg-red-500 hover:bg-red-700"
          onClick={() => removerItem(item.produto)}
        >
          -
        </Button>
        <span>{item.quantidade}</span>
        <Button
          className="flex justify-center items-center rounded-sm h-2 bg-green-600 hover:bg-green-800"
          onClick={() => adicionarItem(item.produto)}
        >
          +
        </Button>
      </div>
    </div>
  );
}
