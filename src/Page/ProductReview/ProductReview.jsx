import React from "react";
import { FaCalendar } from "react-icons/fa";
import emptyIcon from "../../assets/icons/empty-order-icon.svg-6bcc4601443c5d44b8ae.svg";
import { NavLink } from "react-router-dom";

const ProductReview = () => {
  return (
    <div className="w-full mt-0 mt-auto">
      <div className="flex justify-between mt-10">
        <div>
          <h2 className="text-lg font-semibold">Product Reviews</h2>
        </div>
        <div className="flex items-center gap-2">
          <label>Order placed in: </label>
          <div className="relative">
            <FaCalendar className="calendar-icon absolute top-2 left-2 text-blue-500" />
            <select className="p-2 pl-8 border bg-white border-blue-500">
              <option value="option1">Last 3 months</option>
              <option value="option2">Last 6 months</option>
              <option value="option3">2022</option>
              <option value="option4">2021</option>
              <option value="option5">2020</option>
              <option value="option6">2019</option>
              <option value="option7">2018</option>
              <option value="option8">2017</option>
              <option value="option9">2016</option>
            </select>
          </div>
        </div>
      </div>
      <div className="text-center space-y-4 bg-white pt-6 pb-20 mt-4">
        <div className="justify-center items-center">
          <ul className="flex gap-5 ms-5 text-black hover:text-blue-500">
            <NavLink
              to="/account/reviews"
              className={({ isActive }) =>
                isActive
                  ? " text-[#5f5f60] text-xs border-b-4 border-blue-500"
                  : "hover:text-blue-500 pl-10 py-2  rounded-r-full bg-opacity-10 border-b-4 border-transparent text-xs black"
              }
            >
              Order Items
            </NavLink>
            <NavLink
              to="/account/reviewshistory"
              className={({ isActive }) =>
                isActive
                  ? "text-xs border-b-4 border-blue-500"
                  : "hover:text-blue-500 pl-5 py-2  border-l-4 border-transparent text-xs text-primary"
              }
            >
              Reviews History
            </NavLink>
          </ul>
        </div>
        <img
          className="avatar w-32 rounded-full border p-2 shadow-lg"
          src={emptyIcon}
          alt=""
        />
        <p>You have not received any orders for the selected period</p>
        <p>You are only able to review products purchased from Takealot.com</p>
        <button className="bg-[#0B79BF] text-white px-4 py-2 rounded">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default ProductReview;
