import React, { useState } from "react";
import { Flex } from "../../components/Flex/Flex";
import { BeneficiosItem } from "./BeneficiosItem";
import { BeneficiosItens } from "./BeneficiosItens";
import { MobileBeneficios } from "./MobileBeneficios";

export const cards = [
  {
    image: "/assets/sobre.png",
    smallImage: "/assets/sobre.png"
  },
  {
    image: "/assets/recursos-comunitarios-2.jpg",
    title: "Recursos comunitários",
    smallImage: "/assets/recursos-comunitarios.jpg"
  },
  {
    image: "/assets/informacoes-de-mercado.jpg",
    title: "Informações de mercado",
    smallImage: "/assets/informacoes-de-mercado-2.jpg"
  },
  {
    image: "/assets/oportunidades-exclusivas-2.jpg",
    title: "Oportunidades exclusivas",
    smallImage: "/assets/oportunidades-exclusivas.jpg"
  },
];

export const Beneficios = () => {
  const [currentImage, setCurrentImage] = useState(cards[0].image);

  const handleCurrentImage = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <Flex className="h-screen max-h-[596px] min-[1366px]:max-h-[792px] w-full bg-beneficios relative">
      <div
        className="absolute h-full w-full z-[0] opacity-[0.3]"
        style={{
          backgroundImage: `url(${currentImage})`,
          transition: currentImage === cards[0].image ? '' : "background-image 0.8s ease-in-out",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Flex className="h-full hidden min-[1366px]:flex">
        <BeneficiosItens handleCurrentImage={handleCurrentImage} currentImage={currentImage} />
      </Flex>
      <Flex className="w-full h-full min-[1366px]:hidden">
        <MobileBeneficios handleCurrentImage={handleCurrentImage} />
      </Flex>
    </Flex>
  );
};
