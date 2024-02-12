// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "This timeless button-down shirt is crafted from soft, breathable cotton that moves with you throughout the day. The relaxed fit flatters any figure, while the versatile design seamlessly transitions from work to weekend. Available in a range of classic colors, this shirt is a must-have for any wardrobe.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Unleash your inner rockstar with this electrifying printed tee! Featuring a captivating theme design in vibrant colors, this shirt makes a statement wherever you go. The premium cotton fabric ensures both comfort and style, while the durable print stands up to countless washes. Turn heads and express yourself with this unique piece.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Embrace summer vibes in this ultra-trendy crop top, featuring a bold print that makes a statement. The comfortable material keeps you cool all day long, while the cropped silhouette shows off your midriff with confidence. Pair it with your favorite high-waisted jeans or skirt for a stylish and carefree look.",
  },
];
// eslint-disable-next-line react/prop-types
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Own your style with the shirt, a shirt designed for everyone. Made
            from good material that's are long lasting, this shirt offers unique
            feature and best fit. Whether you're Studen or Work Employee, the
            shirt will keep you feeling and looking your best. Don't miss out,
            grab yours today!
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
