import React from "react";
import { Link } from "react-router";
import location from "../../../assets/location-pin.webp";
import message from "../../../assets/email.webp";
import support from "../../../assets/customer-service.webp";
import facebook from "../../../assets/facebook.webp";
import instagram from "../../../assets/instagram.webp";
import x from "../../../assets/twitter.webp";
import youtube from "../../../assets/youtube.webp";
import { Links } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-white text-[#2d3748] md:px-10 px-2 py-8 md:flex justify-between ">
        <aside className="">
          <Link to="/">
            {/* <img className="w-[250px]" src={logo} alt="" /> */}
            <h1 className="font-extrabold text-4xl font-primary">
              <span className="text-[#00b7a6]">e</span>
              <span className="text-[#cb6ce6]">T</span>
              <span className="text-[#38b6ff]">u</span>
              <span className="text-[#7ed957]">i</span>
              <span className="text-[#ff5757]">t</span>
              <span className="text-[#38b6ff]">i</span>
              <span className="text-[#004aad]">o</span>
              <span className="text-[#ffde59]">n</span>
              <span className="text-[#306417]">B</span>
              <span className="text-[#5ce1e6]">D</span>
            </h1>
          </Link>
          <p className="font-secondary text-[#757575]">
            eTuitionBD
            <br />A reliable and quality full tuition platform in Bangladesh.
          </p>

          <div className="mt-5 space-y-3 font-secondary">
            <h6 className="font-semibold text-lg font-primary text-[#2d3748] footer-title">
              Contact Info
            </h6>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={location} alt="location" />
              <p className="text-[#757575] font-medium">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={message} alt="message box" />
              <p className="text-[#757575] font-medium">
                support@etuitionbd.com
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={support} alt="support" />
              <p className=" font-medium text-[#757575]">
                Phone: <span className="font-bold">( + 000 ) 0000 0000</span>
              </p>
            </div>
          </div>
        </aside>
        <nav className="font-secondary">
          <h6 className="footer-title font-primary">Useful Links</h6>
          <p className="link link-hover text-[#757575]">
            <Link to="/tuitions">Tuitions</Link>
          </p>
          <p className="link link-hover text-[#757575]">
            <Link to="/tutors">Tutors</Link>
          </p>
          <Link to="/about" className="link link-hover text-[#757575]">
            About Us
          </Link>
          <Link to="contact" className="link link-hover text-[#757575]">
            Contact Us
          </Link>
        </nav>
        <nav className="font-secondary ">
          <h6 className="footer-title font-primary">Legal</h6>
          <Link
            to="/terms-and-conditions"
            className="link link-hover text-[#757575]"
          >
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="link link-hover text-[#757575]">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover text-[#757575]">
            Cookie policy
          </Link>
        </nav>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {/* Social links here */}
          </div>
        </nav>
        {/* Newsletter Section */}
        {/* <form>
          <h6 className="font-semibold text-lg font-primary text-white">
            Subscribe Newsletter
          </h6>
          <fieldset className="md:w-80 w-50 font-secondary">
            <label className="text-[#A9AEB3] ">Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="example@email.com"
                className="input input-bordered join-item font-secondary"
              />
              <button className="btn border-accent border-2 join-item font-primary bg-accent hover:bg-[#222222] hover:border-[#222222] text-white shadow-none">
                SUBSCRIBE
              </button>
            </div>
          </fieldset>
        </form> */}
        {/* Social Links */}
        <div>
          <nav className="space-y-3 ">
            <h6 className=" font-semibold text-lg font-primary text-[#2d3748] footer-title">
              Social
            </h6>
            <div className="grid grid-flow-col gap-4">
              <Link to="https://www.facebook.com/" target="block">
                <img className="w-6" src={facebook} alt="Facebook Icon" />
              </Link>
              <Link to="https://www.instagram.com/" target="block">
                <img className="w-6" src={instagram} alt="Instagram Icon" />
              </Link>
              <Link to="https://x.com/" target="block">
                <img className="w-6" src={x} alt="X Icon" />
              </Link>
              <Link to="https://www.youtube.com/" target="block">
                <img className="w-6" src={youtube} alt="Youtube Icon" />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
      {/* Copyright */}
      <footer className="footer sm:footer-horizontal footer-center bg-white text-[#757575] p-4 border-gray-300 border-t">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            eTuitionBD
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
