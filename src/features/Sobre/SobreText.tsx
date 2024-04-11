import React, { useEffect, useRef, useState } from "react";
import { Flex } from "../../components/Flex/Flex";

const sobreText = {
  first:
    "O @bernardo.entusiasta nasceu do amor pela alta relojoaria. Um nicho que carece de conteúdo de alta qualidade no Brasil. Um nicho com gigantesco potencial de crescimento e que une alguns seguimentos: luxo, lifestyle, moda e empreendedorismo. Em 10 meses de produção de conteúdo compilamos mais de 5 milhões de visualizações no YouTube, Tiktok e Instagram. Todas as fotos e vídeos são proprietários. A ideia é unir diversos tipos de conteúdo em volta da relojoaria, focando no storytelling e indo além. Com uma produção de conteúdo de altissíma qualidade produzida pela Avocado Mídia.",
  second:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec lacinia ultricies, nunc nunc ultricies nunc, nec lacinia nunc nunc nec. Nunc nec lacinia ultricies, nunc nunc ultricies nunc, nec lacinia nunc nunc nec. Nunc nec lacinia ultricies, nunc nunc ultricies nunc, nec lacinia nunc nunc nec. Nunc nec lacinia ultricies, nunc nunc ultricies nunc, nec lacinia nunc nunc nec. Nunc nec lacinia ultricies, nunc nunc ultricies nunc, nec lacinia nunc nunc nec. Nunc nec lacinia ultricies, nunc nunc ultricies nunc, nec lacinia nunc nunc nec. Nunc nec lacinia ultricies, nunc nunc ultricies nunc, nec lacinia nunc nunc nec. Nunc nec lacinia ultricies, nunc nunc ultricies nunc, nec lacinia nunc nunc nec.",
};

export const SobreText = () => {
  const [selected, setSelected] = useState<string>(sobreText.first);
  const [progress, setProgress] = useState<number>(0);
  const animationFrameId = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animateProgress = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsedTime = timestamp - startTimeRef.current;
    const progress = Math.min(100, (elapsedTime / 5000) * 100);
    setProgress(progress);

    if (progress < 100) {
      animationFrameId.current = requestAnimationFrame(animateProgress);
    } else {
      setProgress(0);
      startTimeRef.current = timestamp;
      setSelected((prevText) =>
        prevText === sobreText.first ? sobreText.second : sobreText.first
      );
      animationFrameId.current = requestAnimationFrame(animateProgress);
    }
  };

  // Manual text change and reset
  const changeTextManually = () => {
    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);
    setSelected((prevText) =>
      prevText === sobreText.first ? sobreText.second : sobreText.first
    );
    resetProgressAndAnimate();
  };

  const resetProgressAndAnimate = () => {
    setProgress(0);
    startTimeRef.current = null;
    animationFrameId.current = requestAnimationFrame(animateProgress);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateProgress);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  return (
    <Flex className=" pl-[10%] w-1/2 2xl:pl-[180px] flex-col gap-[120px]">
      <Flex className="flex-col gap-8">
        <p className="font-sora text-[24px] font-[700] text-white-100 leading-[150%] tracking-[2.4px] uppercase">
          Sobre
        </p>
        <p className="font-sora text-[20px] text-white-87 tracking-[-0.4px] leading-[150%] font-[300]">
          {selected}
        </p>
      </Flex>
      <Flex className="justify-between items-center">
        <Flex className="text-white-100 font-sora font-[700] leading-[150%] tracking-[-0.32px]">
          <p>{selected === sobreText.first ? "1" : "2"}</p>
          <p className="text-white-60">/2</p>
        </Flex>
        <svg width="50" height="50" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={Math.PI * 2 * 20}
            strokeDashoffset={
              Math.PI * 2 * 20 - (Math.PI * 2 * 20 * progress) / 100
            }
          />
        </svg>
      </Flex>
    </Flex>
  );
};
