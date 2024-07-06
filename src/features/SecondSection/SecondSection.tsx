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
          <Flex className="justify-center items-center">
            <video
              controls
              className="w-[80%] h-[80%]"
              src="https://assets.frame.io/encode/649c4954-137a-4e2c-ab7b-069eae228f5e/h264_1080_best.mp4?x-amz-meta-project_id=3d7cfd78-7f9c-4f76-86e8-110f58607f06&x-amz-meta-request_id=F9-roIbdBDwLNZA6sAdC&x-amz-meta-project_id=3d7cfd78-7f9c-4f76-86e8-110f58607f06&x-amz-meta-resource_type=asset&x-amz-meta-resource_id=649c4954-137a-4e2c-ab7b-069eae228f5e&Expires=1720353600&Signature=XygaXqjUWKInUyi1eXwXm29CE6k7NNQEhx0VGuZtKSOYWp1k8WPQt3-Bp8RiYVcKhRiWAJKorFTfiSKYlpCn1LhUjy-bxIhz616v5qO9zhznMzz~Lm8uQrzWJHDC1fzYLM4yBgEJ4U8-TO7E9OepsbpG8-F0C0iASMu4iLdRZVuqZkUIwXIV8c~RVol3DUQyQxbTBWG6xwYHIMUUP0CSfooTDJ3riLa6im-j4fruPpxJXseRGGgN2I-OmV3044UlSKb-ruJJfTuQcPR4xw2XQVMge8~mWng-3xmW79OQXmak1xYTSZrn-3D6RVFHvajp65uRg73lreQrLlkSQGludQ__&Key-Pair-Id=K1XW5DOJMY1ET9"
            />
          </Flex>
        </Modal>
      )}
    </>
  );
};
