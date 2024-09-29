import CarrinhoContext from "@/context/CarrinhoContext";
import { IconShoppingCart } from "@tabler/icons-react";
import { useContext } from "react";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import { Button } from "./ui/button";

export default function Carrinho() {

    const { itens, valorTotal, limpar } = useContext(CarrinhoContext)

    return (
        <div className="bg-green-500 flex flex-wrap items-center gap-4 justify-center rounded-lg flex-col">
            <div className="bg-black bg-opacity-20 rounded-lg text-center w-full">
                <span>Total</span>
                <span>{valorTotal === 0 ? " " : `: R$${valorTotal}`}</span>
            </div>
            
                {itens.length === 0 ? (
                    <IconShoppingCart/>
                ) : (
                    itens.map(item => {
                        return <ItemCarrinhoCard key={item.produto.id} item={item}/>
                    })
                )}

                {itens.length > 0 && (
                    <Button className="flex gap-2 justify-center" onClick={() => limpar()}>Limpar</Button>
                )}
            
        </div>
    )
}