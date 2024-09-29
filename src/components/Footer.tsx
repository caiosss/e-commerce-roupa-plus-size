import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="bg-black w-full h-48 flex items-center justify-evenly ">
            <div>
                <p className="flex gap-2">Feito com ☕ por <p className="font-black">Caio.</p></p>
            </div>
            <div className="flex gap-5">
                <IconBrandGithub size={50}/>
                <IconBrandLinkedin size={50}/>
            </div>
        </footer>
    )
}