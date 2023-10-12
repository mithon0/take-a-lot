import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { HiOutlinePlusSmall, HiShoppingCart, HiStar, HiXMark } from 'react-icons/hi2';
import { IoIosArrowDown, IoIosHelpCircle, IoIosInformationCircle, IoMdHeartEmpty } from 'react-icons/io';
import { FaThumbsUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "./home.css"
 
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { BsDot } from 'react-icons/bs';


const ProductDetails = () => {
    const [offerOpen , setOfferOpen] = useState(true);
    const [offerOpen2 , setOfferOpen2] = useState(true);
    const [selectedRating, setRating] = useState([]);
    const [selectedSort, setSelectedSort] = useState([]);
    const [allProducts, refetch] = useProducts();
    const {id} = useParams();
    const selectedProducts = allProducts.find(prod=>prod?._id === id);
    console.log(selectedProducts);
    // console.log(selectedRating);
    return (
        <section className='flex flex-col lg:flex-row items-start gap-10 my-10 px-5'>
<div className='w-full lg:w-3/4'>
<div className='prod-image w-full h-fit flex flex-col lg:flex-row gap-5 bg-white shadow rounded p-10'>
    
<div className='border border-gray-400 rounded-sm'>
<Zoom>
    <img
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src={selectedProducts?.Image_URL}
      width="500"
      className=' py-3 px-3'
    />
  </Zoom>
</div>


<div className='w-full flex flex-col'>

    <div className='pb-4 border-b border-b-gray-300 flex flex-col space-y-2'>
    <p className='text-[#4d4d4f] font-medium text-lg'>{selectedProducts?.Product_Name}</p>
    <Link to={`/all/brand/${selectedProducts?.Brand_Name}`} className='text-primary'>{selectedProducts?.Brand_Name}</Link>
    <p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
    </div>



    <div className='py-4 border-b border-b-gray-300 flex items-center space-x-3'>
<p className='font-bold'>In Stock</p>
<p className="tooltip text-[10px] font-semibold bg-gray-200 px-1 " data-tip="This item is in stock in our Johannesburg warehouse and can be shipped from there. You can also collect it unless the item does not comply with our collection rules. Items that cannot be collected are whitegoods, liquor and digital items.">JHB</p>
<p className="tooltip text-[10px] font-semibold bg-gray-200 px-1 " data-tip="This item is in stock in our Cape Town warehouse and can be shipped from there. You can also collect it yourself from our warehouse during the week or over weekends.">CPT</p>
<label htmlFor="When_I_get_it" className="text-primary text-xs hover:underline hover:cursor-pointer">When do I get it?</label>
</div>

<div className='py-10 px-4'>
<ul className='list-disc text-xs space-y-3'>
<li>Eligible for next-day delivery or collection. <label htmlFor="next_day_delivery" className='w-4 h-4 text-green-700 hover:text-green-800 inline-flex items-center'><IoIosInformationCircle className='w-4 h-4'/></label> </li>

<li>Eligible for Cash on Delivery.<label htmlFor="COD" className='w-4 h-4 text-green-700 hover:text-green-800 inline-flex items-center'><IoIosInformationCircle className='w-4 h-4'/></label> </li>

<li>Hassle-Free Exchanges & Returns for 30 Days.<label htmlFor="Exchanges&Returns" className='w-4 h-4 text-green-700 hover:text-green-800 inline-flex items-center'><IoIosInformationCircle className='w-4 h-4'/></label></li>

<li><span>{selectedProducts?.Warranty_Period}-Month Limited Warranty.</span> <p className='tooltip inline-flex items-center text-green-700' data-tip="Limited warranty, with certain exclusions, as defined by the manufacturer. Please consult the manufacturer for further details."><IoIosHelpCircle className='w-4 h-4' /></p> </li>
</ul>
</div>
</div>




</div>

{/* You Might Also Like */}
<div className='You_Might_Also_Like my-10 w-full h-full'>
<p className='text-[#4d4d4f] font-semibold'>You Might Also Like</p>
<div className='hidden lg:block w-full'>
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
 
        {
allProducts.slice(0,10).map(prod=><SwiperSlide key={prod?._id} className="h-full">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl h-full overflow-visible">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>
</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>
</div>

<div className='block lg:hidden w-full'>
    {/* mobile product swiper */}
<div className="product-cards w-full my-4 h-full">
    
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
 
        {
allProducts.slice(0,10).map(prod=><SwiperSlide key={prod?._id} className="">

<Link to={`/product-details/${prod?.Product_Name}/${prod?._id}`} className="w-[200px] h-[300px] flex flex-col gap-2 bg-white px-2 py-3 shadow hover:shadow-xl">

<div className="w-[150px] h-[120px] mx-auto">
<img src={prod?.Image_URL} alt={prod?.Product_Name} />
</div>

<div className="h-[40px] mt-8">
  <p className="text-xs font-normal text-[#4d4d4f] overflow-hidden">{prod?.Product_Name.slice(0,45)}{prod?.Product_Name.length > 50 ? "..." : ""}</p>
</div>

<div className="mt-3 flex flex-col space-y-2">
<p className="font-bold">R 220</p>
<p className=" inline-flex items-center gap-1 text-sm"><HiStar className='h-4 w-4 text-yellow-400' /> <span>4.3</span><span className='font-medium text-gray-600'>(20)</span> <span><IoIosArrowDown className='h-5 w-5 text-gray-500' /></span> </p>
</div>

</Link>

</SwiperSlide>)
        }

      </Swiper>

</div>
</div>
</div>

<div className='Product_Information my-14 w-full h-full px-3 py-4 bg-white rounded shadow'>
<p className='text-[#4d4d4f] font-medium text-lg'>Product Information</p>

<div className="overflow-x-auto my-5">
  <table className="table">

    <tbody className='border rounded'>
      {/* row 1 */}
      <tr>
        <td className='border-r font-semibold text-[#4d4d4f] text-sm'>Categories</td>
        <td className='text-sm'>
            <ul>
                <li className='inline-flex gap-2 items-center'>
                    <Link className='hover:underline text-primary' to={`/all/${selectedProducts?.Main_Category}`}>{selectedProducts?.Main_Category}</Link>

                    <span>/</span> 

                    <Link className='hover:underline text-primary' to={`/all/${selectedProducts?.Main_Category}/${selectedProducts?.Sub_Category}`}>{selectedProducts?.Sub_Category}</Link>
                </li>
            </ul>
        </td>
      </tr>

      <tr>
        <td className='border-r font-semibold text-[#4d4d4f] text-sm'>Brand</td>
        <td className='text-sm'>
        <Link className='hover:underline text-primary' to={`/all/${selectedProducts?.Brand_Name}`}>{selectedProducts?.Brand_Name}</Link>
        </td>
      </tr>

      <tr>
        <td className='border-r font-semibold text-[#4d4d4f] text-sm'>Warranty</td>
        <td className='text-sm'>Limited
        ({selectedProducts?.Warranty_Period} Months )
        </td>
      </tr>

      <tr>
        <td className='border-r font-semibold text-[#4d4d4f] text-sm'>What's in the box</td>
        <td className='text-sm'>
        {selectedProducts?.Whats_in_the_Box}
        </td>
      </tr>


      <tr>
        <td className='border-r font-semibold text-[#4d4d4f] text-sm'>Ingredients & Material</td>
        <td className='text-sm'>
        {selectedProducts?.Main_Material_Fabric}
        </td>
      </tr>

      <tr>
        <td className='border-r font-semibold text-[#4d4d4f] text-sm'>Basic Colours</td>
        <td className='text-sm'>
        {selectedProducts?.Main_Colour}
        </td>
      </tr>

      {
        selectedProducts?.Animal_Type &&  <tr>
        <td className='border-r font-semibold text-[#4d4d4f] text-sm'>Animal Type</td>
        <td className='text-sm'>
        {selectedProducts?.Animal_Type}
        </td>
      </tr>
      }

<tr>
        <td className='border-r font-semibold text-[#4d4d4f] text-sm'>Barcode</td>
        <td className='text-sm'>
        {selectedProducts?.Barcode}
        </td>
      </tr>
    </tbody>
  </table>
</div>

</div>


<div className='description my-14 w-full h-full px-3 py-4 bg-white rounded shadow'>
<p className='text-[#4d4d4f] font-medium text-lg'>Description</p>
 <div className='my-2'>
<p className='text-sm'>{selectedProducts?.Description}</p>
 </div>

 <div className='text-sm my-4 space-y-1'>
    <p>What's in the box</p>
    <p>{selectedProducts?.Whats_in_the_Box}</p>
 </div>

</div>

<div className='review my-14 w-full h-full px-3 py-4 bg-white rounded shadow'>
<p className='text-[#4d4d4f] font-medium text-lg'>Reviews</p>

<div className='w-full flex flex-col lg:flex-row items-start gap-10'>

<div className='w-full lg:w-1/3 my-4'>

<div className='flex items-center w-full justify-between'>

<div>
<p className='text-5xl font-black text-[#4d4d4f]'>4.6</p>
</div>

<div className='flex flex-col items-center'>
<Rating
      style={{ maxWidth: 80 }}
      value={4.6}
      readOnly
    />   
    <p className='text-sm'>32 Reviews</p>
</div>

</div>

<div className='w-full my-4'>
<div className={`inline-flex items-center gap-3 w-full py-1 px-1 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-5 ${selectedRating?.find(rat => rat === 5) ? "bg-primary bg-opacity-5" : ""}`} onClick={()=>setRating([...selectedRating , 5])}>
<div className='w-[20%]'><span className="inline-flex items-center gap-1 text-sm font-bold"><span>5</span> <HiStar className=' text-yellow-400' /></span></div>
<div className='w-full'><progress className="progress progress-success" value="80" max="100"></progress></div>
<div className='w-[10%]'>
<span className='text-sm font-bold'>25</span>
</div>
</div>

<div className={`inline-flex items-center gap-3 w-full py-1 px-1 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-5 ${selectedRating?.find(rat => rat === 4) ? "bg-primary bg-opacity-5" : ""}`} onClick={()=>setRating([...selectedRating , 4])}>
<div className='w-[20%]'><span className="inline-flex items-center gap-1 text-sm font-bold"><span>4</span> <HiStar className=' text-yellow-400' /></span></div>
<div className='w-full'><progress className="progress progress-accent" value="30" max="100"></progress></div>
<div className='w-[10%]'>
<span className='text-sm font-bold'>5</span>
</div>
</div>


<div className={`inline-flex items-center gap-3 w-full py-1 px-1 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-5 ${selectedRating?.find(rat => rat === 3) ? "bg-primary bg-opacity-5" : ""}`} onClick={()=>setRating([...selectedRating , 3])}>
<div className='w-[20%]'><span className="inline-flex items-center gap-1 text-sm font-bold"><span>3</span> <HiStar className=' text-yellow-400' /></span></div>
<div className='w-full'><progress className="progress progress-warning" value="10" max="100"></progress></div>
<div className='w-[10%]'>
<span className='text-sm font-bold'>3</span>
</div>
</div>


<div className={`inline-flex items-center gap-3 w-full py-1 px-1 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-5 ${selectedRating?.find(rat => rat === 2) ? "bg-primary bg-opacity-5" : ""}`} onClick={()=>setRating([...selectedRating , 2])}>
<div className='w-[20%]'><span className="inline-flex items-center gap-1 text-sm font-bold"><span>2</span> <HiStar className=' text-yellow-400' /></span></div>
<div className='w-full'><progress className="progress progress-warning" value={0} max="100"></progress></div>
<div className='w-[10%]'>
<span className='text-sm font-bold'>0</span>
</div>
</div>


<div className={`inline-flex items-center gap-3 w-full py-1 px-1 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-5 ${selectedRating?.find(rat => rat === 1) ? "bg-primary bg-opacity-5" : ""}`} onClick={()=>setRating([...selectedRating , 1])}>
<div className='w-[20%]'><span className="inline-flex items-center gap-1 text-sm font-bold"><span>1</span> <HiStar className=' text-yellow-400' /></span></div>
<div className='w-full'><progress className="progress progress-warning" value="10" max="100"></progress></div>
<div className='w-[10%]'>
<span className='text-sm font-bold'>1</span>
</div>
</div>



<div className='write-btn mt-3 mb-5 w-full'>
<button className='w-full text-center py-3 bg-primary text-white font-medium text-sm hover'>Write Review</button>
</div>
</div>

<div className='filter-option shadow my-6'>
<div className="collapse collapse-plus rounded" >
                            <input type="checkbox" defaultChecked={offerOpen2 ? true : false} onClick={() => setOfferOpen2(!offerOpen2)} />
                            <div className="collapse-title text-sm font-semibold bg-[#f4f4f4] border-b border-b-gray-200 rounded">
                                Filter by Ratings
                            </div>
                            <div className="collapse-content py-2">
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 5])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating?.find(rat => rat === 5) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><HiStar className='h-5 w-5 text-yellow-400' /> <span>5</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 4])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating?.find(rat => rat === 4) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><HiStar className='h-5 w-5 text-yellow-400' /> <span>4</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 3])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating?.find(rat => rat === 3) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><HiStar className='h-5 w-5 text-yellow-400' /> <span>3</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 2])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating?.find(rat => rat === 2) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><HiStar className='h-5 w-5 text-yellow-400' /> <span>2</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 1])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating?.find(rat => rat === 1) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><HiStar className='h-5 w-5 text-yellow-400' /> <span>1</span></span>
                                </label>
                            </div>
                        </div>
