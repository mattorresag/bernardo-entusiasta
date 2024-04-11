import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  "/assets/sobre.png",
  "/assets/sobre.png",
  "/assets/sobre.png",
  "/assets/sobre.png",
];

const positions = [
  "ml-20 top-0",
  "mr-20 top-10",
  "mr-[150px] top-5",
  "ml-[150px] top-20",
];

export const ConecteSeAnimation = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = images.map(() => useAnimation());
  const [activeIndex, setActiveIndex] = useState(0);
  const lastY = useRef([0, 0, 0, 0, 0]); // Array to keep track of each image's last Y position

  const handleUserScroll = (e: WheelEvent) => {
    if (!inView || activeIndex >= images.length) {
      return; // Only intercept scroll when the section is in view and there are images left to animate
    }
    e.preventDefault(); // Prevent the default scroll behavior

    let deltaY = -e.deltaY * 2; // Adjust multiplier to control scroll speed and direction
    let newY = lastY.current[activeIndex] + deltaY;

    // Check boundaries and update position if within allowed range
    if (newY > 0) {
      newY = 0; // Prevent moving the image downwards beyond its starting point
    }
    if (newY <= -window.innerHeight) {
      newY = -window.innerHeight; // Prevent moving the image further up once it's off-screen
      setActiveIndex(activeIndex + 1); // Move to the next image once the previous one moves off-screen
    }

    controls[activeIndex].start({ y: newY });
    lastY.current[activeIndex] = newY; // Update the last Y position
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (section && inView) {
      section.addEventListener("wheel", handleUserScroll, { passive: false });
    }
    return () => {
      if (section) {
        section.removeEventListener("wheel", handleUserScroll);
      }
    };
  }, [ref, inView, activeIndex, controls]);

  return (
    <div
      ref={(el) => {
        ref(el);
        sectionRef.current = el;
      }}
      className="relative min-h-[703px] w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {images.map((image, i) => (
        <motion.img
          key={i}
          src={image}
          alt={`Image ${i + 1}`}
          initial={{ y: 0 }}
          animate={controls[i]}
          className={`w-[516px] h-[516px] absolute ${positions[i]}`}
          style={{ zIndex: images.length - i }}
        />
      ))}
    </div>
  );
};
