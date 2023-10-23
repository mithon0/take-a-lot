import React from "react";
import coverimg from "../../assets/images/Our-journey.webp";
import dottedBg2 from "../../assets/images/dotted-bg-2.png";
import bodyImg from "../../assets/images/body_image.jpg";
import desgImg from "../../assets/images/Our-Destination-Page-1024x341.jpg";
import rootSec from "../../assets/images/roots-scooters2.jpg";
import { Link } from "react-router-dom";
import keyboardImg from "../../assets/images/Mr-D-strap.webp";
import deleveryImg from "../../assets/images/takealot_delivery_colour.webp";

const Charity = () => {
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
            <h1 className="text-5xl font-bold mb-4">OUR CHARITY</h1>
            <p className="text-xs">
              Together with our shoppers, we strive to make a difference in the
              lives of those in need by supporting Beautiful Gate South Africa.
            </p>
          </div>
          <div className="">
            <img
              src="https://media.takealot.com/covers_blog/Our-Charity-Strap.png?_=1685969305"
              alt="Who We Are"
              className="h-56 shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mx-20">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-5 mt-10">
            <div>
              <div className="float-left">
                <h2 className="font-semibold text-lg">More About Them</h2>
              </div>
              <div className="w- ps-36 mt-[10px]">
                <div className="border border-slate-400 opacity-30"></div>
                <div className="border border-slate-400 opacity-30 mt-1"></div>
              </div>
              <br />
              <div className="text-xs">
                <p className="text-black">
                  <Link className="text-primary">
                    Beautiful Gate South Africa
                  </Link>{" "}
                  is an interdenominational Christian organisation providing
                  care and support to vulnerable children and families. We
                  believe that the best place for each child is within a family,
                  and that the best way to support families is to enable their
                  community to provide support.
                </p>{" "}
                <br />
                <p className="text-slate-500">
                  In South Africa, our community based ministry is situated on
                  the outskirts of Cape Town, in the informal area of Lower
                  Crossroads. Here we aim to restore the capacity of the
                  community and of families to care for their children or, where
                  this is not possible, to find alternative families
                </p>{" "}
                <br />
                <p>
                  In this regard Beautiful Gate has emerged as a trustworthy
                  partner to the local community and to other NGO’s as well as
                  government in addressing issues of HIV/AIDS and its impact on
                  children, families and the community.
                </p>{" "}
                <br />
                <p>
                  across the country, allowing shoppers to collect orders at
                  their convenience. Today, the Takealot Delivery Team has over
                  90 branches nationwide and over 15,000 drivers. With a focus
                  on cutting-edge technology, the Takealot Delivery Team offers
                  an uncompromising level of service to both customers and
                  suppliers.
                </p>{" "}
                <br />
                <p>
                  We are a registered not for profit organisation in South
                  Africa, 005086 NPO and a public benefits organisation, PBO No.
                  130002944.
                </p>
                <p>
                  <span className="text-slate-500">
                    Beautiful Gate South Africa
                  </span>{" "}
                  is a registered not for profit organisation providing care and
                  support to vulnerable children and families. They believe that
                  the best place for each child is within a family, and that the
                  best way to support families is to enable their community to
                  provide support.
                </p>
                <p className="text-slate-500">
                  takealot.com now offers you the option to donate to Beautiful
                  Gate South Africa together with your purchase. All donations
                  received go directly to Beautiful Gate.
                </p>
                <p>Your donation makes a difference!</p>
                <img
                  src="https://media.takealot.com/covers_blog/Donate_link.gif?_=1685969305"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="float-left">
                <h2 className="font-semibold text-lg">Our Location</h2>
              </div>
              <div className="w- ps-36 mt-[10px]">
                <div className="border border-slate-400 opacity-30"></div>
                <div className="border border-slate-400 opacity-30 mt-1"></div>
              </div>
              <br />
              <div>
                <img
                  src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
                  alt=""
                />
                <div className="mt-5">
                <p>Tel: +27 21 370 2500</p>
                <p>Fax: +27 21 374 8237</p>
                <p>Email:
                  support@beautifulgate.org</p>
                  <p>73 Stock Road, Lower Crossroads,
                  Philippi East 7755 Western Cape, South Africa</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-5 mt-10">
            <div>
              <div className="float-left">
                <h2 className="font-semibold text-lg">Projects</h2>
              </div>
              <div className="w- ps-36 mt-[10px]">
                <div className="border border-slate-400 opacity-30"></div>
                <div className="border border-slate-400 opacity-30 mt-1"></div>
              </div>
              <br />
              <div className="text-xs">
                <p><span className="text-slate-600">Community Support</span> - This concentrates on all the activities that encompass family support. It includes:</p> <br />
                <p><span className="text-slate-600">Paediatric HIV clinic</span> Beautiful Gate works in partnership with the local Provincial clinic as well as other partners to provide a paediatric HIV clinic service to the families and children of the Crossroads area.</p> <br />
                <p><span className="text-slate-600">Children’s Home</span>– Where families are unable to stay together, we provide up to 35 safe places for children needing a safe and loving home before being returned to their family or being fostered. Psycho-social and spiritual support is provided for the children.</p> <br />
                <p><span className="text-slate-600">Family Re-unification</span>– Services ensure that families are located and re-connected to their children. The parents or extended family is then supported to be re-unified with the child. Foster care placement is also done.</p> <br />
                <p><span className="text-slate-600">Activity Centre</span> – The activity centre plays a critical role in child development especially as most of our children require special help including remedial teaching. A team of Child Development Workers help children to grow mentally, spiritually and intellectually, with various activities. Some of the activities include reading & writing, craft and creative work, games and lifeskills, singing and dance.</p> <br />
                <p><span className="text-slate-600">Holiday Clubs</span>  – During the holidays we run fun programmes to ensure children get lots of exercise, enjoy their holiday and learn some life-skills along the way..</p> <br />
                <img
                  src="https://media.takealot.com/covers_blog/Donate_link.gif?_=1685969305"
                  alt=""
                />
                
              </div>
            </div>
            <div>
              <div className="float-left">
                <h2 className="font-semibold text-lg">Inspiration</h2>
              </div>
              <div className="w- ps-36 mt-[10px]">
                <div className="border border-slate-400 opacity-30"></div>
                <div className="border border-slate-400 opacity-30 mt-1"></div>
              </div>
              <br />
              <div>
                
              <iframe width="560" height="315" src="https://www.youtube.com/embed/dXUSAHTazxI?si=K8Ejf1EBn8OmO_x1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
