import React from "react";

const NewsLetter = () => {
  return (
    <div className="lg:w-6/12 w-11/12  mx-auto mb-10">
      {/* Newsletter Section */}
      <form>
        <h6 className="font-semibold text-xl font-primary text-[#2d3748 w-80">
          Subscribe Newsletter
        </h6>
        <fieldset className="md:w-80 w-50 font-secondary">
          <label className="text-[#A9AEB3] ">Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="example@email.com"
              className="input p-5 join-item font-secondary lg:w-100 w-50 h-10 lg:h-12 rounded-l-lg border"
            />
            <button className="btn border-accent border-2 join-item font-primary bg-accent hover:bg-[#222222] hover:border-[#222222] text-white shadow-none h-10 lg:h-12 rounded-r-lg">
              SUBSCRIBE
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default NewsLetter;
