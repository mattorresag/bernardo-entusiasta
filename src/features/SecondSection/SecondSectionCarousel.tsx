import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { Flex } from "../../components/Flex/Flex";

const carouselWords = [
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
  "BEM-VINDOS NOVOS MEMBROS",
  "INSCRIÇÕES ABERTAS",
];

export const SecondSectionCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const timer = setInterval(scrollNext, 1500);

      return () => clearInterval(timer);
    }
  }, [emblaApi, scrollNext]);

  return (
    <Flex
      className="w-full bg-black-100 h-16  border-b-[1px] border-white-20"
      align="center"
    >
      <div ref={emblaRef} className="cursor-pointer overflow-hidden w-full">
        <Flex className="flex gap-20 [&>*:last-child]:mr-20">
          {carouselWords.map((item, index) => (
            <Flex
              key={index}
              align="center"
              className="gap-20 flex-shrink-0 relative"
            >
              <p className="caps text-white-87">{item}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
              >
                <circle cx="3" cy="3" r="3" fill="white" fill-opacity="0.4" />
              </svg>
            </Flex>
          ))}
        </Flex>
      </div>
    </Flex>
  );
};
