import React, { useContext, useState } from 'react';
import { UserAuth } from '../../Auth/Auth';

const PersonalInfo = () => {
    const { user } = useContext(UserAuth);
    const [isNameHovered, setIsNameHovered] = useState(false);
    const [isEmailHovered, setIsEmailHovered] = useState(false);
    const [isPasswordHovered, setIsPasswordHovered] = useState(false);
    const [isNumberHovered, setIsNumberHovered] = useState(false);
    const [isDetailsHovered, setIsDetailsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsNameHovered(true);
        setIsEmailHovered(true)
        setIsPasswordHovered(true)
        setIsNameHovered(true)
        setIsDetailsHovered(true)
    };

    const handleMouseLeave = () => {
        setIsNameHovered(false);
        setIsEmailHovered(false)
        setIsPasswordHovered(false)
        setIsNumberHovered(false)
        setIsDetailsHovered(false)
    };

    return (
        <div>
            <h2 className='font-semibold text-lg mb-5'>Personal Details</h2>
            <div
                className={`flex justify-between items-center bg-white px-5 py-8 shadow-sm mt-2 ${isNameHovered ? 'hover:shadow-lg' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div>
                    <h2 className='font-bold'>Your Name</h2>
                    <p className='text-sm'>{user?.displayName}</p>
                </div>
                <div>
                    <div
                        className={`hover:bg-black hover:text-white hover:bg-opacity-70 px-14 py-2 rounded ${isNameHovered ? 'bg-black text-white bg-opacity-70' : 'border border-black'}`}
                    >
                        Edit
                    </div>
                </div>
            </div>
            <div
                className={`flex justify-between items-center bg-white px-5 py-8 shadow-sm mt-2 ${isEmailHovered ? 'hover:shadow-lg' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div>
                    <h2 className='font-bold'>Email Address</h2>
                    <p className='text-sm'>{user?.email}</p>
                </div>
                <div>
                    <div
                        className={`hover:bg-black hover:text-white hover:bg-opacity-70 px-14 py-2 rounded ${isEmailHovered ? 'bg-black text-white bg-opacity-70' : 'border border-black'}`}
                    >
                        Edit
                    </div>
                </div>
            </div>
            <div
                className={`flex justify-between items-center bg-white px-5 py-8 shadow-sm mt-2 ${isPasswordHovered ? 'hover:shadow-lg' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div>
                    <h2 className='font-bold'>Your Password</h2>
                    <p className='text-sm'>{user?.password}</p>
                </div>
                <div>
                    <div
                        className={`hover:bg-black hover:text-white hover:bg-opacity-70 px-14 py-2 rounded ${isPasswordHovered ? 'bg-black text-white bg-opacity-70' : 'border border-black'}`}
                    >
                        Edit
                    </div>
                </div>
            </div>
            <div
                className={`flex justify-between items-center bg-white px-5 py-8 shadow-sm mt-2 ${isNumberHovered ? 'hover:shadow-lg' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div>
                    <h2 className='font-bold'>Mobile Number</h2>
                    <p className='text-sm'>{user?.phone}</p>
                </div>
                <div>
                    <div
                        className={`hover:bg-black hover:text-white hover:bg-opacity-70 px-14 py-2 rounded ${isNumberHovered ? 'bg-black text-white bg-opacity-70' : 'border border-black'}`}
                    >
                        Edit
                    </div>
                </div>
            </div>
            <div
                className={`flex justify-between items-center bg-white px-5 py-8 shadow-sm mt-2 ${isDetailsHovered ? 'hover:shadow-lg' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div>
                    <h2 className='font-bold'>Business Details</h2>
                    <p className='text-sm'>{user?.details}</p>
                </div>
                <div>
                    <div
                        className={`hover:bg-black hover:text-white hover:bg-opacity-70 px-14 py-2 rounded ${isDetailsHovered ? 'bg-black text-white bg-opacity-70' : 'border border-black'}`}
                    >
                        Edit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;