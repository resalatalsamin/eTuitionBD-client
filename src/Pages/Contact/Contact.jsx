import React from "react";
import location from "../../assets/Location-big.webp";
import mail from "../../assets/email.webp";
import phone from "../../assets/icons8-phone-96.webp";
import facebook from "../../assets/facebook.webp";
import youtube from "../../assets/youtube.webp";
import x from "../../assets/twitter.webp";
import instagram from "../../assets/instagram.webp";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const position = [23.8103, 90.4125];
  return (
    <div className="w-11/12 mx-auto pt-40 mb-30">
      <div>
        <div className="mb-10">
          <h2 className="font-bold text-3xl md:text-4xl font-primary text-center text-[#2d3748]">
            Contact <span className="text-accent">Us</span>
          </h2>
          <h3 className="font-secondary font-medium text-center text-[#757575] text-2xl">
            You Can Use Either Way To Contact Us.
          </h3>
        </div>
        <div className="md:flex items-center md:justify-center">
          <div className="md:flex-1 bg-[#2d3748]">
            <div className="md:grid grid-cols-2 space-y-5 p-12">
              <div className="text-center flex flex-col items-center space-y-4 mb-15">
                <div className="">
                  <img className="w-15" src={location} alt="" />
                </div>
                <div>
                  <h3 className="text-[#757575] mb-3 font-primary text-2xl">
                    ADDRESS
                  </h3>
                  <p
                    className="text-white
                "
                  >
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="text-center flex flex-col items-center mb-15 space-y-4">
                <div className="">
                  <img className="w-15" src={mail} alt="" />
                </div>
                <div>
                  <h3 className="text-[#757575] mb-3 font-primary text-2xl">
                    MAIL
                  </h3>
                  <p
                    className="text-white
                "
                  >
                    support@any.com
                  </p>
                </div>
              </div>
              <div className="text-center flex flex-col items-center space-y-4">
                <div className="">
                  <img className="w-15" src={phone} alt="" />
                </div>
                <div>
                  <h3 className="text-[#757575] mb-3 font-primary text-2xl">
                    PHONE
                  </h3>
                  <p
                    className="text-white
                "
                  >
                    ( + 000 ) 000 0000 0000
                  </p>
                </div>
              </div>
              <div className="text-center flex flex-col items-center space-y-4">
                <div className=""></div>
                <div>
                  <h3 className="text-[#757575] mb-3 font-primary text-2xl">
                    CONTACT US
                  </h3>
                  <p
                    className="text-white
                "
                  >
                    Contact Us For Quotes Or Join Us.
                  </p>
                  <div className="grid grid-flow-col mt-4">
                    <a>
                      <img className="w-6" src={facebook} alt="Facebook Icon" />
                    </a>
                    <a>
                      <img
                        className="w-6"
                        src={instagram}
                        alt="Instagram Icon"
                      />
                    </a>
                    <a>
                      <img className="w-6" src={x} alt="X Icon" />
                    </a>
                    <a>
                      <img className="w-6" src={youtube} alt="Youtube Icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className=" w-full h-[445px]">
              <MapContainer
                center={position}
                zoom={10}
                scrollWheelZoom={false}
                className="h-[445px]"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup></Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
