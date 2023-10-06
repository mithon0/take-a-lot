import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [totalProducts ,setTotalProducts] = useState(0);
    const [categoryList , setCategoryList] = useState([]);
    const [showList , setShowList] = useState(false)
console.log(totalProducts);
    const [products, setProducts] = useState([]);
    console.log(products);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("http://localhost:5000/total-products")
        .then(res=>res.json())
        .then(data=>setTotalProducts(data.totalProduct))
      },[])

      const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 100;
    const totalPage = Math.ceil(totalProducts / itemPerPage);
    const pageNumbers = [...Array(totalPage).keys()]

    useEffect(() => {
        fetchHouses();
      }, [currentPage,itemPerPage]);
    
      const fetchHouses = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:5000/all-products?page=${currentPage}&limit=${itemPerPage}`);
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };

      useEffect(()=>{
        fetch("categoryList.json")
        .then(res=>res.json())
        .then(data=>setCategoryList(data))
      },[])


    return (
       <section className='p-8'>
<div className='banner'>
<img src="https://static.takealot.com/images/sda/sda-fb-lg.png" alt="Banner" className='h-32'/>
</div>

<div className='flex items-start justify-center gap-12 my-10'>
<div className='lg:w-2/6'>
<div className='category-list bg-white shadow w-full rounded'>
<p className='font-semibold text-black px-3 pt-3 pb-1 border-b text-[14px]'>Refine by Category</p>

    <Link to="/all" className='  text-primary font-normal text-[14px] inline-block w-full px-3 py-2 bg-primary bg-opacity-10'>All Category</Link>

   <ul className='w-full'>
{/* <li>
    <Link to="/all/books" className='py-3 px-7 text-black font-normal text-[14px] inline-block w-full hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Books</Link>
</li> */}
{
    categoryList.slice(0, showList ? categoryList.length : 4).map(listItem=><li key={listItem?.id}>
        <Link to={listItem?.path} className='py-3 px-7 text-black font-normal text-[14px] inline-block w-full hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>{listItem?.category}</Link>
    </li>)
}
{
    showList ? <li onClick={()=>setShowList(!showList)}>
    <button className='text-left py-3 px-7 font-normal text-[12px] inline-block w-full text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Show less</button>
</li> : <li onClick={()=>setShowList(!showList)}>
    <button className='text-left py-3 px-7 font-normal text-[12px] inline-block w-full text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Show more</button>
</li>
}
   </ul>

</div>
</div>
<div className='w-full'>
asdsa
</div>
</div>



       </section>
    );
};

export default AllProducts;