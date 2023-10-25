import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Extraordinary.css';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Extraordinary = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    // setShowVideo(!showVideo);
  };
  return (
    <div>
      <div
        className="hero h-[480px] mb-10"
        style={{
          backgroundImage: `url('https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/tal-careers-banner.jpg-dcf760b2a74b6d148d15.jpg')`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className=" bg-white  lg:px-6 px-5 lg:py-6 py-6 w-[1100px] space-y-5 bg-opacity-80">
            <h1 className="lg:text-5xl font-bold text-primary">
              Extraordinary Minds <br /> Wanted
            </h1>
            <p className="text-primary lg:text-2xl ">
              At takealot.com we firmly believe that the people with the best
              people win. And we plan on winning.
            </p>
            <button className="bg-primary py-2 px-4 rounded text-white hover:opacity-90">
              View our Job listings
            </button>
          </div>
          <div className="w-[100%]"></div>
        </div>
      </div>
      <div className="lg:flex md:flex-1 gap-5">
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
        <div className='mt-5'>
          <h2 className="lg:text-2xl font-semibold">
            Our company is built around the simple concept that the customer
            comes first.
          </h2>
          <p className=''>
            Takealot.com employees are entrepreneurial and dynamic, smart,
            customer‑centric, fun and have the shared ambition of takealot.com
            being the leading e‑commerce company in Africa.
          </p>
          <p className=''>
            We have fun, work hard, take ownership, work in teams to create
            solutions, and are always open to direct feedback/new ideas on where
            we can improve.
          </p>
          <p className=''>
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
        <div className="md:flex flex-1 justify-center gap-5 text-center">
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
          <button className="bg-primary px-6 py-2 rounded text-white">
            View all job listings
          </button>
        </div>
      </div>



      {/* Our values section */}
      <div
        className="mt-10 h-[300px] mb-10 "
        style={{
          backgroundImage: `url('https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/sell-on-takealot/line-art-bg.png-88f0c171cbf5ea3af16e.png')`,
        }}
      >
        <div className="text-center pt-10 pb-10">
          <h2 className="text-white text-3xl font-semibold mb-2">Our Values</h2>
          <p className="text-white">
            The takealot.com family lives and breathes by a set of core values
            that represent how we think and how we operate on a daily basis.
          </p>
        </div>

        <div className='px-8  m-auto'>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true} 
        modules={[Navigation]}
        className="mySwiper"
      >
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/fast.svg-cebf4659e365253e03e9.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Fast</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/direct.svg-e60d9940f5a0c1768f90.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Direct</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/fun.svg-17c5dbdecf2e90299065.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Fun</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/individualise.svg-d536d5e7ad2eb77ca5c2.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Individualise</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/iterate.svg-60be55f7e1ab28f8a3a6.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Iterate and Innovate</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/simplify.svg-cf69f75fe7f684734fd6.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Simplify</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/smart.svg-02a5963cbff95bfe25d8.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Smart</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/wise.svg-4d734faed6e3611d4acd.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Wise</h2>
            </SwiperSlide>
            <SwiperSlide className='mx-10'>
              <img className="w-24 bg-white rounded-full p-5 border-2 border-slate-500" src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/icons/diversity.svg-83086d5bfdedd85a3ed3.svg" alt="" />
              <h2 className="font-bold text-white lg:ms-8 md:ms-8 ms-1 mt-3">Diversity</h2>
            </SwiperSlide>
           
                 
          </Swiper>
        </div>
      </div>


        {/* What is like working */}
      <div>
        <h2 className='text-2xl font-semibold text-center mb-8'>What’s it like working at South Africa’s most exciting start-up?</h2>


        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 '>


        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/retail-customer-thumb.jpg-8b217475772b292ea0e7.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>The Job</h2>
        </div>
      )}
    </div>
        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/retail-introduction-thumb.jpg-5cb3222e800ca5a5d21c.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>The Challange</h2>
        </div>
      )}
    </div>
        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/retail-opportunities-thumb.jpg-50baeba7e6f78d7e1189.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>The Culture</h2>
        </div>
      )}
    </div>
        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/customer-service-thumb.jpg-8c18087c4d564ff0f29d.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>The Mentorship</h2>
        </div>
      )}
    </div>
        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/finance-thumb.jpg-2a17afd2e46c08ad75fc.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>Meeting The Minds</h2>
        </div>
      )}
    </div>



    
          
        </div>

        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 lg:-mt-28 sm:-mt-20 '>


        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/retail-customer-thumb.jpg-8b217475772b292ea0e7.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>Retail Conversation</h2>
        </div>
      )}
    </div>
        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/the-challenges-thumb.jpg-d20effa67836604f1fc4.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>Retail Conversation</h2>
        </div>
      )}
    </div>
        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/the-culture-thumb.jpg-22703cf26f390f681642.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>Retail Conversation</h2>
        </div>
      )}
    </div>
        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/the-mentorship-thumb.jpg-6d1a24f01f52c1fbd6d7.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>Retail Conversation</h2>
        </div>
      )}
    </div>
        <div className="video-container ">
      {showVideo ? (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/doA_Fo_vfAI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="thumbnail-wrapper bg-white pb-2 shadow-sm w-56" onClick={toggleVideo}>
          <img src="https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/careers/landing/video-thumbs/meeting-the-minds-thumb.jpg-ecb1956157ae4cd3d047.jpg" alt="Video Thumbnail" className="thumbnail" />
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" fill="#fff" />
            </svg>
          </div>
          <h2 className='text-center font-semibold pt-2'>Retail Conversation</h2>
        </div>
      )}
    </div>



    
          
        </div>



      </div>



      {/* Our values section */}
      <div
        className="-mt-20 h-[250px]"
        style={{
          backgroundImage: `url('https://shopfront.takealot.com/13eff8fb49302e59b7e8b9c7a03563835e301383/static/media/src/images/sell-on-takealot/line-art-bg.png-88f0c171cbf5ea3af16e.png')`,
        }}
      >
        <div className="text-center pt-20">
          <h2 className="text-white lg:text-4xl text-2xl font-semibold mb-2">The people with the best people win. Join us.</h2>
          <div>
            <button className='text-primary bg-white px-6 py-2 rounded hover:bg-opacity-90 mt-6'>View our job listings</button>
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default Extraordinary;
