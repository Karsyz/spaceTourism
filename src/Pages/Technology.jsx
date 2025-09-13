import { useState } from "react";

const techData = {
  launchVehicle: {
    num: "1",
    name: "Launch Vehicle",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch.",
    imgLand: "/assets/technology/image-launch-vehicle-landscape.jpg",
    imgPort: "/assets/technology/image-launch-vehicle-portrait.jpg",
    imgAlt: "Launch Vehicle",
  },
  spacePort: {
    num: "2",
    name: "Space Port",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imgLand: "/assets/technology/image-spaceport-landscape.jpg",
    imgPort: "/assets/technology/image-spaceport-portrait.jpg",
    imgAlt: "Space Port",
  },
  spaceCapsule: {
    num: "3",
    name: "Space Capsule",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imgLand: "/assets/technology/image-space-capsule-landscape.jpg",
    imgPort: "/assets/technology/image-space-capsule-portrait.jpg",
    imgAlt: "Space Capsule",
  },
};

const Technology = () => {
  const [techType, setTechType] = useState("launchVehicle");
  return (
    <div className="flex flex-col justify-start items-center grow mt-20 md:mt-32 lg:mt-0">
      <h4 className="lg:hidden self-center md:self-start lg:self-auto text-std-c3 font-barlowCondensed text-base md:text-2xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] pb-8 lg:pb-0 md:pb-[60px] md:ml-[38.5px] lg:ml-0 leading-8 whitespace-nowrap">
        <span className="text-std-c3/25 font-bold mr-[18px] md:mr-[19px]">
          03
        </span>
        SPACE LAUNCH 101...
      </h4>

      <div className="flex flex-col-reverse grow md:flex-col lg:flex-row lg:justify-center items-center lg:items-stretch gap-[26px] md:gap-0 lg:gap-[20px] w-full max-w-[1440px] md:mt-0 md:px-[38.5px] lg:px-0 lg:mt-52">
        {/* left */}
        <div className="flex flex-col justify-between lg:min-w-[620px] lg:pb-24">
          <h4 className="hidden lg:block text-std-c3 font-barlowCondensed text-base text-[28px] tracking-[4.72px] leading-8 whitespace-nowrap ">
            <span className="text-std-c3/25 font-bold mr-[18px] md:mr-[19px]">
              03
            </span>
            SPACE LAUNCH 101...
          </h4>
          <div className="text-center font-belle ">
            <h2 className="lg:text-left text-std-c3/50 text-base md:text-2xl lg:text-[32px] sm:pb-8 md:pb-2 lg:pb-[15px] whitespace-nowrap">
              THE TERMNIOLOGY...
            </h2>

            <h1 className="text-2xl md:text-[40px] sm:leading-[64px] lg:text-left text-std-c3 mb-4 md:mb-2 lg:mb-[27px]">
              {techData[techType].name.toUpperCase()}
            </h1>

            <p className="font-barlow text-[0.9375rem] md:text-[1rem] w-[327px] md:w-[458px] lg:w-[445px]  text-std-c2 leading-[1.5625rem] md:leading-7 lg:leading-8 font-light text-center lg:text-left mb-[32px] md:mb-[40px]">
              {techData[techType].desc}
            </p>
          </div>

          <ul className="order-first md:order-last w-full flex flex-row justify-center lg:justify-start gap-4 lg:gap-6 mb-[37px] md:mb-[40px] lg:mb-0">
            {Object.keys(techData).map((el, ind) => {
              return (
                <li
                  key={ind}
                  className={`h-[40px] w-[40px] lg:h-[15px] lg:w-[15px] rounded-full cursor-pointer text-black  hover:bg-std-c3/50 ${techType === el ? "bg-std-c3" : "bg-std-c3/[0.17]"}`}
                  onClick={() => setTechType(el)}
                >{el.num}</li>
              );
            })}
          </ul>
        </div>

        {/* right */}
        <div className="flex flex-col items-center lg:items-start lg:min-w-[575px]">
          <img
            src={techData[techType].imgSrc}
            alt={`Picture of ${techData[techType].imgAlt}`}
            className="h-[223px] md:h-[532px] lg:h-full lg:w-auto"
          />
          {/* horizontal line */}
          <div className="block md:hidden lg:hidden border-[1px] border-b border-std-c3/25 min-w-[327px] md:max-w-[573px] lg:max-w-[445px] w-full z-30" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
