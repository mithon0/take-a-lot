import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
       <section className='lg:px-5'>
        
        <div className='my-5'>
            <h1 className='text-xl text-[#4d4d4f] font-semibold px-5 lg:px-0'>Shopping Cart</h1>

            <div className='my-5 bg-white rounded shadow py-7 hero flex flex-col items-center gap-5'>

<div className='px-2 py-2 shadow rounded-full bg-white'>
<img src="https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/cart/empty-cart.svg-a3f63604a3d49f7b220a.svg" alt="cart" className='rounded-full'/>
</div>

<p className='text-[#000]'>Your shopping cart is empty</p>

<Link className='py-2 px-5 rounded-3xl lg:rounded bg-primary text-white font-medium'>Continue Shopping</Link>


            </div>
        </div>

       </section>
    );
};

export default Cart;