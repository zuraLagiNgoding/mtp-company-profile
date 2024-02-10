import React from "react";
import Logo from "../assets/Logo MTP + text.png";
import { nav } from "../constants";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [navState, setNavState] = React.useState(0);
  const [isHome, setIsHome] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavState(1);
    } else {
      setNavState(0);
    }
  };

  React.useEffect(() => {
    if (location.pathname !== "/") {
      setIsHome(1);
    } else {
      setIsHome(0);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={clsx(
        "transition-all duration-100 absolute w-full flex justify-center items-center text-white shadow-none py-5 md:px-16 px-10 z-10",
        navState == 1 && "!fixed bg-white !text-primary !shadow-lg !py-9",
        isHome == 1 && "!text-primary bg-white"
      )}
    >
      <div className="w-full">
        <nav className="flex justify-between items-center">
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="mtp"
            className="w-24 xl:w-40 cursor-pointer"
          />
          <div>
            <ul className="list-none sm:flex hidden items-center gap-4 lg:gap-10 md:pr-12">
              {isHome == 1 ? (
                <div onClick={() => navigate("..")} className="flex items-center gap-4 cursor-pointer">
                  <ArrowLeftIcon className="w-6" />
                  Back
                </div>
              ) : (
                <>
                  {nav.map((nav, index) => (
                    <li
                      key={nav.id}
                      className="transition-all text-base lg:text-lg border-b-2 border-b-transparent hover:border-b-secondary hover:scale-105"
                    >
                      <Link smooth to={`/#${nav.id}`}>{nav.title}</Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
