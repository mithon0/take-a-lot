import React from "react";

const Extraordinary = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/A3ExwnlX4TI?si=28p6W-q5Z7lvDHN9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">
            Our company is built around the simple concept that the customer
            comes first.
          </h2>
          <p>
            Takealot.com employees are entrepreneurial and dynamic, smart,
            customer‑centric, fun and have the shared ambition of takealot.com
            being the leading e‑commerce company in Africa.
          </p>
          <p>
            We have fun, work hard, take ownership, work in teams to create
            solutions, and are always open to direct feedback/new ideas on where
            we can improve.
          </p>
          <p>
            We are short on ego and high on output. We are doers and not only
            thinkers - it’s all in the execution after all. We love what we do
            and what we are creating. Join us and become a part of something
            epic.
          </p>
          <p className="text-primary hover:underline">Get to know us</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-center mt-10 mb-10">
          Ready for a challenge? Find your spot.
        </h2>
        <div className="flex justify-center gap-5 text-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/cape-town-central-office.jpg-12fb092eadf31beeb47f.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className=" text-xl font-semibold">Cape Town</h2>    
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className=""
                src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/cape-town-warehouse.jpg-72b774cadd8a320052a5.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className=" text-xl font-semibold">Cape Town Warehouse</h2>    
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
        <button className="bg-primary px-6 py-2 rounded text-white">View all job listings</button>
        </div>
      </div>
    </div>
  );
};

export default Extraordinary;
