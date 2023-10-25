import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import useProducts from "../../hooks/useProducts";
import { useEffect } from "react";
import { useState } from "react";
import { HiStar } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
const OurCareers = () => {
  const [allProducts] = useProducts();

  return (
    <div>

<div className="]" style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/5120x2880-dark-blue-solid-color-background.jpg/2560px-5120x2880-dark-blue-solid-color-background.jpg')`, backgroundRepeat: 'no-repeat', maxWidth: screen, width: '1300px', height: '' }}>
  
    <div className="md:hero flex lg:gap-10 gap-5 py-10 px-4 lg:min-h-screen lg:min-h-screen">
      <div className="lg:-ms-[800px] md:-ms-[800px] ">
        <img className="lg:w-10 w-5 " src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/logo-balloon.svg-024fcd3692c201ff6ec4.svg" alt="" />
      </div>
      <div className="text-white relative space-y-2">
        <h1 className="lg:text-5xl font-semibold">Oops! <br /> Page not found</h1>
        <p className="">The link you were looking for no longer exists.</p>
        <p>Head back to the Homepage or takealook at our deals and trending products below.</p>
        <div className="flex gap-5">
          <div>
            <Link to='/'><button className="bg-white text-blue-500  lg:px-6 px-2 rounded py-2 hover:bg-opacity-80">Back To Homepage</button></Link>
          </div>
          <div className="bg-green-500 text-white lg:px-6 px-2 rounded py-2 hover:bg-opacity-80">View Daily Deals</div>
        </div>
      </div>
    </div>

</div>


      {/* Trending products section */}
        <div className="flex justify-between mt-10 mx-10">
        <div>
          <h2 className="text-lg font-semibold">Trending Products</h2>
        </div>
        <div>
          <Link
            to="/all"
            className="text-primary hover:underline flex items-center gap-3"
          >
            View All <FaArrowRight />
          </Link>
        </div>
        </div>
        


        {/* swiper  */}
        <div className="mx-auto">
          <div className="hidden lg:block w-full">
            {/* lg product swiper */}
            <div className="product-cards w-full my-4 h-full">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                // loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {allProducts.slice(0, 10).map((prod) => (
                  <SwiperSlide key={prod?._id} className="h-full px-14">
                    <Link
                      to={`/product-details/${prod?.Product_Name}/${prod?._id}`}
                      className="w-[200px] flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl h-full overflow-visible"
                    >
                      <div className="w-[150px] h-[120px] mx-auto">
                        <img src={prod?.Image_URL} alt={prod?.Product_Name} />
                      </div>

                      <div className="h-[40px] mt-8">
                        <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">
                          {prod?.Product_Name.slice(0, 45)}
                          {prod?.Product_Name.length > 50 ? "..." : ""}
                        </p>
                      </div>

                      <div className="mt-3 flex flex-col space-y-2">
                        <p className="font-bold">R 220</p>
                        <p className="items-center gap-1 text-sm">
                          <HiStar className="inline-flex  gap-2 items-center h-4 w-4 text-yellow-400" />{" "}
                          <span>4.3</span>
                        </p>
                          <div className="text-center w-full">
                            <button className="btn btn-outline btn-success w-full py-2 rounded mt-2">Add to Cart</button>
                          </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="block lg:hidden w-full">
            {/* mobile product swiper */}
            <div className="product-cards w-full my-4 gap- h-full">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                // loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {allProducts.slice(0, 10).map((prod) => (
                  <SwiperSlide key={prod?._id} className="">
                    <Link
                      to={`/product-details/${prod?.Product_Name}/${prod?._id}`}
                      className="w-[200px] h-[300px] flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl"
                    >
                      <div className="w-[150px] h-[120px] mx-auto">
                        <img src={prod?.Image_URL} alt={prod?.Product_Name} />
                      </div>

                      <div className="h-[40px] mt-8">
                        <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">
                          {prod?.Product_Name.slice(0, 45)}
                          {prod?.Product_Name.length > 50 ? "..." : ""}
                        </p>
                      </div>

                      <div className="mt-3 flex flex-col space-y-2">
                        <p className="font-bold">R 220</p>
                        <p className="items-center inline-flex  gap-2  items-center h-4 text-sm">
                          <HiStar className="h-4 w-4 text-yellow-400" />{" "}
                          <span>4.3</span>                        
                        </p>
                          <div className="w-full text-center">
                            <button className="btn btn-outline btn-success w-full py-2 rounded mt-2">Add to Cart</button>
                          </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

    </div>
  );
};

export default OurCareers;
