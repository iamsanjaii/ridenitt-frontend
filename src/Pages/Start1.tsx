import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Start1: React.FC = () => {
  return (
    <div className="gradient-background grid place-items-center h-screen p-8">
      <div className="max-w-sm flex flex-col gap-8">
        {/* Centered Image */}
        <img width={300} height={300} src="/Images/start-image-1.png" alt="Trusted Users" className="max-w-[90%] md:max-w-[70%]" />

        <div>
          {/* Left-Aligned Text Below Image */}
          <div className="text-left">
            <h1 className="text-black font-bold leading-snug"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}> {/* Reduced for large screens */}
              Trusted <br />
              by <br />
              <span className="text-[#008955]">NITT students</span> for <br />
              their daily <br />
              commute!
            </h1>
          </div>

          {/* Left-Aligned Arrow Button */}
          <div className="pl-1 relative mt-6 flex justify-start w-fit">
            <div className="p-1 md:p-2 w-20 h-20 bg-[#B9E5D1] rounded-full flex items-center justify-center">
              <Link
                className="w-12 h-12 bg-[#008955] rounded-full flex items-center justify-center cursor-pointer"
                to="/start2"
              >
                <FiArrowRight className="text-white text-2xl sm:text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start1;
