import React from "react";
import imgOne from "../../assets/bussiness-man.webp";
import imgTwo from "../../assets/google-forms.webp";
import imgThree from "../../assets/cv.webp";
import imgFour from "../../assets/check.webp";

const ConnectWithUs = () => {
  return (
    <div className="lg:mb-20 mb-15 bg-white">
      <div className="py-20 w-11/12 mx-auto">
        <div className="text-center ">
          <h1 className="font-bold md:text-4xl text-3xl text-[#2d3748] font-primary ">
            The Ways <span className="text-accent">Students</span> Can Connect
            with Us.
          </h1>
        </div>
        <div className="md:flex gap-8">
          <div className="pt-10 md:w-3/12 text-center flex flex-col items-center space-y-3">
            <div>
              <img
                className="bg-[#eaeced] p-1 rounded-full w-20"
                src={imgOne}
                alt=""
              />
            </div>
            <div>
              <h3 className="font-primary  font-bold text-xl text-[#2d3748]">
                Create Profile
              </h3>
              <p className="font-secondary text-[#757575]">
                Create a profile to get more learning benefits from website.
              </p>
            </div>
          </div>
          <div className="pt-10 md:w-3/12 text-center flex flex-col items-center space-y-3">
            <div>
              <img
                className="bg-[#eaeced] p-1 rounded-full w-20"
                src={imgTwo}
                alt=""
              />
            </div>
            <div>
              <h3 className="font-primary  font-bold text-xl text-[#2d3748]">
                Submit Requirements
              </h3>
              <p className="font-secondary text-[#757575]">
                Fill up expected tutor requirements & submit the request.
              </p>
            </div>
          </div>
          <div className="pt-10 md:w-3/12 text-center flex flex-col items-center space-y-3">
            <div>
              <img
                className="bg-[#eaeced] p-1 rounded-full w-20"
                src={imgThree}
                alt=""
              />
            </div>
            <div>
              <h3 className="font-primary  font-bold text-xl text-[#2d3748]">
                Get Tutors' CV
              </h3>
              <p className="font-secondary text-[#757575]">
                On requirements, we will provide some expert tutors' CVs.
              </p>
            </div>
          </div>
          <div className="pt-10 md:w-3/12 text-center flex flex-col items-center space-y-3">
            <div>
              <img
                className="bg-[#eaeced] p-1 rounded-full w-20"
                src={imgFour}
                alt=""
              />
            </div>
            <div>
              <h3 className="font-primary  font-bold text-xl text-[#2d3748]">
                Select Your Tutor
              </h3>
              <p className="font-secondary text-[#757575]">
                Evaluate tutors & start learning with your favorite one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
