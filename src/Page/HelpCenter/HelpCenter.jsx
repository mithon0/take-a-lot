import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { HiShoppingCart } from 'react-icons/hi2';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';


const HelpCenter = () => {
    const [topicCatalog , setTopicCatalog] = useState(false)
    return (
        <section className='lg:px-4'>
<div className='hero px-4 h-[450px] rounded-b-lg' style={{backgroundImage: "url(https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)"}}>

{/*Top Nav */}
<div className="drawer absolute top-0 lg:top-3 px-3">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2">
        <Link to="/"><img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/logo-invert.svg-97f9dff70e59ec07ae74.svg" alt="Logo Takealot" className='w-32'/></Link>
        <div className="mx-4 h-5 border-s-2 border-white"></div>
        <Link to="/help-center" className='text-lg font-medium text-white'>Help Centre</Link>
        <div className="lg:hidden absolute top-16 w-full border-t border-white left-0"></div>
      </div>
    
      <div className="flex-none hidden lg:block px-2">
        <ul className="inline-flex items-center text-white text-sm">
          {/* Navbar menu content here */}
          <li className='inline-flex items-center gap-1 cursor-pointer pb-3' onMouseEnter={()=>setTopicCatalog(true)} onMouseLeave={()=>setTopicCatalog(false)}><span>All Help topic</span> <span><IoMdArrowDropdown className='h-4 w-4'/></span></li>
          <div className="mx-4 h-5 border-s border-white mb-3"></div>
          <li className='hover:border-b pb-3 '><Link to="/">Return to Shopping</Link></li>

<div className={`z-50 px-4 py-5 bg-white absolute rounded-sm w-[260px] h-[264px] transition-all duration-500 ${topicCatalog ? "top-12  right-40" : "hidden"}`} onMouseEnter={()=>setTopicCatalog(true)} onMouseLeave={()=>setTopicCatalog(false)}>
<div className='flex flex-col space-y-2'>
<Link to="/help-center/delivery" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Delivery</Link>
<Link to="/help-center/returns" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Returns</Link>
<Link to="/help-center/orders-cancellations" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Orders & Cancellations</Link>
<Link to="/help-center/collection" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Collection</Link>
<Link to="/help-center/refunds" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Refunds</Link>
<Link to="/help-center/payments-promos-gift-vouchers" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Payments, Promos & Gift Vouchers</Link>
<Link to="/help-center/product-stock" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Product & Stock</Link>
<Link to="/help-center/data-privacy" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Data & Privacy</Link>
</div>
</div>


        </ul>
      </div>
    </div>
  </div> 
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu w-72 px-0 py-0 min-h-screen bg-[#f4f4f4] z-50">
      <li className='w-full bg-white shadow px-2 py-2'>
        <div className='flex flex-row gap-5'>
        <div className='w-full'><Link to="/"><img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" alt="Logo Takealot" className='w-28'/></Link></div>
        <div className='w-full'>
        <Link to="/help-center" className='w-full font-semibold'>Help Centre</Link>
        </div>
        </div>
        
      </li>


      <li className='w-full bg-white shadow py-2 my-3 text-sm'>
        <Link to="/help-center" className='w-full'>Help Centre</Link>
      </li>

      <li className='w-full py-2 mb-3 text-sm'>
<span className='uppercase text-[#4d4d4f] font-semibold'>All Help Topics</span>
      </li>

     
        <ul className='space-y-2 px-0 border-none m-0 w-full bg-white shadow  py-2 mb-3 text-sm'>
        <li className='border-b py-2'>
        <Link to="/help-center/delivery" className='text-neutral'>Delivery</Link>
        </li>
        <li className='border-b py-2'>
        <Link to="/help-center/returns" className='text-neutral'>Returns</Link>
        </li>
        <li className='border-b py-2'>
        <Link to="/help-center/orders-cancellations" className='text-neutral'>Orders & Cancellations</Link>
        </li>
        <li className='border-b py-2'>
        <Link to="/help-center/collection" className='text-neutral'>Collection</Link>
        </li>
        <li className='border-b py-2'>
        <Link to="/help-center/refunds" className='text-neutral'>Refunds</Link>
        </li>
        <li className='border-b py-2'>
        <Link to="/help-center/payments-promos-gift-vouchers" className='text-neutral'>Payments, Promos & Gift Vouchers</Link>
        </li>
        <li className='border-b py-2'>
        <Link to="/help-center/product-stock" className='text-neutral'>Product & Stock</Link>
        </li>
        <li className='py-2'>
        <Link to="/help-center/data-privacy" className='text-neutral'>Data & Privacy</Link>
        </li>
        </ul>
  
        <li className='w-full bg-white shadow py-2 absolute bottom-2 text-sm'>
<Link to="/" className='inline-flex items-center gap-5'>
   <HiShoppingCart className='h-6 w-6 text-primary'/> <span className='text-base'>Return to shopping</span>
</Link>
      </li>

    </ul>
  </div>
</div>


<div className='banner-section w-full mx-auto'>
<h1 className='text-3xl lg:text-4xl font-bold text-white text-center'>How can we help you?</h1>

<form className='input-field my-4 lg:w-[80%] mx-auto relative'>

<input type="text" placeholder='Search our Help Centre' className='py-4 px-3 rounded outline-none w-full'/>

<input type="submit" value="Search" className='absolute right-3 top-[7px] px-6 py-2 border rounded border-primary bg-primary text-white'/>


</form>

{/* large menu */}
<div className='grid grid-cols-3 lg:grid-cols-6 items-center gap-2 lg:w-[80%] mx-auto mt-5 lg:mt-8'>
<Link to="/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>View Orders</Link>

<Link to="/takealot-pickup-points" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Takealot Pickup Points</Link>

<Link to="/account/returns" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Track My Return</Link>

<Link to="/account/credits" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Credit & Refunds</Link>

<Link to="/" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Returns Policy</Link>

<Link to="/account/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Track Delivery</Link>
</div>


</div>

</div>
        </section>
    );
};

export default HelpCenter;