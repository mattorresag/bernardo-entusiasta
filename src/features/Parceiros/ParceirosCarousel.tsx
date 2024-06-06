import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect } from "react";
import { Flex } from "../../components/Flex/Flex";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

const carouselWords = [
  '/assets/cellar.png',
  '/assets/g4.png',
  '/assets/impala.png',
  '/assets/cellar.png',
  '/assets/g4.png',
  '/assets/impala.png',
  '/assets/cellar.png',
  '/assets/g4.png',
  '/assets/impala.png',
  '/assets/cellar.png',
  '/assets/g4.png',
  '/assets/impala.png',
  '/assets/cellar.png',
  '/assets/g4.png',
  '/assets/impala.png',
  '/assets/cellar.png',
  '/assets/g4.png',
  '/assets/impala.png',
  '/assets/cellar.png',
  '/assets/g4.png',
  '/assets/impala.png',
  '/assets/cellar.png',
  '/assets/g4.png',
  '/assets/impala.png',
];

export const ParceirosCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const resetAutoplay = () => {
      emblaApi.reInit(); // This re-initializes the AutoScroll plugin, effectively resetting the autoplay
    };

    emblaApi.on("pointerUp", resetAutoplay); // Listen for the end of a drag event

    return () => {
      emblaApi.off("pointerUp", resetAutoplay);
    }; // Cleanup listener
  }, [emblaApi]);

  return (
    <Flex
      className="w-full bg-black-100 h-[123px] max-lg:border-b-[1px] border-white-20"
      align="center"
    >
      <div ref={emblaRef} className="cursor-pointer overflow-hidden w-screen">
        <Flex className="flex h-[123px]">
          {carouselWords.map((item, index) => (
            <Flex
              key={index}
              align="center"
              className="flex-shrink-0 relative h-full justify-center border-b-0 relative px-[86px] border-[1px] border-r-0 border-white-20"
            >
              <Image src={item} width={200} quality={100} height={122} className="object-cover" />
            </Flex>
          ))}
        </Flex>
      </div>
    </Flex>
  );
};
