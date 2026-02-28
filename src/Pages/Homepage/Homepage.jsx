import React from "react";
import Banner from "../../Components/Banner/Banner";
import ConnectWithUs from "../../Components/ConnectWithUs/ConnectWithUs";
import FeaturedInstructor from "../../Components/FeaturedInstructor/FeaturedInstructor";
import TuitionPost from "../../Components/TuitionPost/TuitionPost";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import BeATeacher from "../../Components/BeATeacher/BeATeacher";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <BeATeacher></BeATeacher>
      <TuitionPost></TuitionPost>
      <ConnectWithUs></ConnectWithUs>
      <FeaturedInstructor></FeaturedInstructor>
      <WhyChooseUs></WhyChooseUs>
      <DownloadApp></DownloadApp>
      <Testimonials></Testimonials>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Homepage;
