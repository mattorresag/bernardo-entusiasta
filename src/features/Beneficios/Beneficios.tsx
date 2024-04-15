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


  return (
    <Flex className="h-screen max-h-[596px] min-[1366px]:max-h-[792px] w-full bg-beneficios relative">
      <div
        className="absolute h-full w-full z-[0] opacity-[0.3]"
        style={{
          backgroundImage: `url(${cards[0].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Flex className="h-full hidden min-[1366px]:flex">
        <BeneficiosItens />
      </Flex>
      <Flex className="w-full h-full min-[1366px]:hidden">
        <MobileBeneficios />
      </Flex>
    </Flex>
  );
};
