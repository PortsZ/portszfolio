import React, { ReactNode } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";

const HeroCard = ({ children }: { children: ReactNode }) => {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-500, 500], [5, -5]);
  const rotateY = useTransform(cardX, [-500, 500], [-5, 5]);
  const cardRotateX = useTransform(cardY, [-500, 500], [10, -10]);
  const cardRotateY = useTransform(cardX, [-500, 500], [-10, 10]);

  const handleMouseMove = (event: any) => {
    const cardRect = event.currentTarget.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const offsetX = event.clientX - cardCenterX;
    const offsetY = event.clientY - cardCenterY;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  const bgClasses: {
    [key: string]: string;
    house: string;
    hero: string;
  } = {
    house: "bg-house",
    hero: "bg-hero",
    map: "bg-map",
    dimensionar: "bg-kitSize",
  };

  function getBackgroundClass(icon: string | undefined) {
    return icon ? bgClasses[icon] : "";
  }

  return (
    <motion.div
      style={{
        margin: "auto",
        width: "100%",
        height: "100%",
        transformStyle: "preserve-3d",
        perspective: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        transition={{ velocity: 0 }}
        style={{
          width: "100%",
          transformStyle: "preserve-3d",
          perspective: 200,
          transform: `rotateX(${cardRotateX}deg) rotateY(${cardRotateY}deg)`,
        }}
        className="hover:drop-shadow-contrast2 rounded hover:transition-all hover:duration-200"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;
