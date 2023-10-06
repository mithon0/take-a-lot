import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js
import { Link } from 'react-router-dom';
import { HiMiniMagnifyingGlass, HiStar } from 'react-icons/hi2';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const AllProducts = () => {
    const priceOptions = [
        { id: 1, value: 150, label: 'R 150' },
        { id: 3, value: 500, label: 'R 500' },
        { id: 4, value: 800, label: 'R 800' },
        { id: 5, value: 1000, label: 'R 1,000' },
        { id: 6, value: 2000, label: 'R 2,000' },
        { id: 7, value: 3000, label: 'R 3,000' },
        { id: 8, value: 5000, label: 'R 5,000' },
        { id: 9, value: 8000, label: 'R 8,000' },
        { id: 10, value: 12000, label: 'R 12,000' },
        { id: 11, value: 25000, label: 'R 25,000' },
        { id: 13, value: 50000, label: 'R 5,0000' },
    ];
    const initialMin = { label: 'Min', value: -1 }; // Initial value for Min dropdown
    const initialMax = { label: 'Max', value: -2 }; // Initial value for Max dropdown

    const [range, setRange] = useState({ min: 150, max: 50000 }); // Initial range values

    const [selectedMin, setSelectedMin] = useState(initialMin);
    const [selectedMax, setSelectedMax] = useState(initialMax);
    const [selectedRating, setRating] = useState([]);
    const [selectedAvailability, setAvailability] = useState([]);
    const [selectedDeals, setDeals] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
const [searchBrands, setSearchBrand] = useState("");
console.log(searchBrands);

    const [totalProducts, setTotalProducts] = useState(0);
    const [categoryList, setCategoryList] = useState([]);
    const [demoBrandList, setDemoBrandList] = useState([]);
    const [filterOpen1, setFilterOpen1] = useState(true);
    const [filterOpen2, setFilterOpen2] = useState(true);
    const [filterOpen3, setFilterOpen3] = useState(true);
    const [filterOpen4, setFilterOpen4] = useState(true);
    const [filterOpen5, setFilterOpen5] = useState(true);
    const [showList, setShowList] = useState(false)
    // console.log(totalProducts);
    const [products, setProducts] = useState([]);
    // console.log(products);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/total-products")
            .then(res => res.json())
            .then(data => setTotalProducts(data.totalProduct))
    }, [])

    useEffect(() => {
        fetch('brands.json')
          .then((res) => res.json())
          .then((data) => {
            // Filter the brands based on the search input or show all when search is empty
            const filteredBrands = searchBrands
              ? data.filter((brand) =>
                  brand.Brand.toLowerCase().includes(searchBrands.toLowerCase())
                )
              : data;
            setDemoBrandList(filteredBrands);
          });
      }, [searchBrands]);

    const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 100;
    const totalPage = Math.ceil(totalProducts / itemPerPage);
    const pageNumbers = [...Array(totalPage).keys()]

    useEffect(() => {
        fetchHouses();
    }, [currentPage, itemPerPage]);

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

    useEffect(() => {
        fetch("categoryList.json")
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, [])



    // useEffect(() => {
    //     let chartInstance = null;

    //     const generateChartData = () => {
    //       // Check if the initial values are selected
    //       if (selectedMin.value === initialMin.value || selectedMax.value === initialMax.value) {
    //         // Handle the case where "Min" or "Max" is selected
    //         return {
    //           labels: [],
    //           datasets: [],
    //         };
    //       }

    //       const minIndex = priceOptions.findIndex((option) => option.value === selectedMin.value);
    //       const maxIndex = priceOptions.findIndex((option) => option.value === selectedMax.value);
    //       const chartData = priceOptions.slice(minIndex, maxIndex + 1);
    //       const reversedLabels = chartData.map((option) => option.label).reverse(); // Reverse the labels
    //       return {
    //         labels: reversedLabels,
    //         datasets: [
    //           {
    //             label: 'Price Range',
    //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //             borderColor: 'rgba(75, 192, 192, 1)',
    //             borderWidth: 1,
    //             data: chartData.map((option) => option.value),
    //           },
    //         ],
    //       };
    //     };

    //     if (chartInstance) {
    //       chartInstance.destroy();
    //     }

    //     const ctx = document.getElementById('chart');
    //     chartInstance = new Chart(ctx, {
    //       type: 'bar',
    //       data: generateChartData(),
    //       options: {
    //         scales: {
    //           x: {
    //             display: false, // Hide X-axis labels
    //           },
    //           y: {
    //             display: false, // Hide Y-axis labels
    //             beginAtZero: true,
    //           },
    //         },
    //         plugins: {
    //           legend: {
    //             display: false, // Hide the legend
    //           },
    //         },
    //       },
    //     });

    //     return () => {
    //       if (chartInstance) {
    //         chartInstance.destroy();
    //       }
    //     };
    //   }, [selectedMin, selectedMax]);

    useEffect(() => {
        let chartInstance = null;

        const generateChartData = () => {
            if (
                selectedMin.value === initialMin.value ||
                selectedMax.value === initialMax.value
            ) {
                // If "Min" or "Max" is selected, return the full price range
                return {
                    labels: priceOptions.map((option) => option.label),
                    datasets: [
                        {
                            label: 'Price Range',
                            backgroundColor: '#0B7ABF36',
                            borderColor: '#0B79BF',
                            borderWidth: 1,
                            data: priceOptions.map((option) => option.value),
                        },
                    ],
                };
            }

            const minIndex = priceOptions.findIndex(
                (option) => option.value === selectedMin.value
            );
            const maxIndex = priceOptions.findIndex(
                (option) => option.value === selectedMax.value
            );
            const chartData = priceOptions.slice(minIndex, maxIndex + 1);
            const reversedLabels = chartData.map((option) => option.label).reverse(); // Reverse the labels
            return {
                labels: reversedLabels,
                datasets: [
                    {
                        label: 'Price Range',
                        backgroundColor: '#0B7ABF36',
                        borderColor: '#0B79BF',
                        borderWidth: 1,
                        data: chartData.map((option) => option.value),
                    },
                ],
            };
        };

        if (chartInstance) {
            chartInstance.destroy();
        }

        const ctx = document.getElementById('chart');
        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: generateChartData(),
            options: {
                scales: {
                    x: {
                        display: false, // Hide X-axis labels
                    },
                    y: {
                        display: false, // Hide Y-axis labels
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        display: false, // Hide the legend
                    },
                },
            },
        });

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [selectedMin, selectedMax]);

    // const handleRatingChange = (e) =>{
    //     let rating = e;
    //     const oldRating = selectedRating;
    //     const updatedRating = [...oldRating , rating];
    //     setRating(updatedRating)
    // }
    // console.log(selectedRating);

    const handleRangeChange = (newRange) => {
        setRange(newRange);
        // Update selectedMin and selectedMax based on the new range values
        const minOption = priceOptions.find((option) => option.value <= newRange.min);
        const maxOption = priceOptions.find((option) => option.value >= newRange.max);
        setSelectedMin(minOption || initialMin);
        setSelectedMax(maxOption || initialMax);
    };
    return (
        <section className='p-8'>
            <div className='banner'>
                <img src="https://static.takealot.com/images/sda/sda-fb-lg.png" alt="Banner" className='h-32' />
            </div>

            <div className='flex items-start justify-center gap-12 my-10'>
                <div className='lg:w-2/6'>
                    <div className='category-list bg-white shadow w-full rounded'>
                        <p className='font-semibold text-black px-3 pt-4 pb-3 border-b text-[14px]'>Refine by Category</p>

                        <Link to="/all" className='  text-primary font-normal text-[14px] inline-block w-full px-3 py-2 bg-primary bg-opacity-10'>All Category</Link>

                        <ul className='w-full'>
                            {/* <li>
    <Link to="/all/books" className='py-3 px-7 text-black font-normal text-[14px] inline-block w-full hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Books</Link>
</li> */}
                            {
                                categoryList.slice(0, showList ? categoryList.length : 4).map(listItem => <li key={listItem?.id}>
                                    <Link to={listItem?.path} className='py-3 px-7 text-black font-normal text-[14px] inline-block w-full hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>{listItem?.category}</Link>
                                </li>)
                            }
                            {
                                showList ? <li onClick={() => setShowList(!showList)}>
                                    <button className='text-left py-3 px-7 font-normal text-[12px] inline-block w-full text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Show less</button>
                                </li> : <li onClick={() => setShowList(!showList)}>
                                    <button className='text-left py-3 px-7 font-normal text-[12px] inline-block w-full text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Show more</button>
                                </li>
                            }
                        </ul>

                    </div>

                    <div className='bg-white my-3 shadow rounded'>
                        <p className='font-semibold text-black px-3 pt-4 pb-3 border-b text-[14px]'>Filter</p>

                        <div className="collapse collapse-plus" >
                            <input type="checkbox" checked={filterOpen1 ? true : false} onClick={() => setFilterOpen1(!filterOpen1)} />
                            <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                Price
                            </div>
                            <div className="collapse-content py-2">
                                <div>

                                    <div className="chart bg-gray-100 rounded">
                                        <canvas id="chart" />
                                    </div>

                                    <div className="range-selector">
                                        <Slider
                                            min={150}
                                            max={50000}
                                            value={[range.min, range.max]}
                                            onChange={(newValues) => handleRangeChange({ min: newValues[0], max: newValues[1] })}
                                            range
                                        />
                                    </div>

                                    <div className="dropdowns w-full inline-flex items-center justify-around pt-2">
                                        <select className='border px-2 py-2 rounded bg-gray-100 text-xs font-semibold'
                                            value={selectedMin.value}
                                            onChange={(e) =>
                                                setSelectedMin(
                                                    priceOptions.find((option) => option.value === +e.target.value)
                                                )
                                            }
                                        >
                                            <option value={initialMin.value}>{initialMin.label}</option>
                                            {priceOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>

                                        <select className='border px-2 py-2 rounded bg-gray-100 text-xs font-semibold'
                                            value={selectedMax.value}
                                            onChange={(e) =>
                                                setSelectedMax(
                                                    priceOptions.find((option) => option.value === +e.target.value)
                                                )
                                            }
                                        >
                                            <option value={initialMax.value}>{initialMax.label}</option>
                                            {priceOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="collapse collapse-plus" >
                            <input type="checkbox" checked={filterOpen2 ? true : false} onClick={() => setFilterOpen2(!filterOpen2)} />
                            <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                Brand
                                <div className='py-2'>

                                </div>
                            </div>
                            <div className="collapse-content py-2 h-64 overflow-y-auto">
                           <div className='py-2 relative inline-flex w-full items-center'>
                           <input type="text" onChange={(e)=>setSearchBrand(e.target.value)} className='border w-full px-4 py-2 placeholder:text-sm font-normal outline-none focus:outline' placeholder='Search by Brand'/>
                           <span className='absolute right-2'><HiMiniMagnifyingGlass /></span>
                           </div>
                                {
                                    demoBrandList.map(brand=><label key={brand?.id} className="cursor-pointer label relative" onClick={() => setSelectedBrand([...selectedBrand, brand?.Brand])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedBrand.find(br => br === brand?.Brand) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">{brand?.Brand}</span>
                                </label>)
                                }
                            </div>
                        </div>


                        <div className="collapse collapse-plus" >
                            <input type="checkbox" checked={filterOpen3 ? true : false} onClick={() => setFilterOpen3(!filterOpen3)} />
                            <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                Availability
                            </div>
                            <div className="collapse-content py-2">
                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedAvailability, "In Stock"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedAvailability.find(able => able === "In Stock") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">In Stock</span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "3 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(able => able === "3 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 3 days</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "5 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(able => able === "5 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 5 days</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "7 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(able => able === "7 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 7 days</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "12 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(able => able === "12 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 12 days</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "15 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(able => able === "15 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 15 days</span>
                                </label>

                            </div>
                        </div>


                        <div className="collapse collapse-plus" >
                            <input type="checkbox" checked={filterOpen4 ? true : false} onClick={() => setFilterOpen4(!filterOpen4)} />
                            <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                Rating
                            </div>
                            <div className="collapse-content py-2">
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 4])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(rat => rat === 4) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>4</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 3])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(rat => rat === 3) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>3</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 2])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(rat => rat === 2) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>2</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 1])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(rat => rat === 1) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>1</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                </label>
                            </div>
                        </div>


                        <div className="collapse collapse-plus" >
                            <input type="checkbox" checked={filterOpen5 ? true : false} onClick={() => setFilterOpen5(!filterOpen5)} />
                            <div className="collapse-title text-sm font-semibold">
                                Deal
                            </div>
                            <div className="collapse-content py-2">
                                <label className="cursor-pointer label relative" onClick={() => setDeals([...selectedDeals, "Featured Deals"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(deal => deal === "Featured Deals") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Featured Deals</span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setDeals([...selectedDeals, "Bundle Deals"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(deal => deal === "Bundle Deals") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Bundle Deals</span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setDeals([...selectedDeals, "App Only Deals"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(deal => deal === "App Only Deals") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">App Only Deals</span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setDeals([...selectedDeals, "Daily Deals"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={selectedRating.find(deal => deal === "Daily Deals") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Daily Deals</span>
                                </label>
                            </div>
                        </div>
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