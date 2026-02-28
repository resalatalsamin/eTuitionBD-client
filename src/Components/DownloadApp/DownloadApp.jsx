import React from "react";
import QrScanner from "../../assets/scan.webp";
import phone from "../../assets/app-display-f4843d5a.svg";
import google from "../../assets/google-play-badge-9a0d2241.svg";
import apple from "../../assets/app-store-8e6a3d0e.svg";
import { Link } from "react-router";

const DownloadApp = () => {
  return (
    <div className="w-11/12 mx-auto bg-white rounded-lg shadow-lg lg:mb-20 mb-15">
      <div className="grid md:grid-cols-2">
        <div className="md:-p15 lg:p-15 p-5 space-y-10 order-2 md:order-1">
          <h2 className="text-[#2d3748]  font-primary font-bold text-3xl md:text-4xl ">
            Download <span className="text-accent">App</span>
          </h2>
          <div className="flex items-center gap-5">
            <img
              className="w-20 hidden md:inline-block lg:inline-block"
              src={QrScanner}
              alt=""
            />
            <p className="font-secondary text-md text-[#757575]">
              Now, finding a tutor & tuition job is not hard, it will catch up
              like your pet bird. If you wanna grab one, just download & open
              our app.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="https://play.google.com/store/games?hl=en" target="block">
              <img className="w-60" src={google} alt="" />
            </Link>

            <Link to="https://www.apple.com/app-store/">
              <img className="w-60" src={apple} alt="" />
            </Link>
          </div>
        </div>
        <div className="md:pl-15 p-5 pb-0 pt-10 order-1 md:order-2">
          <img className="" src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
