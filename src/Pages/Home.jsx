import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="flex flex-col justify-end items-center w-full mt-4 md:mt-[106px] lg:mt-0">
      
      <div className="flex flex-col items-center lg:flex-row h-full lg:justify-between lg:px-[165px] lg:pb-[131px] w-full lg:max-w-[1440px]">
        
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:self-end">
          <span className="text-std-c2 font-barlowCondensed text-base md:text-2xl lg:text-3xl tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="font-belle text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] lg:leading-[172px] text-std-c3">
            SPACE
          </h1>
          <p className="font-barlow text-[0.9375rem] md:text-lg max-w-[327px] md:max-w-[444px] text-std-c2 leading-[1.5625rem] md:leading-7 lg:leading-8 font-light text-center lg:text-left">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to={"/destination"} className="mt-[81px] md:mt-[156px] lg:mt-0">

          <div className="bg-transparent hover:bg-white/5 hover:backdrop-blur-lg rounded-full w-[220px] h-[220px] lg:w-[450px] lg:h-[450px] font-belle tracking-[2px] text-[2rem] flex justify-center items-center lg:translate-y-[88px] ease duration-150">

            <div className="bg-std-c3 rounded-full w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[274px] lg:h-[274px] font-belle tracking-[1.25px] md:tracking-[2px] leading-[23px] md:leading-[37px] text-xl md:text-[32px] flex justify-center items-center">
              EXPLORE
            </div>

          </div>

        </Link>

      </div>
    </div>
  );
};

export default Home;
