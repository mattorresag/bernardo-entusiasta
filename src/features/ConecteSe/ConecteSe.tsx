import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { ConecteSeAnimation } from "./ConecteSeAnimation";
import { useRouter } from "next/router";


export const ConecteSe = () => {
  const router = useRouter();
  return (
    <Flex className=" py-20 lg:py-[160px] bg-black-100 items-center flex-col gap-[120px] relative ">
      <Flex className="absolute  right-0 top-0 justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="486"
          viewBox="0 0 1920 486"
          fill="none"
        >
          <g filter="url(#filter0_f_81_980)">
            <path
              d="M2164.02 134.625C1962.78 197.609 1761.1 259.158 1559.83 322.006C1547.97 325.709 1527.09 336.092 1513.63 335.772C1509.42 335.672 1518.25 315.59 1518.64 314.323C1522.29 302.594 1531.94 275.851 1524.08 264.063C1521.81 260.659 1515.68 261.548 1512.45 261.822C1488.69 263.841 1465.65 271.528 1442.88 278.042C1338.16 307.991 1231.8 330.408 1124.24 347.617C1061.18 357.706 997.792 365.992 934.194 371.84C888.582 376.034 841.219 380.937 795.366 376.535C774.27 374.51 784.884 362.504 793.552 349.964C794.799 348.16 813.845 320.605 802.195 322.647C756.441 330.665 711.902 339.526 665.394 343.988C584.598 351.74 501.02 360.16 419.749 356.153C401.886 355.273 399.733 351.759 401.822 335.345C403.671 320.82 406.342 308.062 389.23 302.158C353.515 289.836 311.467 305.803 277.612 316.457C180.264 347.094 85.3572 378.547 -17.5454 384.004C-65.7444 386.56 -123.572 388.538 -168.646 367.464C-176.396 363.841 -178.788 358.607 -187 357.434L-152.375 322.809C-144.163 323.982 -141.771 329.216 -134.021 332.839C-88.9468 353.913 -31.1191 351.935 17.0796 349.379C119.982 343.922 214.889 312.469 312.237 281.832C346.092 271.178 388.14 255.211 423.855 267.533C440.967 273.437 438.296 286.195 436.447 300.72C434.358 317.134 436.511 320.648 454.374 321.528C535.645 325.535 619.223 317.115 700.019 309.363C746.527 304.901 791.066 296.04 836.82 288.022C848.47 285.98 829.424 313.535 828.177 315.339C819.509 327.879 808.895 339.885 829.991 341.91C875.844 346.312 923.207 341.409 968.819 337.215C1032.42 331.367 1095.81 323.081 1158.87 312.992C1266.42 295.783 1372.78 273.366 1477.5 243.417C1500.28 236.903 1523.31 229.216 1547.08 227.197C1550.3 226.923 1556.44 226.034 1558.71 229.438C1566.57 241.226 1556.92 267.969 1553.27 279.698C1552.87 280.965 1544.04 301.047 1548.25 301.147C1561.72 301.467 1582.6 291.084 1594.46 287.381C1795.73 224.533 1997.41 162.984 2198.64 99.9999L2164.02 134.625Z"
              fill="url(#paint0_linear_81_980)"
              fill-opacity="0.8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_81_980"
              x="-287"
              y="0"
              width="2585.64"
              height="485.545"
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
                result="effect1_foregroundBlur_81_980"
              />
            </filter>
            <linearGradient
              id="paint0_linear_81_980"
              x1="2211.98"
              y1="342.838"
              x2="-114.857"
              y2="342.838"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9D9D9" />
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>
      <Flex className="max-lg:px-[5%] flex-col gap-10 lg:gap-16 max-w-[855px] items-center">
        <p className="font-sora text-white-87 text-center text-[20px] lg:text-[32px] font-[400] lg:font-[300] leading-[150%] tracking-[-0.4px] lg:tracking-[-0.64px]">
          Conecte-se com entusiastas que compartilham essa mesma paixão em todo
          o mundo. Na Comunidade Bernardo Entusiasta, a excelência e a segurança
          andam de mãos dadas. Junte-se a nós para uma experiência única no
          universo da alta relojoaria.
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
      <Flex className=" w-full">
        <ConecteSeAnimation />
      </Flex>
    </Flex>
  );
};
