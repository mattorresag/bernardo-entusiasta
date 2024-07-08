import React, { useState } from "react";
import { Flex } from "../../components/Flex/Flex";
import { SecondSectionCarousel } from "./SecondSectionCarousel";
import { Modal } from "../../components/Modal/Modal";

export const SecondSection = () => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <>
      <Flex className="w-full h-full flex-col" id="video">
        <Flex className=" border-y-[1px] border-white-20 w-full h-screen max-h-[356px] md:max-h-[600px] lg:max-h-[744px] bg-gradient items-center justify-center">
          <Flex
            className=" cursor-pointer rounded-[100%] w-[136px] h-[136px] border-[1px] border-white-20 items-center justify-center bg-[#282324]"
            onClick={() => setOpenVideo(true)}
          >
            <p className="text-white-87 font-[600] leading-[150%]">
              Assistir vídeo
            </p>
          </Flex>
        </Flex>
        <SecondSectionCarousel />
      </Flex>
      {openVideo && (
        <Modal handleClose={() => setOpenVideo(false)} isOpen={openVideo}>
          <Flex className="justify-center items-center w-full h-full relative">
            <iframe
              className="w-full h-full"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/IUWqMXE-S9s"
              title="FAÇA PARTE DA NOSSA COMUNIDADE!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </Flex>
        </Modal>
      )}
    </>
  );
};
