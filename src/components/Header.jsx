import { brainwave } from "../assets/";
import { navigation } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const location = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // to close navigation when clicking on a link
  const handleOpenNavigation = () => {
    if (!openNavigation) return;
    enablePageScroll();

    setOpenNavigation(false);
  };

  return (
    <div
      style={{ border: "10px solid red" }}
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div
        style={{ border: "10px solid blue" }}
        className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"
      >
        <a
          style={{ border: "10px solid green" }}
          className="block w-[12rem] xl:mr-8"
          href="#hero"
        >
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>

        <nav
          style={{ border: "10px solid yellow" }}
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            style={{ border: "10px solid orange" }}
            className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
          >
            {navigation.map((item) => (
              <a
                style={{ border: "10px solid purple" }}
                key={item.id}
                href={item.url}
                onClick={handleOpenNavigation}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === location.hash
                    ? "z-20 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          style={{ border: "10px solid pink" }}
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button
          style={{ border: "10px solid pink" }}
          className="hidden lg:flex"
          px="px-3"
        >
          Sign in
        </Button>

        <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
