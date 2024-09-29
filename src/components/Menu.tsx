import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

interface MenuProps {
  onSearch: (query: string) => void
}

export default function Menu({ onSearch }: MenuProps) {
    const [searchQuery, setSearchQuery] = useState('')

    const permanecerParametroBusca = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value)
      onSearch(e.target.value)
    }

    return (
      <header
        className="
            bg-blue-600 w-full p-3
            flex justify-around items-center
        "
      >
        <Link href={"#"}>
          <Image
            src={"https://img.icons8.com/ios-glyphs/30/menu--v3.png"}
            width={50}
            height={50}
            alt="menu"
          />
        </Link>

        <div>
          <h1
            className="
                font-black text-4xl 
            "
          >
            <Link href={".."}>
              Fitness Clouth 🏋️‍♀️
            </Link>
          </h1>
        </div>
        <input
          type="text"
          className="
                rounded-full w-1/3 text-black p-1
            "
          value={searchQuery}
          onChange={permanecerParametroBusca}
        />
        <Link href={"#"} className="font-semibold p-2 bg-purple-500 rounded-lg">Entrar</Link>
        
      </header>
    );
}