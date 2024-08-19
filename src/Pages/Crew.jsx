import { useState } from "react";

const crewData = {
  commander: {
    name: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imgSrc: "/assets/crew/image-douglas-hurley.png",
    imgAlt: "Douglas Hurley",
  },
  missionSpecialist: {
    name: "Mark Shuttleworth",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imgSrc: "/assets/crew/image-mark-shuttleworth.png",
    imgAlt: "Mark Shuttleworth",
  },
  pilot: {
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    imgSrc: "/assets/crew/image-victor-glover.png",
    imgAlt: "Victor Glover",
  },
  flightEngineer: {
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    imgSrc: "/assets/crew/image-anousheh-ansari.png",
    imgAlt: "Anousheh Ansari",
  },
};

const Crew = () => {
  const [crewMember, setCrewMember] = useState("commander");
  return (
    <div className="flex justify-center lg:px-10">
          <h4 className="self-auto md:self-start lg:self-auto text-std-c3 font-barlowCondensed text-base md:text-2xl lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] pb-8 md:pb-[60px] lg:pb-[154px] leading-8 whitespace-nowrap">
            <span className="text-std-c3/25 font-bold mr-[18px] md:mr-[19px] lg:inline">
              02
            </span>
            MEET YOUR CREW
          </h4>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center lg:items-end gap-[26px] md:gap-0 lg:gap-[20px] w-full max-w-[1440px] md:mt-0 md:px-[38.5px] lg:px-0">
        {/* left */}
        <div className="flex flex-col items-center lg:items-start lg:self-end lg:min-w-[620px]">
          


          <h2 className="text-std-c3/50 font-belle text-base md:text-2xl lg:text-[32px] pb-8 md:pb-[60px] lg:pb-[15px] leading-8 whitespace-nowrap">{crewMember.toUpperCase()}</h2>

          <h1 className="font-belle text-[56px] leading-[64px] text-std-c3 md:mb-[8px] lg:mb-[27px]">
            {crewData[crewMember].name.toUpperCase()}
          </h1>

          <p className="font-barlow text-[0.9375rem] md:text-lg w-[327px] md:w-[458px] lg:w-[445px]  text-std-c2 leading-[1.5625rem] md:leading-7 lg:leading-8 font-light text-center lg:text-left mb-[32px] md:mb-[49px] lg:mb-[120px]">
            {crewData[crewMember].desc}
          </p>

          <ul className="w-full flex flex-row justify-center lg:justify-start gap-4 lg:gap-6 mb-[37px] md:mb-[94px]">
            {Object.keys(crewData).map((el, ind) => {
              return (
                <li
                  key={ind}
                  className={`h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] rounded-full cursor-pointer  hover:bg-std-c3/50 ${crewMember === el ? "bg-std-c3" : "bg-std-c3/[0.17]"}`}
                  onClick={() => setCrewMember(el)  }
                >
                </li>
              );
            })}
          </ul>
        </div>

        {/* right */}
        <div className="flex flex-col items-center lg:items-start lg:min-w-[575px]">
          <img
            src={crewData[crewMember].imgSrc}
            alt={`Picture of ${crewData[crewMember].imgAlt}`}
            className="h-[223px] md:h-[532px] lg:w-auto"
          />
          {/* horizontal line */}
          <div className="block md:hidden lg:hidden border-[1px] border-b border-std-c3/25 max-w-[327px] md:max-w-[573px] lg:max-w-[445px] w-full z-30" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
