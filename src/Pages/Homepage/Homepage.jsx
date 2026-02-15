import React from "react";
import Banner from "../../Components/Banner/Banner";
import ConnectWithUs from "../../Components/ConnectWithUs/ConnectWithUs";
import FeaturedInstructor from "../../Components/FeaturedInstructor/FeaturedInstructor";
import TuitionPost from "../../Components/TuitionPost/TuitionPost";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Homepage = () => {
  return (
    <div className="space-y-15">
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <TuitionPost></TuitionPost>
      <FeaturedInstructor></FeaturedInstructor>
      <ConnectWithUs></ConnectWithUs>
    </div>
  );
};

export default Homepage;
