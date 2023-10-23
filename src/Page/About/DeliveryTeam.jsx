import React from "react";
import coverimg from "../../assets/images/Our-journey.webp";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import bodyImg from "../../assets/images/body_image.jpg";
import desgImg from "../../assets/images/Our-Destination-Page-1024x341.jpg";
import rootSec from "../../assets/images/roots-scooters2.jpg";
import { Link } from "react-router-dom";
import keyboardImg from "../../assets/images/Mr-D-strap.webp";
import deleveryImg from "../../assets/images/takealot_delivery_colour.webp";

const DeliveryTeam = () => {
  return (
    <div>
      <div className="relative bg-black bg-opacity-60 px-12 overflow-hidden">
        <img
          src={dottedBg2}
          alt=""
          className="absolute bg-black bg-opacity-0 w-[800px] ms-28 opacity-40 -rotate-12 z-0"
        />
        <div className="relative z-10 text-white flex  items-center justify-center gap-48">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Learn More About</h2>
            <h1 className="text-5xl font-bold mb-4">
              The Takealot delevery Team
            </h1>
            <p className="text-xs">
              With a dedicated team of professionals, the Takealot Delivery Team
              is the driving force behind our world-class delivery service.
            </p>
          </div>
          <div className="">
            <img src={keyboardImg} alt="Who We Are" className="h-56" />
          </div>
        </div>
      </div>

      <div className="mx-20">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-5 mt-10">
            <div>
              <img src={deleveryImg} alt="" />
            </div>
            <div>
              <div className="float-left">
                <h2 className="font-semibold text-lg">Our Destination</h2>
              </div>
              <div className="w- ps-36 mt-[10px]">
                <div className="border border-slate-400 opacity-30"></div>
                <div className="border border-slate-400 opacity-30 mt-1"></div>
              </div>
              <br />
              <div className="text-xs">
              <p className="text-black">
                The Takealot Delivery Team (formerly Mr D Courier) is a
                specialist in last-mile business to consumer deliveries,
                delivering packages for all Takealot Group companies
                (Takealot.com, Mr D and Superbalist.com) as well as other
                independent business services, such as FNB Credit Cards.
              </p>{" "}
              <br />
              <p className="text-slate-500">
                As the leading last mile customer delivery service in South
                Africa, the Takealot Delivery Team ensures all customers have a
                seamless experience every time they shop. The Takealot Delivery
                Team was born out of Mr Delivery (the multi-restaurant delivery
                service, originally opened in May 1992). In June 2011,
                takealot.com purchased a minority stake in Mr Delivery, as the
                company sought to build out its own in-house logistics
                expertise.
              </p> <br />
              <p>
                Takealot acquired a controlling stake of Mr Delivery in January
                2013 and purchased the company outright in June 2014, in what
                has proved to be a very successful partnership. In 2016, the
                food arm of Mr Delivery was rebranded as <Link className="text-primary">Mr D Food</Link> and again in
                2022 as Mr D, and reengineered as a successful mobile app-based
                business.
              </p> <br />
              <p>
                across the country, allowing shoppers to collect orders at their
                convenience. Today, the Takealot Delivery Team has over 90
                branches nationwide and over 15,000 drivers. With a focus on
                cutting-edge technology, the Takealot Delivery Team offers an
                uncompromising level of service to both customers and suppliers.
              </p> <br />
              <h2 className="font-semibold">Takealot Delivery Team Driver Hotline</h2> <br />
              <p>
                To report a driver incident or share a compliment or suggestion
                call 087 362 7666.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTeam;
