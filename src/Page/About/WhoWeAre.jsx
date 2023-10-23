import React from "react";
import coverimg from "../../assets/icons/who_we_are_header.webp";
import dottedBg from "../../assets/images/dotted-bg.jpg";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import dottedBg3 from "../../assets/images/dotted-bg3.jpg";
import bodyImg from '../../assets/images/body_image.jpg'

const WhoWeAre = () => {
  return (
    <div>
      <div className="relative bg-black bg-opacity-60  overflow-hidden">
        <img
          src={dottedBg2}
          alt=""
          className="absolute bg-black bg-opacity-0 w-[800px] ms-28 opacity-40 -rotate-12 z-0"
        />
        <div className="relative z-10 text-white flex  items-center justify-center gap-48">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold font-serif">
              Learn More About
            </h2>
            <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-xs">
              We're takealot.com, and we've built our business on the simple
              principle that our <br /> customers come first.
            </p>
          </div>
          <div className="mt-8">
            <img src={coverimg} alt="Who We Are" className="h-56" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-16">
        <div>
          <p>
            Hi <br /> We’re takealot.com, and we’ve built our business on the
            simple principle that our customers come first. <br />
            Our business is retail and we strive to have the widest range of
            products and the best possible customer service on the African
            continent. We’re doing it by employing great people and developing
            innovative, cutting-edge tech. <br />
            But that’s what we do. It’s not who we are. We are all about our
            customers. We want to be the most customer-centric online shopping
            destination in Africa – to make online shopping so easy and seamless
            that everyone will feel comfortable doing it. <br />
            We want to know our customers. We want to be a part of their lives.
            We want each experience they have with us to leave them with a
            smile, whether it’s a confirmation email, an added detail on the
            packaging or even the return of an unwanted or damaged order. <br />
            Sure, we’re only human and we make mistakes, but when we do, we
            confront them honestly, openly and immediately, doing everything we
            can to make things right. We’re takealot.com Welcome.
          </p>
        </div>
        <div>
            <img src={bodyImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
