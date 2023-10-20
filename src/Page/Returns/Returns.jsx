import React from "react";
import img from "../../assets/icons/empty-order-icon.svg-6bcc4601443c5d44b8ae.svg";
import icon1 from '../../assets/icons/evaluation.svg'
import icon2 from '../../assets/icons/preparereturn.svg'
import icon3 from '../../assets/icons/refund.svg'
import icon4 from '../../assets/icons/reviews.svg'

const Returns = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
      <div className="text-2xl font-semibold">Returns</div>
      <div>
        <button className="bg-[#0B79BF] px-8 py-2 rounded text-white ">Log Returns</button>
      </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
      <div className="text-center bg-white rounded-lg space-y-2 relative py-10 px-2">
        <div className="bg-[#0B79BF] absolute z-10 mt-5 rounded-b-full py-6  -mt-10 ms-3 text-white px-3 py-2 text-xs font-mono">
          <p>Step <br /> 1</p>
        </div>
        <img className="w-32 h-32 object-contain bg-slate-300 bg-opacity-10 p-2 avatar rounded-full" src={icon2} alt="Step 1" />
        <h2 className="text-[#0B79BF] text- font-semibold pt-8">Log a Return</h2>
        <p className="text-xs pb-10">
          Log a return request and await eligibility confirmation within 24
          hours
        </p>
      </div>
      <div className="text-center bg-white rounded-lg space-y-2 relative py-10 px-2">
        <div className="bg-[#0B79BF] absolute z-10 mt-5 rounded-b-full py-6  -mt-10 ms-3 text-white px-3 py-2 text-xs font-mono">
          <p>Step <br /> 1</p>
        </div>
        <img className="w-32 h-32 object-contain bg-slate-300 bg-opacity-10 p-2 avatar rounded-full" src={img} alt="Step w-32 h-32 1" object-contain bg-slate-300 bg-opacity-10 p-2 />
        <h2 className="text-[#0B79BF] text- font-semibold pt-8">Preparation your return</h2>
        <p className="text-xs pb-10">
          Package your items for transport and evaluation.
        </p>
      </div>
      <div className="text-center bg-white rounded-lg space-y-2 relative py-10 px-2">
        <div className="bg-[#0B79BF] absolute z-10 mt-5 rounded-b-full py-6  -mt-10 ms-3 text-white px-3 py-2 text-xs font-mono">
          <p>Step <br /> 2</p>
        </div>
        <img className="w-32 h-32 object-contain bg-slate-300 bg-opacity-10 p-2 avatar rounded-full" src={icon4} alt="Step 1" />
        <h2 className="text-[#0B79BF] text- font-semibold pt-8">Return Items</h2>
        <p className="text-xs pb-10">
          Drop-off at a Takealot Pickup Point or collection from your address
        </p>
      </div>
      <div className="text-center bg-white rounded-lg space-y-2 relative py-10 px-2">
        <div className="bg-[#0B79BF] absolute z-10 mt-5 rounded-b-full py-6  -mt-10 ms-3 text-white px-3 py-2 text-xs font-mono">
          <p>Step <br /> 4</p>
        </div>
        <img className="w-32 h-32 object-contain bg-slate-300 bg-opacity-10 p-2 avatar rounded-full" src={icon1} alt="Step 1" />
        <h2 className="text-[#0B79BF] text- font-semibold pt-8">Evaluation</h2>
        <p className="text-xs pb-10">
          The Takealot team will assess the returned items
        </p>
      </div>
      <div className="text-center bg-white rounded-lg space-y-2 relative py-10 px-2">
        <div className="bg-[#0B79BF] absolute z-10 mt-5 rounded-b-full py-6  -mt-10 ms-3 text-white px-3 py-2 text-xs font-mono">
          <p>Step <br /> 5</p>
        </div>
        <img className="w-32 h-32 object-contain bg-slate-300 bg-opacity-10 p-2 avatar rounded-full" src={icon3} alt="Step 1" />
        <h2 className="text-[#0B79BF] text- font-semibold pt-8">Refund of Exchange</h2>
        <p className="text-xs pb-10">
          Items to be refunded or exchanged if all criteria are met.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Returns;
