import React from "react";
// import Banner from "../../Components/Banner/Banner";
// import ConnectWithUs from "../../Components/ConnectWithUs/ConnectWithUs";
// import FeaturedInstructor from "../../Components/FeaturedInstructor/FeaturedInstructor";
// import TuitionPost from "../../Components/TuitionPost/TuitionPost";
// import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
// import DownloadApp from "../../Components/DownloadApp/DownloadApp";
// import BeATeacher from "../../Components/BeATeacher/BeATeacher";
// import NewsLetter from "../../Components/NewsLetter/NewsLetter";
// import Testimonials from "../../Components/Testimonials/Testimonials";

const Banner = React.lazy(() => import("../../Components/Banner/Banner"));
const TuitionPost = React.lazy(
  () => import("../../Components/TuitionPost/TuitionPost"),
);
const FeaturedInstructor = React.lazy(
  () => import("../../Components/FeaturedInstructor/FeaturedInstructor"),
);
const WhyChooseUs = React.lazy(
  () => import("../../Components/WhyChooseUs/WhyChooseUs"),
);
const Testimonials = React.lazy(
  () => import("../../Components/Testimonials/Testimonials"),
);
const DownloadApp = React.lazy(
  () => import("../../Components/DownloadApp/DownloadApp"),
);
const ConnectWithUs = React.lazy(
  () => import("../../Components/ConnectWithUs/ConnectWithUs"),
);
const BeATeacher = React.lazy(
  () => import("../../Components/BeATeacher/BeATeacher"),
);
const NewsLetter = React.lazy(
  () => import("../../Components/NewsLetter/NewsLetter"),
);

const Homepage = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <Banner></Banner>
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <BeATeacher></BeATeacher>
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <TuitionPost></TuitionPost>
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <ConnectWithUs></ConnectWithUs>
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <FeaturedInstructor></FeaturedInstructor>
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <WhyChooseUs></WhyChooseUs>
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <DownloadApp></DownloadApp>
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <Testimonials></Testimonials>
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-accent"></span>
          </div>
        }
      >
        <NewsLetter></NewsLetter>
      </Suspense>
    </div>
  );
};

export default Homepage;
