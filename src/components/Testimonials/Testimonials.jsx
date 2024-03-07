// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Uttam C",
    text: "Wow! I was blown away by Rappack. It's not just good, it's exceptional! The GUI and the experience was incredibly easy to use. This project is truly impressive and I can't wait to see what he do next!",
    img: "https://media.licdn.com/dms/image/D5603AQEp7qsQfJAw1g/profile-displayphoto-shrink_800_800/0/1682531842739?e=2147483647&v=beta&t=5G2EdhHSBbSjfwDUjvlHAwjMhn6qeuCAqdCxHR0YJao",
  },
  {
    id: 2,
    name: "Niranjan Boggula",
    text: "Rappack has been a game-changer for me! It make the experience so allegiant and sirfing the website is so much easier. I loved using it and it's clear a lot of thought and effort went into its creation. Thank you for sharing this amazing project with the world!",
    img: "https://media.licdn.com/dms/image/D5603AQHZKngcuwOBjw/profile-displayphoto-shrink_800_800/0/1692854621147?e=1712793600&v=beta&t=C_VyGDpySH-o9i9YiDW4dozrKLdkHEfiXSykiymQm90",
  },
  {
    id: 3,
    name: "Aditya Mawalkar",
    text: "I have to admit, I wasn't expecting much when I first tried Rappack. But I was so wrong! It's intuitive, engaging, and genuinely useful. It feels like something I was missing in my life, and I can't imagine going back now. Thank you for creating something so wonderful!",
    img: "https://media.licdn.com/dms/image/D5603AQET8x9b3tAglA/profile-displayphoto-shrink_800_800/0/1707126042994?e=1712793600&v=beta&t=UW-jxoIKPR77GfwbDHL9Ew3NBw7QN7u4CNg69UiVYqI",
  },
  {
    id: 4,
    name: "Asif Shaik",
    text: "Dude, I swear I almost burst with pride when I saw your project! It's seriously next-level amazing. Not only is the concept killer, but the execution is flawless. Remember all those late nights we spent brainstorming? Totally worth it! You should see the look on people's faces when I tell them about it. You're gonna be huge!",
    img: "https://media.licdn.com/dms/image/D5603AQEkcw-dH7bG4Q/profile-displayphoto-shrink_400_400/0/1708839320999?e=1715212800&v=beta&t=4kyBaiYhAgjGcpyzxGDkFLj-uGsWLoFjVLWmFAPb7a8",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Some genuine costumer reviews
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
