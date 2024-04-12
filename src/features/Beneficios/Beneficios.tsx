import React, { useState } from "react";
import { Flex } from "../../components/Flex/Flex";
import { BeneficiosItem } from "./BeneficiosItem";
import { BeneficiosItens } from "./BeneficiosItens";
import { MobileBeneficios } from "./MobileBeneficios";

export const cards = [
  {
    image: "/assets/sobre.png",
  },
  {
    image: "/assets/juntese.png",
    title: "Recursos comunitários",
  },
  {
    image: "/assets/juntese.png",
    title: "Informações de mercado",
  },
  {
    image: "/assets/juntese.png",
    title: "Oportunidades exclusivas",
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
          transition: "background-image 0.8s ease-in-out",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Flex className="h-full hidden min-[1366px]:flex">
        <BeneficiosItens handleCurrentImage={handleCurrentImage} />
      </Flex>
      <Flex className="w-full h-full min-[1366px]:hidden">
        <MobileBeneficios handleCurrentImage={handleCurrentImage} />
      </Flex>
    </Flex>
  );
};
