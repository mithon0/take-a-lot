import React from 'react';
import { FaCalculator } from 'react-icons/fa';

const FeeEstimator = () => {
    return (
        <div>
                <div className='bg-white py-4 w-full  flex '>
                    <div>
                        <h2 className='text-2xl font-semibold'>Takealot<span className='bg-blue-400 rounded-full px-1 py-1 text-xs'>com</span></h2>
                    </div>
                    <div className='ps-[500px]'>
                        <h1 className='text-lg flex items-center gap-2 font-semibold'><FaCalculator/> FeeEstimator</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Estimate Takealot Fees</h1>
                        <p>Use the Fee Estimator to estimate the Takealot Fees you will be charged on a sale, allowing you to have more visibility and transparency when it comes to guaranteed fees charged.

Please note that the Fee Estimator provides an estimate and does not include subscription fees, storage fees or any other fees that can be avoided and are not guaranteed to be applied to the sale of a product.

For more information on how to use the Fee Estimator, click here or view the Takealot pricing schedule for information on fees.</p>
                    </div>
                    <div></div>
                </div>
        </div>
    );
};

export default FeeEstimator;