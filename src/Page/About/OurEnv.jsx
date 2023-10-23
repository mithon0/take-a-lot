import React from "react";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import valueImg from '../../assets/images/our-values-strap.webp'
import valueWallImg from '../../assets/images/Values-Wall-Blue-FINAL-2022-02.webp'
import envImg from '../../assets/images/Our-environment1.webp'

const OurEnv = () => {
    return (
        <div>
      <div className="relative bg-black bg-opacity-60  overflow-hidden">
        <img
          src={dottedBg2}
          alt=""
          className="absolute bg-black bg-opacity-0 w-[800px] ms-28 opacity-40 -rotate-12 z-0"
        />
        <div className="relative z-10 text-white flex  items-center justify-center px-16 gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">
              Learn More About
            </h2>
            <h1 className="text-5xl font-bold mb-4">Our Environment</h1>
            <p className="text-xs">
            This is where it all happens, the creative hub where ideas take shape and plans get put into action. Take a peek at a day in the life of takealot.com.
            </p>
          </div>
          <div className="">
            <img src={envImg} alt="Who We Are" className="" />
          </div>
        </div>
      </div>

      
        <div className="mt-14">
        <img src={valueWallImg} alt="" />
        </div>

    </div>
    );
};

export default OurEnv;