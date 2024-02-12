// eslint-disable-next-line no-unused-vars
import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Rappack
            </h1>
            <p>
              fast fashion and embrace conscious style with Rappack. We craft
              timeless clothing using eco-friendly materials and ethical
              production practices.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Policies
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/faq">FAQ</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/terms">Terms & Conditions</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/return">Return Policy</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/ankitkumaran3">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009360768917">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/ankit-kumar-nayak-2591171b5/">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Bangalore, Karnataka</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 9741231242</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
