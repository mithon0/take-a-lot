import React from "react";
import img from "../../assets/icons/empty-order-icon.svg-6bcc4601443c5d44b8ae.svg";

const Returns = () => {
  return (
    <div className="flex gap-5">
      <div className="text-center bg-white  rounded-lg relative">
        <div className="bg-blue-500 mx-16 rounded-b-full text-white px-1 py-3 -mx -mb-3">
          <h4>Step 1</h4>
        </div>
        <img className="avatar rounded-full" src={img} alt="Step 1" />
        <h2>Log a Return</h2>
        <p>
          Log a return request and await eligibility confirmation within 24
          hours
        </p>
      </div>
      <div className="text-center bg-white p-5 rounded-lg">
        <img className="avatar rounded-full" src={img} alt="Step 2" />
        <h2>Log a Return</h2>
        <p>
          Log a return request and await eligibility confirmation within 24
          hours
        </p>
      </div>
      <div className="text-center bg-white p-5 rounded-lg">
        <img className="avatar rounded-full" src={img} alt="Step 3" />
        <h2>Log a Return</h2>
        <p>
          Log return request and await eligibility confirmation within 24 hours
        </p>
      </div>
      <div className="text-center bg-white p-5 rounded-lg">
        <img className="avatar rounded-full" src={img} alt="Step 4" />
        <h2>Log a Return</h2>
        <p>
          Log return request and await eligibility confirmation within 24 hours
        </p>
      </div>
    </div>
  );
};

export default Returns;