</div>


</div>

<div className='w-full'>
<div className='w-full flex items-center justify-between border-b border-b-gray-200 py-4'>
<div>
<p className='text-sm'>1 to 10 of 32 <span className='font-semibold'>Reviews</span></p>
</div>

  <div className='sort-menu'>
                                    <span className=' text-[13px] font-medium'>Sort by:</span>
                                    <select className='border px-2 py-2 rounded bg-white text-xs font-semibold'
                                        onChange={(e) => setSelectedSort([...selectedSort,e.target.value])}

                                    >
                                        <option defaultValue="Relevance">Most helpful</option>
                                        <option value="Descending">Most Recent</option>

                                    </select>

                                </div>
</div>

<div>

<div className='comment-section w-full space-y-3 py-4 border-b border-b-gray-200'>

<p className='font-semibold text-[#4d4d4f]'>Great deal</p>

<div>
<Rating
      style={{ maxWidth: 80 }}
      value={5}
      readOnly
    />  
</div>

<p className='text-sm'><span className='font-semibold text-[#4d4d4f]'>Subashnee - 31 Jul 2023 </span> <span>(Reviewed 7 days after purchase)</span></p>

<p className='text-sm'>Purchased because it was a great deal compared to the prices at other retailers</p>


<div className='py-3 w-full flex gap-10 items-center'>

