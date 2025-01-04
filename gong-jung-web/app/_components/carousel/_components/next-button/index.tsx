import { ArrowIcon } from "@/assets/svg/icon";
import React, { useState } from "react";
import { useSwiper } from "swiper/react";

const NextButton = () => {
  const swiper = useSwiper();
  const [isCursor, setIsCursor] = useState(false);

  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-50
                flex items-center justify-center 
                w-7 h-full bg-main-600/50 hover:bg-main-600/80 rounded-r cursor-pointer duration-300"
      onClick={() => swiper.slideNext()}
      onMouseEnter={() => setIsCursor(true)}
      onMouseLeave={() => setIsCursor(false)}
    >
      <ArrowIcon
        fill={isCursor ? "#E1E8ED" : "black"}
        className="-rotate-90 duration-300"
      />
    </div>
  );
};

export default NextButton;
