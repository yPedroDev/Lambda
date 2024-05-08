import React, { ComponentProps, useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "@/components/utils/image/Image";
type Props = ComponentProps<"p"> & {
  text: string | String;
  tid: number;
  children: JSX.Element | React.ReactNode | React.ReactElement;
};

export const AnimatedTooltip = ({ text, tid, children }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div
        className="relative group"
        onMouseEnter={() => setHoveredIndex(tid)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {hoveredIndex === tid && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -left-3/4 -top-10 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded bg-black z-50 shadow-xl px-4 py-2"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px " />
            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px " />
            <div className="font-normal text-xs text-white relative z-30">
              {text}
            </div>
            {/* <div className="text-white text-xs">{item.designation}</div> */}
          </motion.div>
        )}
        <div onMouseMove={handleMouseMove}>{children}</div>
      </div>
    </>
  );
};
