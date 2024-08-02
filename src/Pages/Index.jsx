import { Outlet, Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect } from "react";

const navItems = [
  {
    id: "0",
    text: "home",
    url: "/",
  },
  {
    id: 1,
    text: "destination",
    url: "/destination",
  },
  {
    id: 2,
    text: "crew",
    url: "/crew",
  },
  {
    id: 3,
    text: "technology",
    url: "/technology",
  },
];


const bgImages = {
  '/': "bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]",
  '/destination': "bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]",
  '/crew': "bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]",
  '/technology': "bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]",
}

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [locNorm, setLocNorm] = useState()
  const location = useLocation().pathname;
  
  return (
    <div className="relative w-full h-screen">
      <div
        className={`w-full h-full z-10 bg-no-repeat bg-center bg-fixed bg-cover flex flex-col ${bgImages[location]}`}
      >
        <header className="flex flex-row items-center justify-between lg:justify-start w-full h-[96px] z-50 pl-6 md:pl-10 lg:pt-10 lg:pl-14 bg-transparent">
          <Link
            to="/"
            className="shrink-0"
          >
            <img
              src="/assets/shared/logo.svg"
              alt="site logo"
              className="w-[40px] md:w-[48px]"
            />
          </Link>

          <div className="border-b border-std-c3/25 w-full z-30 translate-x-[64px] hidden lg:block"></div>

          <nav>
            <div
              className={`${mobileMenuOpen ? "" : "hidden"} absolute md:relative z-50 top-0 right-0 md:flex flex-col md:flex-row bg-white/5 backdrop-blur-lg w-full md:w-fit max-w-[254px] md:max-w-none lg:w-[830px] h-full md:h-[96px] pt-28 md:pt-0 pl-8 md:px-12 lg:px-28`}
            >
              <div className="md:hidden absolute top-0 right-6 h-[96px] flex flex-col justify-center">
                <img
                  src="/assets/shared/icon-close.svg"
                  alt="site logo"
                  className="cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>

              <ul className="w-full h-full z-20 flex flex-col md:flex-row gap-9">
                {navItems.map((el, ind) => {
                  return (
                    <Link
                      to={el.url}
                      className=""
                      key={ind}
                    >
                      <li
                        className={`flex flex-col justify-center h-full text-std-c3 text-base font-light font-barlow tracking-[2.75px] border-[3px] border-transparent border-y-0 md:border-y-[3px] md:border-x-0 hover:border-r-[3px] md:hover:border-r-0 md:hover:border-b-[3px] hover:border-r-std-c3/50 md:hover:border-b-std-c3/50 ${location === el.url && "border-r-std-c3 md:border-b-std-c3 border-r-[3px] md:border-b-[3px]"
                        }`}
                      >
                        <div className="">
                          <span className="font-bold mr-2 md:hidden lg:inline">
                            {el.id.toString().padStart(2, "0")}
                          </span>
                          {el.text.toUpperCase()}
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            {!mobileMenuOpen && (
              <img
                src="/assets/shared/icon-hamburger.svg"
                alt="site logo"
                className="md:hidden mr-6 cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              />
            )}
          </nav>
        </header>
        
        <div className="grow flex flex-col lg:justify-end">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Index;
