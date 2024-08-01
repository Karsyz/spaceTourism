import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="flex flex-col justify-end items-center w-full">
      <div className="flex justify-between px-[165px] pb-[131px] w-full max-w-[1440px]">
        <div className="flex flex-col gap-6 self-end">
          <span className="text-std-c2 font-barlowCondensed text-3xl tracking-[4.72px]">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="font-belle text-[150px] leading-[172px] text-std-c3">
            SPACE
          </h1>
          <p className="font-barlow text-lg w-[444px] text-std-c2 leading-8 font-light">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to={"/destination"}>
          <div className="bg-transparent hover:bg-white/5 hover:backdrop-blur-lg rounded-full w-[450px] h-[450px] font-belle tracking-[2px] text-[2rem] flex justify-center items-center translate-y-[88px] ease duration-150">
            <div className="bg-std-c3 rounded-full w-[274px] h-[274px] font-belle tracking-[2px] text-[2rem] flex justify-center items-center">
              EXPLORE
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
