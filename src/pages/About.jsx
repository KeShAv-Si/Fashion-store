import React from "react";
import Titles from "../components/Titles";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Titles text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-centergap-6 md:w-2/4 text-gray-600">
          <p>
            UrbanZila was born from a passion for contemporary fashion and a vision to make premium urban wear accessible to everyone. We believe that style is a form of self-expression, and everyone deserves to look and feel their best.
          </p>
          <br />
          <p>
            Since our inception, we have been committed to curating a diverse collection of clothing and accessories that blend modern aesthetics with timeless appeal. From street style to sophisticated elegance, UrbanZila brings you fashion that resonates with the urban lifestyle.
          </p>
          <br />
          <b className="text-gray-800">Our Mission</b>

          <p>
            Our mission is to empower individuals through fashion by providing high-quality, trendy, and affordable clothing options. We strive to create a seamless shopping experience while promoting sustainable practices and ethical sourcing in the fashion industry.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Titles text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px16 py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Every product at UrbanZila undergoes rigorous quality checks to ensure you receive only the finest materials and craftsmanship. We partner with trusted manufacturers who share our commitment to excellence, delivering fashion that lasts.
          </p>
        </div>
        <div className="border px-10 md:px16 py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shop from the comfort of your home with our user-friendly platform. We offer easy navigation, secure payment options, and fast delivery services to ensure your shopping experience is hassle-free and enjoyable from start to finish.
          </p>
        </div>
        <div className="border px-10 md:px16 py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated customer support team is always ready to assist you with any queries or concerns. We prioritize your satisfaction and work tirelessly to provide personalized service that exceeds your expectations at every touchpoint.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
