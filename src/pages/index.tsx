import Footer from "@/components/Footer";
import MainBanner from "@/components/MainBanner";
import Pagina from "@/components/Pagina";
import Principal from "@/components/Principal";
import { CarrinhoProvider } from "@/context/CarrinhoContext";
import produto from "@/data/produto";
import { useState } from "react";

export default function Home() {

  const [filteredProducts, setFilteredProducts] = useState(produto);  

    const handleSearch = (searchQuery: string) => {
      if (searchQuery === '') {
        setFilteredProducts(produto); 
      } else {
        const filtered = produto.filter((prod) =>
          prod.nome.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
        setFilteredProducts(filtered);
      }
    };

  return (
    <CarrinhoProvider>
      <Pagina onSearch={handleSearch}>
        <MainBanner/>
        <Principal produtos={filteredProducts}/>
        <Footer/>
      </Pagina>
    </CarrinhoProvider>
  );
}