<button className='text-sm inline-flex items-center gap-2 px-3 py-2 rounded-2xl border hover:bg-[#4d4d4f] hover:text-white transition-all duration-500'><FaThumbsUp className='w-4 h-4'/> <span>Helpful</span> <span>(7)</span></button>

<button className='text-primary text-sm'>Report Review</button>

</div>

</div>

<div className='comment-section w-full space-y-3 py-4 border-b border-b-gray-200'>

<p className='font-semibold text-[#4d4d4f]'>Awesome</p>

<div>
<Rating
      style={{ maxWidth: 80 }}
      value={5}
      readOnly
    />  
</div>

<p className='text-sm'><span className='font-semibold text-[#4d4d4f]'>Nick - 20 Sep 2023 </span> <span>(Reviewed 7 days after purchase)</span></p>

<p className='text-sm'>Purchased because it was a great deal compared to the prices at other retailers</p>


<div className='py-3 w-full flex gap-10 items-center'>

<button className='text-sm inline-flex items-center gap-2 px-3 py-2 rounded-2xl border hover:bg-[#4d4d4f] hover:text-white transition-all duration-500'><FaThumbsUp className='w-4 h-4'/> <span>Helpful</span> <span>(7)</span></button>

<button className='text-primary text-sm'>Report Review</button>

