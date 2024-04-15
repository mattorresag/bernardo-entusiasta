import React, { useEffect, useRef, useState } from "react";
import { Flex } from "../../components/Flex/Flex";

const sobreText = {
  first:
    "O @bernardo.entusiasta nasceu do amor pela alta relojoaria. Um nicho que carece de conteúdo de alta qualidade no Brasil. Um nicho com gigantesco potencial de crescimento e que une alguns seguimentos: luxo, lifestyle, moda e empreendedorismo. Em 10 meses de produção de conteúdo compilamos mais de 5 milhões de visualizações no YouTube, Tiktok e Instagram. Todas as fotos e vídeos são proprietários. A ideia é unir diversos tipos de conteúdo em volta da relojoaria, focando no storytelling e indo além. Com uma produção de conteúdo de altissíma qualidade produzida pela Avocado Mídia.",
};

export const SobreText = () => {

  return (
    <Flex className=" px-[5%] lg:pl-[10%] lg:pr-0 w-full lg:w-1/2 2xl:pl-[180px] flex-col gap-14 lg:gap-[120px]">
      <Flex className="flex-col gap-8">
        <p className="font-sora text-[24px] font-[600] text-white-100 leading-[150%] tracking-[2.4px] uppercase">
          Sobre
        </p>
        <p className="font-sora text-[16px] lg:text-[20px] text-white-87 tracking-[-0.32px] lg:tracking-[-0.4px] leading-[150%] font-[300]">
          {sobreText.first}
        </p>
      </Flex>
    </Flex>
  );
};
