import React, { useState } from "react";
import { Flex } from "../../components/Flex/Flex";
interface Props {
  title?: string;
  isLast?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  smallImage?: string;
}
export const BeneficiosItem = ({
  title,
  isLast = false,
  onMouseEnter,
  onMouseLeave,
  smallImage,
}: Props): JSX.Element => {
  return (
    <Flex
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}

      className={`w-full relative min-[1366px]:w-1/3 z-[1] h-full px-[5%] min-[1366px]:p-14 justify-end flex-col ${isLast ? "" : "border-r-[2px] border-white-20/5"
        }`}
    >
      <div className="absolute h-[75%] top-0 left-0 w-full" style={{
        backgroundImage: `url('${smallImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} />
      <p className="font-poppins text-[30px] min-[1800px]:text-[36px] text-white-100 font-[500] leading-[130%] tracking-[-0.64px]">
        {title}
      </p>
    </Flex>
  );
};