</div>

</div>


<div className='comment-section w-full space-y-3 py-4 border-b border-b-gray-200'>

<p className='font-semibold text-[#4d4d4f]'>Good Price</p>

<div>
<Rating
      style={{ maxWidth: 80 }}
      value={5}
      readOnly
    />  
</div>

<p className='text-sm'><span className='font-semibold text-[#4d4d4f]'>Ntsieng - 05 Oct 2023 </span> <span>(Reviewed 7 days after purchase)</span></p>

<p className='text-sm'>Purchased because it was a great deal compared to the prices at other retailers</p>


<div className='py-3 w-full flex gap-10 items-center'>

<button className='text-sm inline-flex items-center gap-2 px-3 py-2 rounded-2xl border hover:bg-[#4d4d4f] hover:text-white transition-all duration-500'><FaThumbsUp className='w-4 h-4'/> <span>Helpful</span> <span>(7)</span></button>

<button className='text-primary text-sm'>Report Review</button>

</div>

</div>

<div className='comment-section w-full space-y-3 py-4 border-b border-b-gray-200'>

<p className='font-semibold text-[#4d4d4f]'>So far so good</p>

<div>
<Rating
      style={{ maxWidth: 80 }}
      value={5}
      readOnly
    />  
</div>

<p className='text-sm'><span className='font-semibold text-[#4d4d4f]'>Andiswa - 30 Dec 2022 </span> <span>(Reviewed 7 days after purchase)</span></p>

<p className='text-sm'>Been using it for a week. My skin feels like a marshmallow, so soft. Love the glow. Am yet to see a change in the pigment, but I love the softness so much, I've already ordered another one.</p>


<div className='py-4 w-full flex gap-10 items-center'>

<button className='text-sm inline-flex items-center gap-2 px-3 py-2 rounded-2xl border hover:bg-[#4d4d4f] hover:text-white transition-all duration-500'><FaThumbsUp className='w-4 h-4'/> <span>Helpful</span> <span>(7)</span></button>

