import { useRouter } from "next/router";
import Image from "next/image";



export default function VerProduto() {
    const router = useRouter()
    const produto = router.query
    console.log(router.query)

    const url = Array.isArray(produto.url) ? produto.url[0] : produto.url
    
    console.log(url)

    if (!url) {
        return <p>Imagem não disponível</p>;
    }

    return (
        <div>
            <Image
                src={url}
                alt={produto.nome ? String(produto.nome) : 'Produto'}
                width={300}
                height={300}
                className="rounded-xl"
            />
        </div>
    )
}