import { FaCalculator, FaCross } from "react-icons/fa";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/d5fa3e615adcdf6c849cf24fd6b9ab900ed20767.png'



const FeeEstimator = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        // Handle form submission here
        // You should add your logic for creating a user and processing the form data
        console.log(data);
    
        // Reset the form
        reset();
    
      };
  return (
    <div className="">
      <div className="bg-white py-4 w-full flex px-2">
        <div>
          <img className="w-28" src={logo} alt="" />
        </div>
        <div className="ps-[500px]">
          <h1 className="text-lg flex items-center gap-2 font-semibold">
            <FaCalculator /> FeeEstimator
          </h1>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row mt-3">
        <div className="bg-white px-3 py-3 hover:shadow-lg w-[35%] m-2">
          <h1 className="text-2xl font-semibold mb-3">Estimate Takealot Fees</h1>
          <p className="text-xs pb-[200px]">
            Use the Fee Estimator to estimate the Takealot Fees you will be
            charged on a sale, allowing you to have more visibility and
            transparency when it comes to guaranteed fees charged. <br /> <br /> Please note
            that the Fee Estimator provides an estimate and does not include
            subscription fees, storage fees or any other fees that can be
            avoided and are not guaranteed to be applied to the sale of a
            product. <br /> <br /> For more information on how to use the Fee Estimator, click
            <Link>here</Link> or view the Takealot <Link>pricing schedule</Link> for information on fees.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}  className="bg-white mx-10 px-3 py-4 hover:shadow-lg">

            {/* pacage dmensions */}
          <div className="flex gap-2 ">
            <p className="flex text-xs gap-2 items-center">
              Package Dimensions<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="ms-5">
              <input
                className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
              {errors && (
                <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
              )}
            </div>
            <span className="-ms-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="30"
                viewBox="0 0 100 100"
              >
                <line
                  x1="20"
                  y1="20"
                  x2="80"
                  y2="80"
                  stroke="#000"
                  stroke-width="15"
                />
                <line
                  x1="20"
                  y1="80"
                  x2="80"
                  y2="20"
                  stroke="#000"
                  stroke-width="15"
                />
              </svg>
            </span>
            <div className="">
              <input
                className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
            </div>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="30"
                viewBox="0 0 100 100"
              >
                <line
                  x1="20"
                  y1="20"
                  x2="80"
                  y2="80"
                  stroke="#000"
                  stroke-width="15"
                />
                <line
                  x1="20"
                  y1="80"
                  x2="80"
                  y2="20"
                  stroke="#000"
                  stroke-width="15"
                />
              </svg>
            </span>
            <div className="">
              <input
                
                className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
            </div>
             <p className="text-xs mt-2">Cm</p>   
              

          </div>
          <div>

          </div>


          {/* Unit weight */}
          <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
            Unit Weight
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="flex gap-10 ms-20 text-xs">
                <div className="">
                <input type="radio" name="radio-1" className="radio" /> 7Kg <br />
                <input type="radio" name="radio-1" className="radio " /> 725.1kg - 39.9kg
                </div>
                <div>
                <input type="radio" name="radio-1" className="radio " /> 7Kg <br />
                <input type="radio" name="radio-1" className="radio " /> 725.1kg - 39.9kg
                </div>
            </div>

                
          </div>
          


        {/* Division */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Division<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="ms-[90px]">
      <select
        className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      >
        <option value="">Consumer Electronics</option>
        <option value="option1">Consumer Electronics</option>
        <option value="option2">Home</option>
        <option value="option3">Personal & Lifestyle</option>
        <option value="option4">Family</option>
        <option value="option5">Consumables</option>
        <option value="option5">Media</option>
        <option value="option5">Office & Business</option>
      </select>
    </div>              
          </div>


        {/* Depertment */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Department<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="ms-[70px]">
      <select
        className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      >
        <option value="">Consumer Electronics</option>
        <option value="option1">Consumer Electronics</option>
        <option value="option2">Home</option>
        <option value="option3">Personal & Lifestyle</option>
        <option value="option4">Family</option>
        <option value="option5">Consumables</option>
        <option value="option5">Media</option>
        <option value="option5">Office & Business</option>
      </select>
    </div>              
          </div>



        {/* Category */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Category<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="ms-[85px]">
      <select

        className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      >
        {/* <option value="">Pick One</option> */}
        <option value="option1">Stethoscopes → Stethoscopes</option>
        <option value="option2">Smoking Alternatives & Electronic Cigarettes → Hookah Pipes</option>
        <option value="option3">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Accessories</option>
        <option value="option4">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Coals</option>
        <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Coil Wires, Wicks & Cotton</option>
        <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Replacement Pipes</option>
        <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Storage & Cases</option>
        <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Tips</option>
        <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Tongs</option>
        <option value="option5">moking Alternatives & Electronic Cigarettes → Smoking Alternative Devices</option>
        <option value="option5">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Refills</option>
        <option value="option5">Smoking Alternatives & Electronic Cigarettes → Vaping Devices</option>
        <option value="option5">Smoking Alternatives & Electronic Cigarettes → Vaping Refills</option>
        <option value="option5">Health Care → Adult Nappies</option>
        <option value="option5">Health Care → Biometric Monitors → Blood Glucose Meters</option>
        <option value="option5">Health Care → Biometric Monitors → Blood Pressure Monitors</option>
        <option value="option5">Health Care → Biometric Monitors → Body Weight Scales</option>
        <option value="option5">Health Care → Biometric Monitors → Medical Thermometers</option>
        <option value="option5">Health Care → Biometric Monitors → Pulse Oximeters</option>
        <option value="option5">Health Care → Coffins</option>
        <option value="option5">Health Care → DNA Ancestry Tests</option>
        <option value="option5">Health Care → Ear Devices</option>
        <option value="option5">Health Care → First Aid → Antiseptics & Cleaning Supplies</option>
        <option value="option5">Health Care → First Aid → Burns & Blisters</option>
        <option value="option5">Health Care → First Aid → Cotton Wool & Swabs</option>
        <option value="option5">Health Care → First Aid → Equipment</option>
        <option value="option5"></option>
        <option value="option5"></option>
        <option value="option5"></option>
        <option value="option5"></option>
        <option value="option5"></option>
        <option value="option5"></option>
      </select>
    </div>
              

          </div>




           {/* Sellings Price */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Selling Price<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}

            
            
            <div className="ms-[70px]">
               <div className="flex">
               {/* <div className="bg-slate-400 px-3 rounded-r-none rounded-md">R</div> */}
               <div className={`border border-r-1 rounded-r-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}>R</div>
            <input
                // id="inputField"
                defaultValue='0'
                className={`border w-[280px] border-s-0 rounded-s-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
               </div>
              {errors && (
                <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
              )}
    </div>              
          </div>




           {/* Sellings Price */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Cost of Product
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}

            
            
            <div className="ms-[66px]">
               <div className="flex">
               {/* <div className="bg-slate-400 px-3 rounded-r-none rounded-md">R</div> */}
               <div className={`border border-r-1 rounded-r-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}>R</div>
            <input
                // id="inputField"
                defaultValue='0.00'
                className={`border w-[280px] border-s-0 rounded-s-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
               </div>
              {errors && (
                <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
              )}
    </div>              
          </div>

          <div className="flex justify-between mt-2">
            <p className="text-xs">Required <span className="text-red-500">*</span></p>
            <div>
                <button className="bg-blue-400 px-4 py-2 rounded text-white text-xs">Calculate</button>
            </div>
          </div>
         




        </form>
      </div>
    </div>
  );
};

export default FeeEstimator;
