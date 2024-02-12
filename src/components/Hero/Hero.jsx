// eslint-disable-next-line no-unused-vars
import React from "react";
import Image1 from "../../assets/hero/men.png";
import Image2 from "../../assets/hero/women.png";
import Image3 from "../../assets/hero/sale.png";
import Image4 from "../../assets/hero/insta.png";
import Image5 from "../../assets/hero/shopping.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Revamp your wardrobe with our exclusive men's collection! Enjoy up to 50% off on all your favorite styles. From timeless classics to contemporary trends, discover the perfect blend of comfort and style that suits your personality. Elevate your look today!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Unleash your style with our stunning women's wear collection! Enjoy a fabulous 30% off on all the latest fashion trends. Whether you're looking for casual chic or elegant evening wear, we have something for every occasion. Explore our diverse range and embrace your unique fashion statement!",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Don't miss out on our biggest sale yet! Enjoy jaw-dropping discounts of up to 70% off on all products storewide. From fashion essentials to home decor and beyond, indulge in unbeatable savings on everything you love. Shop now and experience luxury for less!",
  },
  {
    id: 4,
    img: Image4,
    title: "Instagram Shop",
    description:
      "🛍️ Explore the latest trends right from your feed! Shop directly from our Instagram page and enjoy exclusive offers. Discover curated collections, personalized recommendations, and effortless shopping at your fingertips. Elevate your style with just a tap!",
  },
  {
    id: 5,
    img: Image5,
    title: "Valentine's Special: Buy One Get One Free!",
    description:
      "Celebrate love with our exclusive Valentine's Special offer! Buy one item and get another one absolutely free! From romantic dinner dates to cozy evenings at home, find the perfect outfits for you and your loved one. Don't miss out on this opportunity to make this Valentine's Day unforgettable!",
  },
];

// eslint-disable-next-line react/prop-types
const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
