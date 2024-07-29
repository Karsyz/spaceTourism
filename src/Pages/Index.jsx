import { Outlet, Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

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

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen">
      <div
        className="w-full h-full z-10 
        lg:bg-[url('/assets/home/background-home-desktop.jpg')] 
        md:bg-[url('/assets/home/background-home-tablet.jpg')] 
        bg-[url('/assets/home/background-home-mobile.jpg')] 
        bg-no-repeat bg-center bg-fixed bg-cover"
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
            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row bg-white/5 backdrop-blur-lg lg:w-[830px] h-[96px] px-12 lg:px-28">

              <img
                  src="/assets/shared/icon-close.svg"
                  alt="site logo"
                  className="sm:hidden absolute top-6 right-6"
                  onClick={() => setMobileMenuOpen(false)}
                />


              <ul className="w-full h-full z-20 flex flex-row gap-9">
                {navItems.map((el) => {
                  return (
                    <Link
                      to={el.url}
                      className=""
                    >
                      <li className="flex flex-col justify-center text-std-c3 text-base font-light font-barlow tracking-[2.75px] h-full hover:border-b-[3px] border-std-c3/50">
                        <div className="">
                          <span className="font-bold mr-2 hidden lg:inline">
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


            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="absolute z-50 top-0 right-0 md:hidden flex flex-col bg-white/5 backdrop-blur-lg h-full w-full max-w-[254px] pt-28 pl-8">
                
                <div className="sm:hidden absolute top-0 right-6 h-[96px] flex flex-col justify-center">
                  <img
                    src="/assets/shared/icon-close.svg"
                    alt="site logo"
                    className=""
                    onClick={() => setMobileMenuOpen(false)}
                  />

                </div>
                
                <ul className="w-full h-full z-50 flex flex-col gap-8">
                  {navItems.map((el) => {
                    return (
                      <Link
                        to={el.url}
                        className=""
                      >
                        <li className="flex flex-col justify-center text-std-c3 text-base font-light font-barlow tracking-[2.7px] h-full hover:border-r-[3px] border-std-c3/50">
                          <div className="">
                            <span className="font-bold mr-2">
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
            )}

            {!mobileMenuOpen && (
              <img
                src="/assets/shared/icon-hamburger.svg"
                alt="site logo"
                className="md:hidden mr-6"
                onClick={() => setMobileMenuOpen(true)}
              />
            )}
          </nav>
        </header>

        <Outlet />
      </div>
    </div>
  );
};

export default Index;
