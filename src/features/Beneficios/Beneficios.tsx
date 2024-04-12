import React, { useState } from "react";
import { Flex } from "../../components/Flex/Flex";
import { BeneficiosItem } from "./BeneficiosItem";

const cards = [
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

  return (
    <Flex className="h-screen max-h-[792px] w-full bg-beneficios relative">
      <div
        className="absolute h-full w-full z-[0] opacity-[0.3]"
        style={{
          backgroundImage: `url(${currentImage})`,
          transition: "background-image 0.8s ease-in-out",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Flex
        className={`w-full lg:w-1/4 z-[1] h-full 2xl:pl-20 p-14 justify-between flex-col border-r-[2px] border-white-20/5`}
      >
        <p className="font-sora text-[54px] min-[1800px]:text-[64px] text-white-100 font-[600] leading-[125%] tracking-[-2px]">
          Benefícios
        </p>
        <Flex className="flex-col gap-4">
          <p className="font-sora text-[30px] min-[1800px]:text-[36px] text-white-100 font-[400] leading-[130%] tracking-[-0.64px]">
            Descontos
          </p>
          <p className="font-sora text-[18px] min-[1800px]:text-[20px] text-white-87 leading-[110%] tracking-[-0.4px]">
            Lorem ipsum dolor sit amet consectetur. Sit vitae vel fermentum dui
            iaculis sem amet. Tellus interdum Lorem ipsum dolor sit amet
            consectetur. Sit vitae vel fermentum dui iaculis sem amet. Tellus
            interdum Lorem ipsum dolor sit amet consectetur. Sit vitae vel
            fermentum dui iaculis sem amet. Tellus interdum Lorem ipsum dolor
            sit amet consectetur. Sit vitae vel fermentum dui iaculis sem amet.
            Tellus interdum{" "}
          </p>
        </Flex>
      </Flex>
      <Flex className="hidden lg:flex w-3/4 h-full">
        {cards.map((card, index) => {
          if (index === 0) return null;
          return (
            <BeneficiosItem
              key={index}
              title={card.title}
              isLast={index === cards.length - 1}
              onMouseEnter={() => setCurrentImage(card.image)}
              onMouseLeave={() => setCurrentImage(cards[0].image)}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
