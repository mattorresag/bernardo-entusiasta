import React, { useEffect, useState } from "react";
import { Flex } from "../Flex/Flex";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  animate?: boolean;
  shouldClose?: boolean;
  height?: string;
}
export const Modal = ({
  children,
  isOpen,
  handleClose,
  animate = true,
  shouldClose = true,
  height,
}: Props): JSX.Element => {
  const [dialogStyle, setDialogStyle] = useState({});

  useEffect(() => {
    if (!animate) return;
    if (isOpen) {
      setDialogStyle({
        transform: "translateY(0)",
        transition: "transform 0.2s ease-out",
      });
    } else {
      const timer = setTimeout(() => {
        setDialogStyle({
          transform: "translateY(100%)",
          transition: "transform 0.2s ease-in",
        });
      }, 10); // A short delay

      return () => clearTimeout(timer);
    }
  }, [isOpen, animate]);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      // Prevent scrolling on the body
      body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the dialog is closed
      body.style.overflow = "";
    }

    // Clean up by resetting overflow when the component unmounts
    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close dialog if click is on the overlay, not the dialog content
    if (e.target === e.currentTarget && shouldClose) {
      handleClose();
    }
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed h-[100%] w-screen inset-0 bg-black-100/90 flex items-end z-[999]"
          onClick={handleOverlayClick}
        >
          <Flex
            className={`w-screen  ${
              height ? height : "h-full lg:h-[80%]"
            }  absolute m-auto left-0 lg:top-0 right-0 bottom-0 z-[100] lg:w-fit`}
            style={dialogStyle}
          >
            {children}
          </Flex>
        </div>
      )}
    </>
  );
};
