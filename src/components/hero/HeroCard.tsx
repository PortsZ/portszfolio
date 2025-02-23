import React, { ReactNode } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";

const HeroCard = ({ children }: { children: ReactNode }) => {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [-10, 10]);
  const rotateY = useTransform(cardX, [-300, 300], [10, -10]);
  // const cardRotateX = useTransform(cardY, [-500, 500], [10, -10]);
  // const cardRotateY = useTransform(cardX, [-500, 500], [-10, 10]);

  const handleMouseMove = (event: any) => {
    const cardRect = event.currentTarget.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const offsetX = event.clientX - cardCenterX;
    const offsetY = event.clientY - cardCenterY;

    cardX.set(-offsetX);
    cardY.set(offsetY);

    console.log(`cardX: ${cardX.get()}, cardY: ${cardY.get()}, rotateX: ${rotateX.get()}, rotateY: ${rotateY.get()}`);

    

    
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };



  return (
    <motion.div
      style={{
        margin: "auto",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // transformStyle: "preserve-3d",
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
          // transform: `rotateX(${cardRotateX}deg) rotateY(${cardRotateY}deg)`,
        }}
        className="hover:drop-shadow-contrast2 rounded hover:transition-all hover:duration-200"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;
