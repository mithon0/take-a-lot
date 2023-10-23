import React from 'react';

const Extraordinary = () => {
    return (
        <div>
            <div className='flex gap-5'>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/A3ExwnlX4TI?si=28p6W-q5Z7lvDHN9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>Our company is built around the simple concept that the customer comes first.</h2>
                    <p>Takealot.com employees are entrepreneurial and dynamic, smart, customer‑centric, fun and have the shared ambition of takealot.com being the leading e‑commerce company in Africa.</p>
                    <p>We have fun, work hard, take ownership, work in teams to create solutions, and are always open to direct feedback/new ideas on where we can improve.</p>
                    <p>We are short on ego and high on output. We are doers and not only thinkers - it’s all in the execution after all. We love what we do and what we are creating. Join us and become a part of something epic.</p>
                    <p className='text-primary hover:underline'>Get to know us</p>
                </div>
            </div>
        </div>
    );
};

export default Extraordinary;