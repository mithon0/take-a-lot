import React from 'react';
import { HiArrowSmallLeft, HiChevronRight } from 'react-icons/hi2';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ProductStockHelp = () => {
    return (
        <section className='lg:px-4'>
        <div className='hero h-60 rounded-b-lg' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

            <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                <ul>
                    <li><Link to="/help-centre">Help Centre</Link></li>
                    <li><Link>
                    Product & Stock

</Link></li>
                </ul>
            </div>

            <div className='lg:hidden text-xs text-white absolute top-20 left-5'>
                <Link to="/help-centre" className='inline-flex items-center gap-1'><HiArrowSmallLeft className='h-5 w-5' /> Back to Help Centre</Link>
            </div>

            <div className='flex flex-col gap-4 lg:flex-row w-full items-start lg:items-center justify-between px-5 mt-28'>
                <div className='flex items-center gap-2 lg:gap-5'>
                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="Icon" className='w-4 lg:w-6' />
                    </div>
                    <p className='text-xl lg:text-3xl font-bold text-white'>
                    Product & Stock
</p>
                </div>

                <div className='flex  items-center gap-2'>
               
                        <Link to="/account/credit" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Credit & Refunds</Link>
                        <Link to="/account/returns" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Track Returns</Link>
                        <Link to="/account/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>View Orders</Link>
                </div>
            </div>


        </div>


       <div className='my-14'>

            <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Popular Product & Stock Topics</p>

            <div className=''>

              
                <div className='hidden lg:block w-full'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        // pagination={{
                        //   clickable: true,
                        // }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >


                        <SwiperSlide className='w-[300px]'>
                            <Link to="/help-centre/product-stock/about-unboxed-deals" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                <div className='w-full flex items-center gap-2'>
                                    <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="icon" className='w-5' />
                                    </div>

                                    <h1 className='text-sm font-medium'>Product & Stock</h1>
                                </div>

                                <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                All about unboxed deals
                                </div>
                            </Link>
                        </SwiperSlide>

                        
                      
                        <SwiperSlide className='w-[300px]'>
                            <Link to="/help-centre/product-stock/about-pre-orders" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                <div className='w-full flex items-center gap-2'>
                                    <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="icon" className='w-5' />
                                    </div>

                                    <h1 className='text-sm font-medium'>Product & Stock</h1>
                                </div>

                                <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                All about pre-orders
                                </div>
                            </Link>
                        </SwiperSlide>

                        
                        <SwiperSlide className='w-[300px]'>
                            <Link to="/help-centre/product-stock/more-information-on-a-product" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                <div className='w-full flex items-center gap-2'>
                                    <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="icon" className='w-5' />
                                    </div>

                                    <h1 className='text-sm font-medium'>Product & Stock</h1>
                                </div>

                                <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                Can you give me more information on a product?
                                </div>
                            </Link>
                        </SwiperSlide>




                    </Swiper>
                </div>

             

                <div className='-mt-16 bg-white shadow lg:hidden rounded-t-lg'>

                    <ul className='space-y-2 px-3 py-4'>

                        <li className='border-b pb-2 text-[#4d4d4f] font-medium text-sm'>Popular Topics</li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/product-stock/about-unboxed-deals" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>All about unboxed deals</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>

                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/product-stock/about-pre-orders" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>All about pre-orders</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>

                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/product-stock/more-information-on-a-product" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>Can you give me more information on a product?</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
        


        <div className='my-9 w-full'>

            <div className='flex items-start justify-between gap-8'>
                <div className='w-full'>
                    <Outlet />
                </div>

                <div className='w-1/3 bg-white shadow hidden lg:block text-sm'>
                    <p className='p-3 text-base font-medium text-[#000]'>All Help Topics</p>
                    <div className='border-b border-[#dadada]'></div>

                    <div className='my-3 flex flex-col gap-2'>
                        <NavLink to="/help-centre/delivery" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Delivery</NavLink>


                        <NavLink to="/help-centre/returns" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 = rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Returns</NavLink>


                        <NavLink to="/help-centre/orders-cancellations" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Orders & Cancellations</NavLink>


                        <NavLink to="/help-centre/collection" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Collections</NavLink>


                        <NavLink to="/help-centre/refunds" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Refunds</NavLink>


                        <NavLink to="/help-centre/payments-promos-gift-vouchers" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Payments,Promos & Gift Vouchers</NavLink>


                        <NavLink to="/help-centre/product-stock" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Product & Stock</NavLink>


                        <NavLink to="/help-centre/data-privacy" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Data & Privacy</NavLink>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );
};

export default ProductStockHelp;