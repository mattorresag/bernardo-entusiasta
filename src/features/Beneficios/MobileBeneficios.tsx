import React, { useEffect, useState } from "react";
import { cards } from "./Beneficios";
import { BeneficiosItens } from "./BeneficiosItens";
import { Flex } from "../../components/Flex/Flex";
import { BeneficiosItem } from "./BeneficiosItem";

interface Props {
  handleCurrentImage: (image: string) => void;
}

export const MobileBeneficios = ({ handleCurrentImage }: Props) => {
  const [selected, setSelected] = useState(cards[0]);

  useEffect(() => {
    handleCurrentImage(selected.image);
  }, [selected]);

  return (
    <Flex className="flex-col gap-8 py-8 w-full">
      {selected === cards[0] ? (
        <Flex
          className={`w-full min-[1366px]:w-1/4 z-[1] h-full 2xl:pl-20 px-[5%] min-[1366px]:p-14 justify-between flex-col border-r-[2px] border-white-20/5`}
        >
          <p className="font-pt text-[54px] min-[1800px]:text-[64px] text-white-100 font-[600] leading-[125%] tracking-[-2px]">
            Benefícios
          </p>
          <Flex className="flex-col gap-4">
            <p className="font-poppins text-[30px] min-[1800px]:text-[36px] text-white-100 font-[400] leading-[130%] tracking-[-0.64px]">
              Descontos
            </p>
            <p className="font-poppins text-[18px] min-[1800px]:text-[20px] text-white-87 leading-[110%] tracking-[-0.4px]">
              Lorem ipsum dolor sit amet consectetur. Sit vitae vel fermentum
              dui iaculis sem amet. Tellus interdum Lorem ipsum dolor sit amet
              consectetur. Sit vitae vel fermentum dui iaculis sem amet. Tellus
              interdum Lorem ipsum dolor sit amet consectetur. Sit vitae vel
              fermentum dui iaculis sem amet. Tellus interdum Lorem ipsum dolor
              sit amet consectetur. Sit vitae vel fermentum dui iaculis sem
              amet. Tellus interdum{" "}
            </p>
          </Flex>
        </Flex>
      ) : (
        <BeneficiosItem
          title={selected.title}
          isLast={selected.title === cards[cards.length - 1].title}
        />
      )}
      <Flex className="justify-between items-center px-[5%]">
        <Flex className="text-white-100 font-sora font-[700] leading-[150%] tracking-[-0.32px]">
          <p>{cards.indexOf(selected) + 1}</p>
          <p className="text-white-60">/{cards.length}</p>
        </Flex>
        <button
          className="z-[10]"
          onClick={() =>
            setSelected((oldState) =>
              oldState === cards[cards.length - 1]
                ? cards[0]
                : cards[cards.indexOf(oldState) + 1]
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <g clip-path="url(#clip0_2046_219)">
              <path
                d="M4.16675 10.0928H15.8334"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8333 5.09277L15.8333 10.0928"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8333 15.0928L15.8333 10.0928"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2046_219">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(0 -1 1 0 0 20.0928)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </Flex>
    </Flex>
  );
};
