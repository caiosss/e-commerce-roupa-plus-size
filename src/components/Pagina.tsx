import Carrinho from "./Carrinho"
import Menu from "./Menu"

/* eslint-disable @typescript-eslint/no-explicit-any */
interface PaginaProps {
    children?: any
    onSearch: (query: string) => void
}

export default function Pagina(props: PaginaProps) {
    
    return (
        <div className="
            flex flex-col justify-center items-center
        ">
            <nav className="
                w-full text-xl
            ">
                <Menu onSearch={props.onSearch}/>
            </nav>
            <div className="flex justify-end my-4 w-full">
                <Carrinho/>
            </div>
            
            
            
            {props.children}
        </div>
    )
} 