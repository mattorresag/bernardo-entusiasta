import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { SobreText } from "./SobreText";

export const Sobre = () => {
  return (
    <Flex className=" max-lg:flex-col max-lg:pt-20 items-end bg-footer max-lg:gap-20 bg-black-100 lg:py-[160px] lg:px-20  2xl:min-[1800px]:pr-[236px]">
      <div
        className="w-full hidden lg:flex lg:w-1/2 h-[90vh] max-h-[400px] md:max-h-[700px] lg:max-h-[928px] relative"
        style={{
          backgroundImage: "url('/assets/Sobre.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

      </div>
      <SobreText />
      <div
        className="w-full lg:hidden pt-[107%]  relative"
        style={{
          backgroundImage: "url('/assets/Sobre.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>
    </Flex>
  );
};
