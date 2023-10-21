import React from 'react';
import { useForm } from 'react-hook-form';

const Newsletter = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = async (data) => {
    console.log(data);
}
    return (
<section>
<div className="text-lg font-semibold text-[#4d4d4f] mb-5">Newsletter Subscriptions</div>

<div className='w-full bg-white shadow p-6'>
<p className='mb-3 text-[12px] font-normal text-[#4d4d4f]'>Email Address: <span className='font-semibold'>sakibbhaiya143@gmail.com</span></p>
<p className='text-[#000] text-sm font-bold'>Tell us what you're interested in:</p>

<form className='mt-7 mb-3 w-full' onSubmit={handleSubmit(onSubmit)}>

<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 w-full'>
<div className='w-full flex flex-col gap-10'>
<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("General")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">General</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Afrikaans")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Afrikaans</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Beauty")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Beauty</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Daily_Deals")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Daily Deals</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Gaming")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Gaming</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Home_&_Kitchen")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Home & Kitchen</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Movies_&_TV")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Movies & TV</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Pets")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Pets</span> 
  </label>
</div>
</div>


<div className='w-full flex flex-col gap-10'>
<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Rate_&_Review")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Rate & Review</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Auto_&_DIY")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Auto & DIY</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Books")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Books</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Electronics")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Electronics</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Garden_Pool_&_Patio")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Garden, Pool & Patio</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Liquor")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
 Liquor</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Music")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
    Music</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Sport")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Sport</span> 
  </label>
</div>
</div>


<div className='w-full flex flex-col gap-10'>
<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Wish_List_Items_on_Sale")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Wish List Items on Sale</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Baby_&_Toddler")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Baby & Toddler</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Camping_&_Outdoor")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
    Camping & Outdoor</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Fashion")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Fashion</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Health_&_Personal_Care")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Health & Personal Care</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Luggage_&_Travel")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
 Luggage & Travel</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Office_&_Stationery")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">
Office & Stationery</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("Toys")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Toys</span> 
  </label>
</div>
</div>
</div>

<div className='my-8'>
<p className='text-xs font-normal'>You will receive newsletters based on your interests, recent orders and browsing behaviour.</p>
</div>

<div className='mt-3 mb-8'>
<div className="form-control">
  <label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" defaultChecked={false} {...register("unsubscribe")} className="checkbox checkbox-sm checkbox-primary" />
    <span className="label-text">Unsubscribe from all Takealot newsletters</span> 
  </label>
</div>
</div>

<div className='sub-btn'>
<input type="submit" value="Save Preferences" className='px-5 py-3 rounded text-xs font-medium text-white bg-primary'/>
</div>



</form>
</div>
</section>
    );
};

export default Newsletter;