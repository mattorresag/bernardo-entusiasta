import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { FirstSectionHeader } from "./FirstSectionHeader";
import { FirstSectionHero } from "./FirstSectionHero";
export const FirstSection = (): JSX.Element => {
  return (
    <Flex className="lg:pt-12 lg:pb-20  bg-black-100 flex-col gap-12 lg:gap-20">
      <FirstSectionHeader />
      <FirstSectionHero />
    </Flex>
  );
};
