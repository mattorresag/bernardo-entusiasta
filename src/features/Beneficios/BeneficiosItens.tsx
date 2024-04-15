import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { cards } from "./Beneficios";
import { BeneficiosItem } from "./BeneficiosItem";

interface Props {
  handleCurrentImage: (image: string) => void;
  currentImage: string;
}

export const BeneficiosItens = ({ handleCurrentImage, currentImage }: Props) => {
  return (
    <>
      <Flex
        className={`w-full min-[1366px]:w-1/4 z-[1] h-full 2xl:pl-20 py-8 px-[5%] min-[1366px]:p-14 justify-between flex-col border-r-[2px] border-white-20/5`}
      >
        <p className="font-pt text-[54px] min-[1800px]:text-[64px] text-white-100 font-[600] leading-[125%] tracking-[-2px]">
          Benefícios
        </p>
        <Flex className="flex-col gap-4">
          <p className="font-poppins text-[30px] min-[1800px]:text-[36px] text-white-100 font-[400] leading-[130%] tracking-[-0.64px]">
            Descontos
          </p>
          <p className="font-poppins text-[18px] min-[1800px]:text-[20px] text-white-87 leading-[110%] tracking-[-0.4px]">
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
      <Flex className="hidden min-[1366px]:flex w-3/4 h-full">
        {cards.map((card, index) => {
          if (index === 0) return null;
          return (
            <BeneficiosItem
              key={index}
              title={card.title}
              isLast={index === cards.length - 1}
              smallImage={currentImage === cards[0].image ? card.smallImage : ''}
              onMouseEnter={() => handleCurrentImage(card.image)}
              onMouseLeave={() => handleCurrentImage(cards[0].image)}
            />
          );
        })}
      </Flex>
    </>
  );
};
