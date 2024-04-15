import Image from 'next/image';
import { Flex } from '../../components/Flex/Flex';

const images = [
  "/assets/02.jpg",
  "/assets/03.jpg",
  "/assets/04.jpg",
  "/assets/05.jpg",
];

const positions = [
  "mr-[30%] top-10 z-[2]",
  "mr-[15%] top-[25%] z-[1]",
  "ml-[30%] top-[30%] z-[3]",
  "ml-[-10px] top-0 z-[4] h-[60%]",
];

export const ConecteSeAnimation = () => {

  return (

    <Flex
      className="relative min-h-[400px] lg:min-h-[703px] w-full flex flex-col items-center justify-center"
    >
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Image ${i + 1}`}
          className={`w-[250px] h-[250px] lg:w-[516px] lg:h-[516px] absolute ${positions[i]}`}
        />
      ))}
    </Flex>
  );
};