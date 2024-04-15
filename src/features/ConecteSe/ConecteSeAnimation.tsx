import Image from 'next/image';
import { Flex } from '../../components/Flex/Flex';

const images = [
  "/assets/02.jpg",
  "/assets/03.jpg",
  "/assets/04.jpg",
  "/assets/05.jpg",
];

const positions = [
  "left-[30%] top-10 z-[1]",
  "left-[25%] top-[100px] z-[2]",
  "left-[45%] top-20 z-[3]",
  "left-[35%] top-0 z-[4] h-[60%]",
];

export const ConecteSeAnimation = () => {
  return (
    <Flex className="h-[2000px] w-full flex-col relative ">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Image ${i + 1}`}
          className={`w-[250px] h-[250px] lg:w-[516px] lg:h-[516px] sticky ${positions[i]}`}
        />
      ))}
    </Flex>
  );
};
