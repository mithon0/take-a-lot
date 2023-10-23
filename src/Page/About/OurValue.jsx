import React from "react";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import valueImg from '../../assets/images/our-values-strap.webp'
import valueWallImg from '../../assets/images/Values-Wall-Blue-FINAL-2022-02.webp'

const OurValue = () => {
    return (
        <div>
      <div className="relative bg-black bg-opacity-60  overflow-hidden">
        <img
          src={dottedBg2}
          alt=""
          className="absolute bg-black bg-opacity-0 w-[800px] ms-28 opacity-40 -rotate-12 z-0"
        />
        <div className="relative z-10 text-white flex  items-center justify-center gap-48">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">
              More About
            </h2>
            <h1 className="text-5xl font-bold mb-4">Our Journey</h1>
            <p className="text-xs">
            Follow our exciting journey from humble beginnings to where we are today and where we are heading.
            </p>
          </div>
          <div className="">
            <img src={valueImg} alt="Who We Are" className="w-[450px]" />
          </div>
        </div>
      </div>

      
        <div className="mt-14">
        <img src={valueWallImg} alt="" />
        </div>

    </div>
    );
};

export default OurValue;