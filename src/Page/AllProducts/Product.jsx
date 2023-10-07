import React from 'react';
import { HiOutlinePlusSmall, HiShoppingCart, HiStar } from 'react-icons/hi2';
import { IoIosArrowDown, IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Product = ({prod , view}) => {
    // console.log(prod);
    return (
        <div className={`${view === "list" ? "card card-side flex justify-center" : "card lg:w-[200px] h-[375px]"}  shadow hover:shadow-lg rounded-none relative`}>

    <img src={prod?.Image_Url} alt="Shoes" className={`${view === "list" ? "h-fit w-60" : "h-[135px] w-full"}`} />

  <div className={`${view === "grid"? "px-3" : "px-6 py-3 space-y-10"} items-center w-full`}>
    <div className={`${view === "grid" ? "h-14 my-1" : "h-0 my-3"} `}>
        <p className='text-[13px] font-medium '>{prod?.Name.slice(0,50)}{prod?.Name.length > 50 ? "....":""}</p>

        {
            view === "list" ? <div>
            <Link to={`/all/brand/${prod?.Brand}`} className='text-[13px] text-primary'>{prod?.Brand}</Link>
            </div> :""
        }
    </div>
    {
        view === "list" ? <div className='my-5'>{prod?.Short_description ? prod?.Short_description : prod?.Description.slice(0,50)}</div> : ""
    }
    <div className='text-left space-y-1'>
      {
        view === "grid" ?  <div>
        <Link to={`/all/brand/${prod?.Brand}`} className='text-[13px] text-primary'>{prod?.Brand}</Link>
        </div> : ""
      }
        {
            view === "grid" ? <p className='font-semibold'>R 50</p> :""
        }
        <div className='inline-flex items-center gap-2'>
        <p className='text-[13px] font-medium text-gray-500'>In Stock</p>
        <p className="tooltip text-[10px] font-semibold bg-gray-200 px-1 " data-tip="This item is in stock in our Johannesburg warehouse and can be shipped from there. You can also collect it unless the item does not comply with our collection rules. Items that cannot be collected are whitegoods, liquor and digital items.">JHB</p>
        </div>
        <div>
        <p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(120)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500'/></span> </p>
        </div>
    </div>

    {/* <div className='absolute'>
sd
    </div> */}
  </div>
 <div className={`${view === "list" ? "w-1/4" : ""}`}>
 {
        view === "grid" ? <div className="absolute mx-auto text-center bottom-4 left-0 right-0 px-4">
        <button className="inline-flex items-center justify-center text-green-700 w-full border-green-700 hover:bg-green-700 hover:text-white transition-all duration-500 border px-3 py-2 gap-1 font-medium"><HiOutlinePlusSmall className='w-5 h-5'/> <HiShoppingCart className='w-5 h-5'/> Add to Cart</button>
      </div> :<div className="">
      <p className='font-semibold text-base text-right p-3'>R 50</p> 
<div className='absolute mx-auto text-center bottom-4 right-0 px-4 lg:flex flex-col gap-3 hidden '>
<button className="inline-flex items-center justify-center text-green-700 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-500 border px-3 py-2 gap-1 font-medium"><HiOutlinePlusSmall className='w-5 h-5'/> <HiShoppingCart className='w-5 h-5'/> Add to Cart</button>

<button className="inline-flex items-center justify-center   bg-gray-200 transition-all duration-500 border px-3 py-2 gap-1 font-medium text-xs rounded hover:text-red-500"><IoMdHeartEmpty className='w-5 h-5'/> Add to Wishlist</button>
</div>
      </div>
    }
 </div>
</div>
    );
};

export default Product;