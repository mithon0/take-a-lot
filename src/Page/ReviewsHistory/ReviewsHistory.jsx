import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import reviewIcon from '../../assets/icons/reviews.svg'


const ReviewsHistory = () => {
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
      <div>
      <ul className='flex gap-5 ms-5 text-black'>
      <NavLink to="/account/reviews" className={({ isActive }) => (isActive ? " text-xs border-b-2 border-blue-500 py-2 text-primary" : "hover:text-blue-500 py-2  rounded-r-full bg-opacity-10 border-b-4 border-transparent text-xs text-[#5f5f60]")}>Order Items</NavLink>

<NavLink to="/account/reviewshistory" className={({ isActive }) => (isActive ? " text-[#5f5f60] text-xs border-b-2 border-blue-500 py-2" : "hover:text-blue-500 py-2  rounded-r-full bg-opacity-10 border-b-4 border-transparent text-xs text-[#5f5f60]")}>Reviews History</NavLink>
        </ul>
      </div>
        <img className="avatar w-32 rounded-full border p-2 shadow-lg" src={reviewIcon} alt="" />
        <p>You have no reviews for the selected period</p>
        <p>Select a product from your order items to write a review</p>
        <button className="bg-[#0B79BF] text-white  px-4 py-2 rounded">View Order Items</button>
      </div>
    </div>
    );
};

export default ReviewsHistory;