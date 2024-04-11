import React from "react";
import { Flex } from "../../components/Flex/Flex";

export const JunteSe = () => {
  return (
    <Flex
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage:
          "linear-gradient(0deg, rgba(217, 217, 217, 0.00) 0%, rgba(217, 217, 217, 0.02) 14.46%, rgba(217, 217, 217, 0.04) 29.4%, rgba(217, 217, 217, 0.06) 49.44%, rgba(217, 217, 217, 0.04) 67.27%, rgba(217, 217, 217, 0.02) 85.42%, rgba(217, 217, 217, 0.00) 100%), url('/assets/juntese.png')",
        backgroundSize: "cover",
      }}
      className="bg-black-100 justify-center items-center max-h-[975px] gap-14 flex-col"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.93)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "30%",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.93) 0%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.93) 0%, transparent 100%)",
          }}
        />
      </div>
      <Flex className="flex-col gap-14 z-[1] items-center">
        <p className="font-sora text-[88px] z-[1] text-white-100 leading-[125%] tracking-[-1.76px]">
          Junte-se ao nosso Club
        </p>
        <button className="h-16  flex max-h-16 items-center bg-white-100">
          <Flex className="p-5 h-16 items-center border-[1px] border-black-20">
            <p className="font-sora text-black-87 font-[600] leading-[150%]">
              Inscreva-se agora
            </p>
          </Flex>
          <Flex className="p-5 h-16 items-center border-l-[0px] border-[1px] border-black-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
            >
              <path
                d="M9.7998 11.8L14.5998 6.99995L9.7998 2.19995"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.3999 13L7.3999 7L1.3999 1"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>
        </button>
      </Flex>
    </Flex>
  );
};
