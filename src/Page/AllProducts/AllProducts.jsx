import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [totalProducts ,setTotalProducts] = useState(0);
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


    return (
       <section className='p-8'>
<div className='banner'>
<img src="https://static.takealot.com/images/sda/sda-fb-lg.png" alt="Banner" className=''/>
</div>



       </section>
    );
};

export default AllProducts;