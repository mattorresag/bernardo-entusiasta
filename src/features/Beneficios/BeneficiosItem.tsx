import React, { useState } from "react";
import { Flex } from "../../components/Flex/Flex";
interface Props {
  title?: string;
  isLast?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
export const BeneficiosItem = ({
  title,
  isLast = false,
  onMouseEnter,
  onMouseLeave,
}: Props): JSX.Element => {
  return (
    <Flex
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-1/3 z-[1] h-full p-14 justify-end flex-col ${
        isLast ? "" : "border-r-[2px] border-white-20/5"
      }`}
    >
      <p className="font-sora text-[36px] text-white-100 font-[400] leading-[130%] tracking-[-0.64px]">
        {title}
      </p>
    </Flex>
  );
};
