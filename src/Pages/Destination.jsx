import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const destData = {
  moon: {
    title: "MOON",
    desc: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    dist: "384 400 KM",
    travelTime: "3 DAYS",
    imgSrc: "/assets/destination/image-moon.png",
    imgAlt: "the moon",
  },
  mars: {
    title: "MARS",
    desc: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    dist: "225 MIL. KM",
    travelTime: " 9 MONTHS",
    imgSrc: "/assets/destination/image-mars.png",
    imgAlt: "mars",
  },
  europa: {
    title: "EUROPA",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    dist: "628 MIL. KM",
    travelTime: "3 YEARS",
    imgSrc: "/assets/destination/image-europa.png",
    imgAlt: "europa",
  },
  titan: {
    title: "TITAN",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    dist: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    imgSrc: "/assets/destination/image-titan.png",
    imgAlt: "titan",
  },
};

const Destination = () => {
  const [destination, setDestination] = useState("moon");
  // console.log(destData[destination])
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center gap-[157px] w-full max-w-[1440px] pb-[112px]">
        {/* left */}
        <div className="">
          <h4 className="text-std-c3 font-barlowCondensed text-base md:text-2xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] pb-[97px] leading-8 lg:-translate-x-[63.5px]">
            <span className="text-std-c3/25 font-bold mr-7 md:hidden lg:inline">
              01
            </span>
            PICK YOUR DESTINATION
          </h4>

          <img
            src={destData[destination].imgSrc}
            alt={`Picture of ${destData[destination].imgAlt}`}
          />
        </div>

        {/* right */}
        <div className="flex flex-col items-center lg:items-start lg:self-end min-w-[445px]">
          <ul className="w-full h-full z-20 flex flex-col items-start md:flex-row gap-9 mb-[37px]">
            {Object.keys(destData).map((el, ind) => {
              return (
                <li
                  key={ind}
                  className={`text-std-c2 font-barlowCondensed text-base md:text-2xl lg:text-base tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] cursor-pointer h-[34px] border-transparent border-y-0 md:border-y-[3px] md:border-x-0 hover:border-r-[3px] md:hover:border-r-0 md:hover:border-b-[3px] hover:border-r-std-c3/50 md:hover:border-b-std-c3/50 ${
                    destination === destData[el].title.toLowerCase() &&
                    "border-r-std-c3 md:border-b-std-c3 border-r-[3px] md:border-b-[3px]"
                  }`}
                  onClick={() =>
                    setDestination(destData[el].title.toLowerCase())
                  }
                >
                  {destData[el].title}
                </li>
              );
            })}
          </ul>

          <h1 className="font-belle text-[100px] leading-[115px] text-std-c3 mb-[14px]">
            {destData[destination].title}
          </h1>
          <p className="font-barlow text-[0.9375rem] md:text-lg max-w-[327px] md:max-w-[445px] text-std-c2 leading-[1.5625rem] md:leading-7 lg:leading-8 font-light text-center lg:text-left mb-[54px]">
            {destData[destination].desc}
          </p>

          {/* horizontal line */}
          <div className="border-[1px] border-b border-std-c3/25 w-full z-30 block mb-[28px]" />

          <div className="flex gap-[68px]">
            <div className="flex flex-col gap-3">
              <h4 className="text-std-c2 font-barlowCondensed text-[14px] tracking-[2.36px] leading-4">
                AVG. DISTANCE
              </h4>
              <span className="font-belle text-2xl text-std-c3 ">
                {destData[destination].dist}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-std-c2 font-barlowCondensed text-[14px] tracking-[2.36px] leading-4">
                AVG. DISTANCE
              </h4>
              <span className="font-belle text-2xl text-std-c3 ">
                {destData[destination].dist}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
