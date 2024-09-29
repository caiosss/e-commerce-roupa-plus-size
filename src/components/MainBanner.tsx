import banner from "../images/FitnessClouth.gif"
import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="relative h-96 w-full flex items-center justify-center text-center">
      <Image
        src={banner}
        alt="Banner de Roupas Fitness"
        layout="fill" 
        objectFit="cover" 
        quality={100} 
      />
    </div>
  );
}
