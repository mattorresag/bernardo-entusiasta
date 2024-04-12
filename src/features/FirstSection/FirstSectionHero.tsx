import React from "react";
import { Flex } from "../../components/Flex/Flex";
import Link from "next/link";

export const FirstSectionHero = () => {
  return (
    <Flex className="relative w-full  justify-between gap-8 min-[1350px]:items-end flex-col min-[1350px]:flex-row">
      <Flex className="absolute -right-0 bottom-[100px]  w-1/2 h-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1076"
          height="448"
          viewBox="0 0 1076 448"
          fill="none"
        >
          <g filter="url(#filter0_f_81_704)">
            <path
              d="M554.885 322.35C765.073 259.404 975.69 197.76 1185.84 134.679L1222 100C1011.85 163.081 801.232 224.725 591.044 287.672C578.662 291.38 556.853 301.779 542.792 301.458C538.396 301.358 547.618 281.245 548.03 279.977C551.841 268.229 561.92 241.445 553.713 229.639C551.343 226.229 544.937 227.12 541.566 227.394C516.75 229.417 492.696 237.115 468.91 243.639C359.549 273.634 248.479 296.086 136.159 313.321L100 348C212.32 330.765 323.39 308.313 432.75 278.318C456.537 271.794 480.591 264.095 505.407 262.073C508.778 261.798 515.184 260.907 517.554 264.317C525.761 276.124 515.682 302.907 511.871 314.655C511.459 315.924 502.237 336.037 506.633 336.137C520.694 336.458 542.503 326.058 554.885 322.35Z"
              fill="url(#paint0_linear_81_704)"
              fill-opacity="0.8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_81_704"
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
                result="effect1_foregroundBlur_81_704"
              />
            </filter>
            <linearGradient
              id="paint0_linear_81_704"
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
      <Flex className=" max-lg:pb-12 px-[5%] xl:pl-20 flex-col z-[1] gap-6 max-w-[1280px]">
        <p className="max-lg:text-center lg:text-white-100 textdisplay-sm lg:h1 2xl:textdisplay text-white-100 2xl:text-white-100">
          Descubra o Universo <br /> Exclusivo da Alta Relojoaria
        </p>
        <p className="lg:paragraph paragraph-sm max-lg:text-center text-white-87 lg:text-white-87">
          Torne-se membro do Bernardo Entusiasta Clube de Benefícios e desfrute
          de vantagens surpreendentes.
        </p>
      </Flex>
      <Link href="#video">
        <Flex className="max-lg:hidden px-[5%] xl:pl-20 min-[1350px]:pr-20 z-[1] mb-5 cursor-pointer gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_81_659)">
              <path
                d="M12 5V19"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 13L12 19"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 13L12 19"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_81_659">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="caps text-white-100">Saiba Mais</p>
        </Flex>
      </Link>
    </Flex>
  );
};
