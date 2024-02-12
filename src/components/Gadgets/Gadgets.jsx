// eslint-disable-next-line no-unused-vars
import React from "react";
import GadgetImage1 from "../../assets/gadgets/gadget1.png";
import GadgetImage2 from "../../assets/gadgets/gadget2.png";
import GadgetImage3 from "../../assets/gadgets/gadget3.png";
import GadgetImage4 from "../../assets/gadgets/gadget4.png";
import GadgetImage5 from "../../assets/gadgets/gadget5.png";
import { FaStar } from "react-icons/fa";

const GadgetData = [
  {
    id: 1,
    img: GadgetImage1,
    title: "Airpods",
    rating: 4.8,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: GadgetImage2,
    title: "Bluetooth Headset",
    rating: 4.5,
    color: "Pink",
    aosDelay: "200",
  },
  {
    id: 3,
    img: GadgetImage3,
    title: "Wired Earphone",
    rating: 4.7,
    color: "Black",
    aosDelay: "400",
  },
  {
    id: 4,
    img: GadgetImage4,
    title: "Wireless Neckband",
    rating: 4.4,
    color: "Blue",
    aosDelay: "600",
  },
  {
    id: 5,
    img: GadgetImage5,
    title: "SmartWatch",
    rating: 4.6,
    color: "Grey",
    aosDelay: "800",
  },
];

const Gadgets = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Gadgets for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Gadgets
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore our latest gadgets that bring innovation to your fingertips.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {GadgetData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Gadgets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
