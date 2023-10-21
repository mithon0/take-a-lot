import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddressBook = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [labelShow3, setLabelShow3] = useState(false);
    const [addressBanner , setAddressBanner] = useState(true)
    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
<section>
<div className="text-lg font-semibold text-[#4d4d4f] mb-5">Address Book</div>

{
    addressBanner ? 
    <div className='my-6 bg-white rounded shadow px-10 pb-10 pt-20 relative hero text-sm flex flex-col gap-5'>
<div className='px-2 py-2 rounded-full bg-white shadow'>
<img src="https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/add-address.svg-3a8a08e8214d9a9e5cb3.svg" alt="Banner" className='rounded-full'/>
</div>
<p className='text-[#000]'>You don't have any addresses saved.</p>

<button className='px-10 py-2 rounded text-sm font-medium border border-primary text-white bg-primary cursor-pointer' onClick={()=>setAddressBanner(false)}>Add New Address</button>
    </div>
    :
    <div className='my-6 bg-white rounded shadow px-6 pt-6 pb-20 relative'>
<p className='text-[#000] text-base font-semibold mb-4'>Add New Address</p>

<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 w-full'>


<div className='w-full items-center gap-5 flex flex-col lg:flex-row'>

<label className='w-full px-6 flex items-center bg-gray-100 py-4 shadow'>
<input type="radio" name="radio-2" {...register("address_type_residential")} className="radio radio-primary" />
<span className='text-sm'>Residential</span>
</label>

<label className='w-full px-6 flex items-center bg-gray-100 py-4 shadow'>
<input type="radio" {...register("address_type_business")}  value="Business" name="radio-2" className="radio radio-primary" />
<span className='text-sm'>Business</span>
</label>


</div>

<div className="inputGroup">  


      <input type="text" required className='inputField' {...register("Recipient_Name", { required: true })}
aria-invalid={errors.Recipient_Name ? "true" : "false"}/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='inputLabel'>Recipient Name</label>

      {errors.Recipient_Name?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the recipient's name</p>}
    </div>

    <div className="inputGroup">  


<input type="text" required className='inputField' {...register("Mobile_Number", { required: true })}
aria-invalid={errors.Mobile_Number ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Recipient Mobile Number</label>

{errors.Mobile_Number?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter a valid mobile number</p>}
</div>


<div className="inputGroup">  


<input type="text" required className='inputField' {...register("Street_Address", { required: true })}
aria-invalid={errors.Street_Address ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Street Address
</label>

{errors.Street_Address?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the street address</p>}
<p className="label-text  text-xs font-medium text-gray-500 mt-1">Eg. 12 Ridge Street</p>
</div>


<div className="inputGroup">  


<input type="text" required className='inputField' {...register("Complex_Building", { required: true })}
aria-invalid={errors.Complex_Building ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Complex / Building <small>(Optional)</small>
</label>

{errors.Complex_Building?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the Complex / Building</p>}
<p className="label-text text-xs font-medium text-gray-500 mt-1">Complex or Building Name, unit number or floor</p>
</div>


<div className="inputGroup">  


<input type="text" required className='inputField' {...register("Suburb", { required: true })}
aria-invalid={errors.Suburb ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Suburb
</label>

{errors.Suburb?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the suburb</p>}

</div>

<div className="inputGroup">  


<input type="text" required className='inputField' {...register("city_town", { required: true })}
aria-invalid={errors.city_town ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>City / Town
</label>

{errors.city_town?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter the city</p>}

</div>



<div className='flex flex-col lg:flex-row items-start lg:items-center gap-10'>

<div className="inputGroup">  


<input type="text" required className='inputField' {...register("Postal_Code", { required: true })}
aria-invalid={errors.Postal_Code ? "true" : "false"}/>
<span className="highlight"></span>
<span className="bar"></span>
<label className='inputLabel'>Postal Code
</label>

{errors.Postal_Code?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please enter a postal code</p>}

</div>

<div className="inputGroup">
{
    !labelShow3&& <label className='inputLabel'>Please select a province
    </label>
}
<select {...register("Province", { required: true })} className='inputField text-xs' onClick={()=>setLabelShow3(true)}>
<option defaultValue=""></option>
<option value="Eastern Cape">Eastern Cape</option>
<option value="Free State">Free State</option>
<option value="Gauteng">Gauteng</option>
<option value="KwaZulu-Natal">KwaZulu-Natal</option>
<option value="Limpopo">Limpopo</option>
<option value="Mpumalanga">Mpumalanga</option>
<option value="Northern Cape">Northern Cape</option>
<option value="North West">North West</option>
<option value="Western Cape">Western Cape</option>
</select>


{
    labelShow3&& <label className='inputLabel'>Please select a province
    </label>
}
<span className="highlight"></span>
<span className="bar"></span>


{errors.Province?.type === 'required' && <p role="alert" className='text-error font-medium text-xs'>Please select a province
</p>}
</div>
</div>

<div className='flex justify-end w-full my-3 gap-3 flex-col lg:flex-row'>
<input type="submit" className='px-10 py-2 rounded text-sm font-medium border border-primary text-white bg-primary cursor-pointer' value="Save Address"/>
</div>
</form>

<div className='absolute flex items-center justify-end lg:bottom-20 lg:right-56 bottom-6 w-[345px] lg:w-auto text-center' onClick={()=>setAddressBanner(true)}> 
<p className='px-10 py-2 border rounded text-sm font-medium border-[#4d4d4f] hover:bg-[#4d4d4f] hover:text-white cursor-pointer w-full'>Cancel</p>
</div>



</div>
}

</section>
    );
};

export default AddressBook;