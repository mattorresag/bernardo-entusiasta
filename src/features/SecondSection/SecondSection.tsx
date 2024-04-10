import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { SecondSectionCarousel } from "./SecondSectionCarousel";

export const SecondSection = () => {
  return (
    <Flex className="w-full h-full flex-col" id="video">
      <Flex className=" border-y-[1px] border-white-20 w-full h-screen max-h-[744px] bg-gradient items-center justify-center">
        <Flex className="cursor-pointer rounded-[100%] w-[136px] h-[136px] border-[1px] border-white-20 items-center justify-center bg-[#282324]">
          <p className="text-white-87 font-[600] leading-[150%]">
            Assistir vídeo
          </p>
        </Flex>
      </Flex>
      <SecondSectionCarousel />
    </Flex>
  );
};
