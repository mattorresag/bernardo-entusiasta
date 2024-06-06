import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { cards } from "./Beneficios";
import { BeneficiosItem } from "./BeneficiosItem";

export const BeneficiosItens = () => {
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
            Conecte-se com uma rede global de colecionadores, investidores e especialistas apaixonados pela alta relojoaria. Troque conhecimentos, descubra raridades e estabeleça relacionamentos duradouros.<br />
            Acesse insights de mercado exclusivos, com informações privilegiadas sobre lançamentos, tendências e valorização de peças. Suas decisões serão orientadas por dados confiáveis e atualizados.<br />
            Torne-se membro e desfrute de um mundo de benefícios exclusivos junto de grandes parceiros.
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
              smallImage={card.smallImage}
            />
          );
        })}
      </Flex>
    </>
  );
};
