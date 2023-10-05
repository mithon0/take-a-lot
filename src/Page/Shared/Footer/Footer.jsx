// import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


const Footer = () => {
    // const [mode, setMode] = useState("auto");
    return (




        <footer className="text-gray-600 mt-20">
            <div className="bg-white hidden lg:flex">
                <div className="max-w-7xl mx-auto">
                    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="font-bold  mb-5">Download Our Apps</span>
                            </p>

                            <div className="flex items-center gap-3">
                                <img src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/google-play.svg-7a92427373a19e40a662.svg" alt="" />
                                <img src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/app-store.svg-edce310696aa7f6191a1.svg" alt="" />
                            </div>
                            <img className="mt-2" src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/huawei-appgallery.svg-bb1c8aaa1305360a018d.svg" alt="" />

                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="font-bold text-xl mt-8  mb-3">Follow Us</span>
                            </p>

                            <div className=" space-x-2  ">
                                <Link to='https://www.facebook.com/KhejurBD/' target='_blank' className="w-8 h-8 items-center hover:text-blue-700 justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsFacebook></BsFacebook></Link>
                                <Link to='https://www.youtube.com/@khejurbd268' target='_blank' className="w-8 h-8 items-center hover:text-blue-400 justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsTwitter></BsTwitter></Link>
                                <Link to='https://www.instagram.com/khejur.bd/' target='_blank' className="w-8 h-8 items-center  hover:text-red-500  justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsInstagram></BsInstagram> </Link>
                            </div>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10   order-first">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                                <ul>
                                    <li> <p className="font-bold  mb-5 ">Shop</p> </li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">Daily Deals</p></Link></li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Gift Vouchers</p></Link></li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Clearance Sale</p></Link></li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">App Only Deals</p></Link></li>
                                </ul>

                                <ul>
                                    <li> <p className="font-bold  mb-3 mt-4 ">Takealot.group</p> </li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">Superbalist.com</p></Link></li>
                                    <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Mr D</p></Link></li>
                                </ul>


                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                                <nav className="list-none mb-10">
                                    <ul>
                                        <li> <p className="font-bold  mb-5 ">Help</p> </li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Returns</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Contact Us</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">Help Centre</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Submit an Idea</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Suggest a Product</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Shipping & Delivery</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Takealot Pickup Points</p></Link></li>

                                    </ul>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                                <nav className="list-none mb-10">
                                    <ul>
                                        <li> <p className="font-bold  mb-5 ">Account</p> </li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Returns</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Invoices</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Track Order</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">My Account</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Personal Details</p></Link></li>

                                    </ul>
                                </nav>
                            </div>

                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                                <nav className="list-none mb-10">
                                    <ul>
                                        <li> <p className="font-bold  mb-5 ">Company</p> </li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Careers</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800 ">About Us</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Competitions</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Press & News</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Privacy Policy</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Sell on Takealot</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Speak Up Process</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Deliver for Takealot</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Terms & Conditions</p></Link></li>
                                        <li> <Link to='/'> <p className="text-xs lg:text-sm hover:underline hover:text-blue-800">Human Rights Statement</p></Link></li>

                                    </ul>
                                </nav>


                            </div>


                        </div>

                    </div>

                    <div className="container mx-auto border-t  ">

                        <div className="mt-4">
                            <div className="inline-flex items-center justify-center gap-1 text-sm mb-3  " style={{ color: "#0b79bf" }}>
                                <Link><p className="hover:underline ">Baby & Toddler</p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Beauty</p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Books </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Cameras </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Camping & Outdoors </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Cellphones & Wearables </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Computers & Tablets </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Fashion </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Gaming </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Garden, Pool & Patio </p></Link>

                                <Link><p className="hover:underline ">Health </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Home & Kitchen </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Luggage & Travel </p></Link>





                            </div>
                        </div>

                        <div className="container mx-auto  ">

                            <div className="inline-flex items-center justify-center space-x-1 text-sm mb-4 " style={{ color: "#0b79bf" }}>


                                <Link><p className="hover:underline ">Movies & Series </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Music </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Office & Stationery </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Pets </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Sport </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">TV, Audio & Video </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Toys </p></Link>
                                <p>/</p>
                                <Link><p className="hover:underline ">Vouchers </p></Link>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="lg:hidden w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 py-10">
                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="font-bold  mb-5">Download Our Apps</span>
                            </p>

                            <div className="flex flex-col items-center justify-center gap-3">
                                <div className="inline-flex items-center gap-3">
                                <img src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/google-play.svg-7a92427373a19e40a662.svg" alt="" />
                                <img src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/app-store.svg-edce310696aa7f6191a1.svg" alt="" />
                                </div>
                                <img className="mt-2" src="https://shopfront.takealot.com/3b82b4b187020f19a0133caaeea48a477247686e/static/media/src/images/huawei-appgallery.svg-bb1c8aaa1305360a018d.svg" alt="" />
                            </div>
                            

                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="font-bold text-xl mt-8  mb-3">Follow Us</span>
                            </p>

                            <div className=" space-x-2  ">
                                <Link to='https://www.facebook.com/KhejurBD/' target='_blank' className="w-8 h-8 items-center hover:text-blue-700 justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsFacebook></BsFacebook></Link>
                                <Link to='https://www.youtube.com/@khejurbd268' target='_blank' className="w-8 h-8 items-center hover:text-blue-400 justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsTwitter></BsTwitter></Link>
                                <Link to='https://www.instagram.com/khejur.bd/' target='_blank' className="w-8 h-8 items-center  hover:text-red-500  justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 " style={{ border: "1px solid" }}><BsInstagram></BsInstagram> </Link>
                            </div>
                        </div>
            <div className="bg-primary" >


                <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto  py-2 px-2"  >
                    <div className="py-4 grid grid-cols-5 lg:grid-cols-10  text-white items-center justify-center gap-3 lg:gap-1 opacity-60 ">
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/visa.svg-af3e99c35d73e394b54d.svg" alt="VISA" className="w-12 h-12" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/mastercard.svg-23a3ce15866685c8506f.svg" alt="Mastercard " className="w-10    h-8" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/american-express.svg-c015bac32018ca240301.svg" alt="American Express" className="w-16  h-6" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/diners-club-international.svg-1fbac96b68e4b755fc49.svg" alt="Diners Club International" className="w-20  h-8" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/payfast.svg-d10895e3af0dedb31817.svg" alt="PayFast" className="w-16  h-6" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/ozow.svg-5a25c4b6e18a84f487eb.svg" alt="Ozow" className="w-16  h-12" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/ebucks.svg-56934a5cf17963365d09.svg" alt="eBucks" className="w-20  h-8" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/mobicred.svg-bda9a4b182e4dd57d514.svg" alt="MobiCred" className="w-20  h-12" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/Discovery-Miles-web-icon.png-96dc92f96edcb8d82f52.png" alt="Discovery Miles" className="w-20 discovery h-10" />
                        <img src="https://shopfront.takealot.com/afa4f636e88f75a72c1df431db874abf97e61b2e/static/media/src/images/payment-providers/payflex.svg-8961bc011a0bea670239.svg" alt="Payflex" className="w-24 payflex  h-6" />

                    </div>

                    <div className="my-2">
                        <p className="text-white text-sm opacity-80">© Takealot Online (Pty) Ltd.</p>
                    </div>

                </div>
            </div>
        </footer>



    );
};

export default Footer;