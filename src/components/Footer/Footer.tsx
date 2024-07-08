import React from "react";
import { Flex } from "../Flex/Flex";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <Flex className="items-center flex-col bg-footer bg-black-100 pt-20 lg:pt-[120px] pb-12 lg:pb-[82px] w-full relative overflow-hidden">
        <Flex className="mb-16">
          <svg
            width="260"
            height="64"
            viewBox="0 0 260 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_81_1122)">
              <path
                d="M31.2735 30.3716H28.894C27.1854 38.4849 24.502 39.8265 19.5022 39.8265H12.0598V22.1437H17.1227C20.8439 22.1437 22.4895 23.365 23.9516 27.694H25.9641V14.2139H23.9516C22.3633 18.8468 21.0216 19.7011 17.547 19.7011H12.0598V2.25909H19.5022C24.3816 2.25909 26.8184 3.66386 28.6475 10.5558H30.9066V0H0.414551V1.82906L1.69318 2.07561C3.82613 2.49991 4.19309 3.17076 4.19309 5.42985V36.6558C4.19309 38.9149 3.82613 39.58 1.69318 40.01L0.414551 40.2508V42.0799H31.2735V30.3716Z"
                fill="white"
              />
              <path
                d="M61.9492 37.7509V19.7584C61.9492 13.8412 59.2658 11.4617 55.4242 11.4617C52.3166 11.4617 49.3235 13.4111 45.4246 16.8284C45.3615 15.0567 45.1207 13.2907 44.6907 11.6451L34.9319 14.6324V16.3411L36.5201 16.5876C37.7987 16.7711 38.1657 17.2585 38.1657 18.7837V37.7509C38.1657 39.3964 37.7356 39.8265 35.9697 40.1304L34.8745 40.3138V42.0856H48.6584V40.3138L47.5633 40.1304C45.8546 39.8265 45.4877 39.3964 45.4877 37.7509V18.7206C47.6206 17.1954 49.1458 16.4042 51.101 16.4042C53.297 16.4042 54.6387 17.6828 54.6387 21.6505V37.7509C54.6387 39.3964 54.2718 39.8265 52.5631 40.1304L51.468 40.3138V42.0856H65.3092V40.3138L64.151 40.1304C62.385 39.8265 61.955 39.3964 61.955 37.7509H61.9492Z"
                fill="white"
              />
              <path
                d="M84.999 38.4218V36.4093C83.7204 37.4471 82.2526 37.9345 80.7331 37.9345C78.3536 37.9345 77.2585 36.6558 77.2585 33.4851V15.8596H85.1252V12.5053H77.2585L77.6255 2.44263H75.9168L75.3664 4.39783C74.3286 7.01815 73.1073 9.03069 71.5821 10.4355C70.12 11.8402 68.1648 13.0558 65.791 14.214V15.8596H69.9365V35.3772C69.9365 40.6867 72.1956 42.94 76.5819 42.94C79.8157 42.94 82.6195 41.4148 84.999 38.4276V38.4218Z"
                fill="white"
              />
              <path
                d="M113.662 34.517V12.5051H103.175V14.2769L104.27 14.4603C105.979 14.7642 106.346 15.1885 106.346 16.8398V36.0536C104.454 37.5157 102.928 38.3127 101.162 38.3127C98.9033 38.3127 97.8082 37.0914 97.8082 33.1867V12.5051H87.3154V14.2769L88.3532 14.4603C90.0619 14.7642 90.4862 15.3147 90.4862 16.8398V34.5284C90.4862 40.6291 93.1696 43.066 96.8277 43.066C99.815 43.066 102.865 41.1165 106.34 37.7623C106.403 40.9961 108.049 42.8251 110.669 42.8251C112.928 42.8251 115.302 41.4834 117.744 38.8631V37.1545C116.953 37.5214 116.219 37.7049 115.669 37.7049C114.144 37.7049 113.656 36.9137 113.656 34.5342L113.662 34.517Z"
                fill="white"
              />
              <path
                d="M136.465 25.1885C135.186 24.4603 133.598 23.6633 131.586 22.8721C127.01 20.9799 124.997 19.8848 124.997 17.2014C124.997 15.0054 126.769 13.5433 129.269 13.5433C132.744 13.5433 134.882 15.1315 136.769 19.5809H138.902V12.752C136.706 12.0181 133.415 11.4734 130.301 11.4734C124.871 11.4734 119.327 14.4033 119.327 21.0487C119.327 24.6438 121.276 26.9029 123.535 28.3076C124.694 28.9785 126.282 29.6493 128.168 30.4406C132.801 32.4531 134.877 33.3075 135.181 36.9025C135.181 39.3451 133.352 40.6237 130.364 40.6237C126.643 40.6237 123.352 38.1238 121.58 33.2444H119.201V40.9907C121.701 42.0285 125.789 42.8197 129.63 42.8197C136.706 42.8197 141.098 39.219 141.098 33.0609C141.098 29.1562 139.085 26.599 136.465 25.1942V25.1885Z"
                fill="white"
              />
              <path
                d="M149.939 7.49999C152.198 7.49999 153.724 5.85441 153.724 3.84187C153.724 1.82933 152.319 0.424561 150.123 0.424561C147.927 0.424561 146.281 2.01281 146.281 3.96228C146.281 6.10096 147.686 7.49999 149.939 7.49999Z"
                fill="white"
              />
              <path
                d="M156.951 40.3141L155.793 40.1306C154.027 39.8267 153.597 39.3967 153.597 37.7511V11.6511L143.047 14.6384V16.3471L144.635 16.5936C145.857 16.7771 146.281 17.2645 146.281 18.4857V37.7568C146.281 39.4024 145.857 39.8325 144.085 40.1363L142.99 40.3198V42.0915H156.957V40.3198L156.951 40.3141Z"
                fill="white"
              />
              <path
                d="M186.469 37.1433C185.678 37.5103 184.944 37.6938 184.393 37.6938C182.868 37.6938 182.381 36.9025 182.381 34.523L182.444 21.473C182.444 12.752 178.482 11.4734 173.906 11.4734C169.331 11.4734 164.515 12.6316 160.553 14.2772L160.673 21.0487H164.331C165.248 18.1819 166.103 16.2897 167.014 15.2519C167.926 14.2141 169.147 13.6637 170.736 13.6637C173.843 13.6637 175.248 16.2267 175.248 22.5682V25.372L169.818 26.4671C161.705 28.0554 158.838 30.3718 158.838 35.4347C158.838 39.7637 161.762 42.8771 166.154 42.8771C169.262 42.8771 172.192 41.2888 175.059 38.0607C175.305 41.1742 176.825 42.8197 179.325 42.8197C181.825 42.8197 184.084 41.2946 186.463 38.8577V37.1491L186.469 37.1433ZM175.065 36.289C173.419 37.6938 171.831 38.4277 170.432 38.4277C167.685 38.4277 165.673 36.1686 165.673 33.0609C165.673 29.9532 167.198 28.9154 171.343 27.998L175.122 27.2068L175.059 36.2947L175.065 36.289Z"
                fill="white"
              />
              <path
                d="M209.822 33.0552C209.822 29.1505 207.81 26.5933 205.189 25.1885C203.911 24.4603 202.322 23.6633 200.31 22.8721C195.734 20.9799 193.722 19.8848 193.722 17.2014C193.722 15.0054 195.494 13.5433 197.993 13.5433C201.468 13.5433 203.607 15.1315 205.493 19.5809H207.626V12.752C205.43 12.0181 202.139 11.4734 199.026 11.4734C193.596 11.4734 188.051 14.4033 188.051 21.0487C188.051 24.6438 190.001 26.9029 192.26 28.3076C193.418 28.9785 195.006 29.6493 196.893 30.4406C201.525 32.4531 203.601 33.3075 203.905 36.9025C203.905 39.3451 202.076 40.6237 199.089 40.6237C195.367 40.6237 192.076 38.1238 190.305 33.2444H187.925V40.9907C190.425 42.0285 194.513 42.8197 198.355 42.8197C205.43 42.8197 209.822 39.219 209.822 33.0609V33.0552Z"
                fill="white"
              />
              <path
                d="M222.632 2.44263H220.923L220.372 4.39783C219.335 7.01815 218.113 9.03069 216.588 10.4355C215.126 11.8402 213.171 13.0558 210.797 14.214V15.8596H214.943V35.3772C214.943 40.6867 217.202 42.94 221.588 42.94C224.822 42.94 227.626 41.4148 230.005 38.4276V36.415C228.727 37.4528 227.259 37.9402 225.739 37.9402C223.36 37.9402 222.265 36.6616 222.265 33.4908V15.8653H230.131V12.5111H222.265L222.632 2.44836V2.44263Z"
                fill="white"
              />
              <path
                d="M257.516 37.6879C255.99 37.6879 255.503 36.8967 255.503 34.5172L255.566 21.4672C255.566 12.7462 251.604 11.4675 247.029 11.4675C242.453 11.4675 237.637 12.6257 233.675 14.2713L233.795 21.0429H237.453C238.371 18.176 239.225 16.2839 240.137 15.2461C241.048 14.2083 242.27 13.6578 243.858 13.6578C246.966 13.6578 248.37 16.2208 248.37 22.5623V25.3661L242.94 26.4613C234.827 28.0495 231.966 30.3659 231.966 35.4288C231.966 39.7578 234.89 42.8712 239.282 42.8712C242.39 42.8712 245.32 41.283 248.187 38.0549C248.433 41.1683 249.953 42.8139 252.453 42.8139C254.953 42.8139 257.212 41.2887 259.591 38.8519V37.1432C258.8 37.5102 258.066 37.6936 257.516 37.6936V37.6879ZM248.181 36.2889C246.535 37.6936 244.947 38.4276 243.548 38.4276C240.802 38.4276 238.789 36.1685 238.789 33.0608C238.789 29.9531 240.314 28.9153 244.46 27.9979L248.238 27.2066L248.175 36.2946L248.181 36.2889Z"
                fill="white"
              />
              <path
                d="M50.8546 59.0291C51.2445 58.6793 51.4509 58.1862 51.4509 57.5899C51.4509 56.5865 50.7801 55.5085 48.8879 55.5085H45.9121V63.8397H49.0657C51.3534 63.8397 52.1676 62.4521 52.1676 61.1505C52.1676 60.1701 51.6975 59.419 50.8489 59.0291H50.8546ZM47.2137 56.7585H48.8879C50.006 56.7585 50.1379 57.2803 50.1379 57.6759C50.1379 58.2951 49.6677 58.6678 48.8879 58.6678H47.2137V56.7585ZM49.1173 62.5954H47.2137V59.8662H49.1173C50.2755 59.8662 50.8374 60.2962 50.8374 61.1907C50.8374 62.0851 50.1952 62.5954 49.1173 62.5954Z"
                fill="white"
              />
              <path
                d="M59.306 59.9923H63.0558V58.7424H59.306V56.7585H63.2221V55.5085H58.0044V63.8454H63.3884V62.5954H59.306V59.9923Z"
                fill="white"
              />
              <path
                d="M75.2916 58.1059C75.2916 56.5521 74.1047 55.5085 72.333 55.5085H69.3228V63.8397H70.6243V60.7148H72.3444C72.419 60.7148 72.4935 60.7148 72.568 60.7033L73.9786 63.8397H75.4062L73.8639 60.4052C74.7698 59.9809 75.2973 59.1437 75.2973 58.1002L75.2916 58.1059ZM72.3444 59.4706H70.6243V56.7642H72.3846C73.8065 56.7642 73.9556 57.7046 73.9556 58.1117C73.9556 58.6162 73.7435 59.4763 72.3387 59.4763L72.3444 59.4706Z"
                fill="white"
              />
              <path
                d="M86.7074 62.5954H86.6615L83.3531 55.5085H81.1858V63.8454H82.4874V56.7585H82.5275L85.8416 63.8454H88.0089V55.5085H86.7074V62.5954Z"
                fill="white"
              />
              <path
                d="M95.9386 55.5085L93.8286 63.8397H95.199L95.8068 61.42H98.4385L99.0406 63.8397H100.411L98.3124 55.5085H95.9386ZM96.1164 60.1758L96.965 56.7585H97.2746L98.1232 60.1758H96.1106H96.1164Z"
                fill="white"
              />
              <path
                d="M112.2 58.1059C112.2 56.5521 111.013 55.5085 109.241 55.5085H106.231V63.8397H107.533V60.7148H109.253C109.327 60.7148 109.402 60.7148 109.476 60.7033L110.887 63.8397H112.309L110.766 60.4052C111.667 59.9809 112.2 59.1437 112.2 58.1002V58.1059ZM109.253 59.4706H107.533V56.7642H109.293C110.715 56.7642 110.864 57.7046 110.864 58.1117C110.864 58.6162 110.652 59.4763 109.247 59.4763L109.253 59.4706Z"
                fill="white"
              />
              <path
                d="M120.571 55.5085H118.094V63.8397H120.582C123.277 63.8397 125.02 62.2056 125.02 59.6712C125.02 57.1369 123.277 55.5085 120.571 55.5085ZM120.571 62.5954H119.396V56.7585H120.559C122.561 56.7585 123.707 57.8192 123.707 59.677C123.707 60.7664 123.3 62.5954 120.571 62.5954Z"
                fill="white"
              />
              <path
                d="M135.026 55.3652C132.56 55.3652 130.702 57.223 130.702 59.6885C130.702 62.154 132.56 64.0002 135.026 64.0002C137.491 64.0002 139.349 62.1425 139.349 59.6885C139.349 57.2344 137.491 55.3652 135.026 55.3652ZM135.026 62.7274C133.294 62.7274 132.038 61.4487 132.038 59.6885C132.038 57.9282 133.294 56.6381 135.026 56.6381C136.757 56.6381 138.013 57.9225 138.013 59.6885C138.013 61.4545 136.757 62.7274 135.026 62.7274Z"
                fill="white"
              />
              <path
                d="M157.812 59.0291C158.201 58.6793 158.408 58.1862 158.408 57.5899C158.408 56.5865 157.737 55.5085 155.845 55.5085H152.863V63.8397H156.017C158.305 63.8397 159.119 62.4521 159.119 61.1505C159.119 60.1701 158.649 59.419 157.806 59.0291H157.812ZM154.171 56.7585H155.845C156.963 56.7585 157.095 57.2803 157.095 57.6759C157.095 58.2951 156.625 58.6678 155.845 58.6678H154.171V56.7585ZM156.074 62.5954H154.171V59.8662H156.074C157.232 59.8662 157.794 60.2962 157.794 61.1907C157.794 62.0851 157.152 62.5954 156.074 62.5954Z"
                fill="white"
              />
              <path
                d="M170.924 58.1059C170.924 56.5521 169.738 55.5085 167.966 55.5085H164.956V63.8397H166.257V60.7148H167.977C168.052 60.7148 168.126 60.7148 168.201 60.7033L169.611 63.8397H171.033L169.491 60.4052C170.391 59.9809 170.924 59.1437 170.924 58.1002V58.1059ZM167.977 59.4706H166.257V56.7642H168.017C169.439 56.7642 169.588 57.7046 169.588 58.1117C169.588 58.6162 169.376 59.4763 167.972 59.4763L167.977 59.4706Z"
                fill="white"
              />
              <path
                d="M178.224 55.5085H176.922V63.8397H178.224V55.5085Z"
                fill="white"
              />
              <path
                d="M184.055 56.7585H186.067V63.8454H187.369V56.7585H189.393V55.5085H184.055V56.7585Z"
                fill="white"
              />
              <path
                d="M194.387 56.7585H196.4V63.8454H197.701V56.7585H199.719V55.5085H194.387V56.7585Z"
                fill="white"
              />
              <path
                d="M208.607 55.3652C206.141 55.3652 204.283 57.223 204.283 59.6885C204.283 62.154 206.141 64.0002 208.607 64.0002C211.072 64.0002 212.93 62.1425 212.93 59.6885C212.93 57.2344 211.072 55.3652 208.607 55.3652ZM208.607 62.7274C206.875 62.7274 205.614 61.4487 205.614 59.6885C205.614 57.9282 206.869 56.6381 208.607 56.6381C210.344 56.6381 211.594 57.9225 211.594 59.6885C211.594 61.4545 210.338 62.7274 208.607 62.7274Z"
                fill="white"
              />
              <path
                d="M31.0671 59.8945L39.404 60.1812V58.8796L31.0671 59.1663V59.8945Z"
                fill="white"
              />
              <path
                d="M219.438 60.1812L227.769 59.8945V59.1663L219.438 58.8796V60.1812Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_81_1122">
                <rect
                  width="259.171"
                  height="64"
                  fill="white"
                  transform="translate(0.414551)"
                />
              </clipPath>
            </defs>
          </svg>
        </Flex>
        <Flex className="absolute right-0 top-0 w-[50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="944"
            height="415"
            viewBox="0 0 944 415"
            fill="none"
          >
            <g filter="url(#filter0_f_81_1119)">
              <path
                d="M494.072 292.763C676.159 238.193 858.619 184.752 1040.68 130.064L1072 100C889.944 154.687 707.484 208.129 525.397 262.699C514.67 265.914 495.776 274.93 483.595 274.651C479.787 274.564 487.776 257.128 488.133 256.028C491.434 245.843 500.166 222.624 493.056 212.388C491.003 209.432 485.454 210.205 482.533 210.443C461.035 212.196 440.196 218.87 419.59 224.526C324.85 250.53 228.629 269.994 131.325 284.936L100 315C197.304 300.058 293.525 280.594 388.265 254.59C408.871 248.934 429.71 242.26 451.208 240.507C454.129 240.269 459.678 239.496 461.731 242.452C468.841 252.688 460.109 275.907 456.808 286.092C456.451 287.192 448.462 304.628 452.27 304.715C464.451 304.994 483.345 295.978 494.072 292.763Z"
                fill="url(#paint0_linear_81_1119)"
                fill-opacity="0.8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_81_1119"
                x="0"
                y="0"
                width="1172"
                height="415"
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
                  result="effect1_foregroundBlur_81_1119"
                />
              </filter>
              <linearGradient
                id="paint0_linear_81_1119"
                x1="1077.43"
                y1="282.843"
                x2="-266.915"
                y2="304.447"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9D9" />
                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </Flex>
        <Flex className="max-lg:px-[5%] w-full lg:h-20 z-[1] mb-20 max-lg:flex-col">
          <Link
            target="_blank"
            passHref
            href="http://instagram.com/bernardo.entusiasta"
          >
            <a className="w-full h-20">
              <Flex className="w-full h-full border-[1px] max-lg:border-r-0 uppercase border-white-20 border-l-0 justify-center">
                <Flex className="items-center text-[16px] tracking-[1.6px] font-[600] leading-[100%] text-white-100 font-poppins">
                  Instagram
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_81_1155)">
                      <path
                        d="M7.77126 7.40037L13.428 7.40037M13.428 7.40037L6.8285 14.0001M13.428 7.40037L13.4279 13.0572"
                        stroke="white"
                        stroke-opacity="0.7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_81_1155">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Flex>
              </Flex>
            </a>
          </Link>
          <Link
            target="_blank"
            passHref
            href="https://www.youtube.com/@bernardo.entusiasta"
          >
            <a className="w-full h-20">
              <Flex className="w-full h-full border-[1px] max-lg:border-r-0 uppercase border-white-20 border-l-0 justify-center">
                <Flex className="items-center text-[16px] tracking-[1.6px] font-[600] leading-[100%] text-white-100 font-poppins">
                  Youtube
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_81_1155)">
                      <path
                        d="M7.77126 7.40037L13.428 7.40037M13.428 7.40037L6.8285 14.0001M13.428 7.40037L13.4279 13.0572"
                        stroke="white"
                        stroke-opacity="0.7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_81_1155">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Flex>
              </Flex>
            </a>
          </Link>
          <Link
            target="_blank"
            passHref
            href="https://www.tiktok.com/@bernardo.entusiasta"
          >
            <a className="w-full h-20">
              <Flex className="w-full h-full border-[1px] max-lg:border-r-0 uppercase border-white-20 border-l-0 justify-center">
                <Flex className="items-center text-[16px] tracking-[1.6px] font-[600] leading-[100%] text-white-100 font-poppins">
                  TikTok
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_81_1155)">
                      <path
                        d="M7.77126 7.40037L13.428 7.40037M13.428 7.40037L6.8285 14.0001M13.428 7.40037L13.4279 13.0572"
                        stroke="white"
                        stroke-opacity="0.7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_81_1155">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Flex>
              </Flex>
            </a>
          </Link>
        </Flex>
        <Flex className="w-full px-[5%] justify-center items-center">
          <p className="h4 text-center text-white-70">
            Todos os direitos reservados 2024 © Bernardo Britto Entusiasta
          </p>
        </Flex>
      </Flex>
    </footer>
  );
};
