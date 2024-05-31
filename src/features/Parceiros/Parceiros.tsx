import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { ParceirosCarousel } from "./ParceirosCarousel";
import { useRouter } from "next/router";

export const Parceiros = () => {
  const router = useRouter()
  return (
    <Flex className="bg-black-100 max-lg:px-[5%] pt-12 lg:pt-[96px] items-center flex-col gap-20 lg:gap-[160px] relative">
      <Flex className="right-0 absolute top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1117"
          height="448"
          viewBox="0 0 1117 448"
          fill="none"
        >
          <g filter="url(#filter0_f_81_982)">
            <path
              d="M554.885 322.35C765.073 259.404 975.69 197.76 1185.84 134.679L1222 100C1011.85 163.081 801.232 224.725 591.044 287.672C578.662 291.38 556.853 301.779 542.792 301.458C538.396 301.358 547.618 281.245 548.03 279.977C551.841 268.229 561.92 241.445 553.713 229.639C551.343 226.229 544.937 227.12 541.566 227.394C516.75 229.417 492.696 237.115 468.91 243.639C359.549 273.634 248.479 296.086 136.159 313.321L100 348C212.32 330.765 323.39 308.313 432.75 278.318C456.537 271.794 480.591 264.095 505.407 262.073C508.778 261.798 515.184 260.907 517.554 264.317C525.761 276.124 515.682 302.907 511.871 314.655C511.459 315.924 502.237 336.037 506.633 336.137C520.694 336.458 542.503 326.058 554.885 322.35Z"
              fill="url(#paint0_linear_81_982)"
              fill-opacity="0.8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_81_982"
              x="0"
              y="0"
              width="1322"
              height="448"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_81_982"
              />
            </filter>
            <linearGradient
              id="paint0_linear_81_982"
              x1="1228.27"
              y1="310.908"
              x2="-323.538"
              y2="335.863"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9D9D9" />
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>
      <button onClick={() => { router.push('https://www.bernardoentusiasta.com/comunidade') }} className=" z-[1] w-full lg:w-fit h-16  flex max-h-16 items-center bg-white-100">
        <Flex className="max-lg:w-full p-5 h-16 justify-center items-center border-r-0 border-[1px] border-black-20">
          <p className="font-sora uppercase text-black-87 font-[600] leading-[150%]">
            QUERO FAZER PARTE DO CLUB
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
      <Flex className="flex-col gap-14 items-center">
        <Flex className="max-lg:px-[5%] flex-col items-center gap-3">
          <p className="text-white-100 font-pt text-[48px] font-[600] leading-[125%] tracking-[-2px]">
            Parceiros
          </p>
          <p className="lg:text-[20px] text-white-87 max-w-[556px] text-center lg:font-[300] leading-[150%] tracking-[-0.32px] lg:tracking-[-0.4px]">
            Lorem ipsum dolor sit amet consectetur. Sit vitae vel fermentum dui
            iaculis sem amet. Tellus interdum
          </p>
        </Flex>
        <ParceirosCarousel />
      </Flex>
    </Flex>
  );
};