<button className='text-primary text-sm'>Report Review</button>

</div>

</div>

</div>
</div>

</div>


</div>

<div className='all-modal'>
    {/* When do I get it? */}
<input type="checkbox" id="When_I_get_it" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
    <label htmlFor="When_I_get_it" className="absolute top-3 right-3 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7' />
                        </label>
    </div>
  </div>
</div>

    {/* next-day delivery or collection */}
<input type="checkbox" id="next_day_delivery" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">next-day delivery or collection</p>
    <div className="modal-action">
    <label htmlFor="next_day_delivery" className="absolute top-3 right-3 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7' />
                        </label>
    </div>
  </div>
</div>
    {/* Eligible for Cash on Delivery */}
<input type="checkbox" id="COD" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Eligible for Cash on Delivery</p>
    <div className="modal-action">
    <label htmlFor="COD" className="absolute top-3 right-3 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7' />
                        </label>
    </div>
  </div>
</div>

    {/* Hassle-Free Exchanges & Returns for 30 Days. */}
<input type="checkbox" id="Exchanges&Returns" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Hassle-Free Exchanges & Returns for 30 Days.</p>
    <div className="modal-action">
    <label htmlFor="Exchanges&Returns" className="absolute top-3 right-3 cursor-pointer hover:text-error">
                            <HiXMark className='w-7 h-7' />
                        </label>
    </div>
  </div>
</div>



</div>
</div>

<div className='w-full flex flex-col gap-4'>
<div className='bg-white p-5 shadow'>
<p className='pt-2 pb-4 text-3xl font-extrabold'>R {selectedProducts?.Product_Price}</p>
<div className='flex flex-col items-center justify-center gap-2'>
<button className="inline-flex items-center justify-center text-green-700 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-500 border px-3 py-2 gap-1 font-medium w-full"><HiOutlinePlusSmall className='w-5 h-5' /> <HiShoppingCart className='w-5 h-5' /> Add to Cart</button>

              <button className="inline-flex items-center justify-center   bg-gray-200 transition-all duration-500 border px-3 py-2 gap-1 font-medium text-xs rounded hover:text-red-500 w-full"><IoMdHeartEmpty className='w-5 h-5' /> Add to Wishlist</button>
</div>
</div>



<div className='bg-white p-5 shadow'>
<div className='flex flex-col items-center gap-2 text-left'>
<button className='inline-flex w-full border px-3 py-2 gap-4 rounded-xl text-sm items-center'><img src="https://static.takealot.com/images/payment/ebucks-logo-@3x.svg" alt="Ebucks logo" /> <span>eB1,690</span></button>
<button className='inline-flex w-full border px-3 py-2 gap-4 rounded-xl text-sm items-center'><img src="https://static.takealot.com/images/payment/discovery-miles-logo.svg" alt="Discovery Miles Logo" /> <span>1,690</span></button>
</div>
</div>

<p className='font-semibold text-[#4d4d4f]'>Other Offers</p>
<div className='bg-white shadow'>
<div className="collapse collapse-plus rounded" >
                            <input type="checkbox" defaultChecked={offerOpen ? true : false} onClick={() => setOfferOpen(!offerOpen)} />
                            <div className="collapse-title text-sm font-semibold bg-[#f4f4f4] border-b border-b-gray-200 rounded">
                                <p>New</p>
                                <div className='py-2 inline-flex gap-1'>
<span className='font-normal'>1 offer from</span> 
<span>R 289</span>
                                </div>
                            </div>
                            <div className={`collapse-content py-2 overflow-y-auto ${offerOpen ? "h-fit" : ""}`}>
<div className='w-full flex justify-between items-center'>
<p className='font-bold text-xl'>R 289</p>
<button className='px-2 py-2 bg-green-700 text-white hover:bg-green-800 transition-all duration-500 inline-flex gap-1 rounded'><HiOutlinePlusSmall className='w-5 h-5' /> <HiShoppingCart className='w-5 h-5' /></button>    
</div>   

<div className='mt-3'>
  <span className='text-[#4d4d4f] font-light text-sm'>Ships in 5 - 7 work days</span>
  <div className='inline-flex items-center gap-1'>
    <Link to="/seller/myhome" className='text-xs text-primary hover:underline'>MyHome</Link>
    <span className='text-gray-500 text-base'><BsDot /></span>
    <span className='text-xs text-primary hover:underline'>Fulfilled by Takealot</span>
    </div>  
</div>
                            </div>
                        </div>
</div>
</div>


        </section>
    );
};

export default ProductDetails;