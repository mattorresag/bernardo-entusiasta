import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { useRouter } from "next/router";

export const JunteSe = () => {
  const router = useRouter()
  return (
    <Flex
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage:
          "linear-gradient(0deg, rgba(217, 217, 217, 0.00) 0%, rgba(217, 217, 217, 0.02) 14.46%, rgba(217, 217, 217, 0.04) 29.4%, rgba(217, 217, 217, 0.06) 49.44%, rgba(217, 217, 217, 0.04) 67.27%, rgba(217, 217, 217, 0.02) 85.42%, rgba(217, 217, 217, 0.00) 100%), url('/assets/Junte-se-ao-club.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "30% center"
      }}
      className="bg-black-100 max-lg:px-[5%] justify-center items-center max-h-[700px] lg:max-h-[975px] gap-14 flex-col"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.53)",
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
          className="max-lg:hidden"
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
          className="max-lg:hidden"
        />
      </div>
      <Flex className="flex-col gap-14 z-[1] items-center">
        <p className="font-pt text-center text-[56px] font-[700] lg:text-[88px] z-[1] text-white-100 leading-[125%] tracking-[-2px] lg:tracking-[-1.76px]">
          Junte-se ao nosso Club
        </p>
        <button onClick={() => { router.push('https://www.bernardoentusiasta.com/comunidade') }} className="w-full lg:w-fit h-16  flex max-h-16 items-center bg-white-100">
          <Flex className="max-lg:w-full p-5 h-16 justify-center items-center border-r-0 border-[1px] border-black-20">
            <p className="font-sora uppercase text-black-87 font-[600] leading-[150%]">
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
