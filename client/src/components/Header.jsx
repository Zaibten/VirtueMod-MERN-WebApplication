import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const uname = localStorage.getItem("username");

    if (token && email && uname) {
      setIsLoggedIn(true);
      setUsername(uname);
    }
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <a
          className="block w-[12rem] xl:mr-8"
          href="#hero"
          style={{
            paddingTop: "2px",
            paddingBottom: "2px",
            borderRadius: "9999px",
            overflow: "hidden",
            display: "inline-block",
            height: "100px",
          }}
        >
          <img
            src={brainwave}
            alt="Brainwave"
            style={{
              height: "100%",
              width: "auto",
              borderRadius: "9999px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

    



 {/* Nav Block */}
<nav
  className={`${
    openNavigation ? "flex" : "hidden"
  } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
>
  <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
    {navigation.map((item) => (
      <a
        key={item.id}
        href={item.url}
        onClick={handleClick}
        className={`block relative font-code uppercase text-n-1 transition-colors hover:text-color-1 ${
          item.onlyMobile ? "lg:hidden" : ""
        } px-4 py-3 lg:mx-3 lg:text-sm lg:font-semibold ${
          item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/80"
        } lg:leading-6 lg:hover:text-n-1`}
      >
        {item.title}
      </a>
    ))}

    {/* Logout Button in mobile menu only */}
    {isLoggedIn && (
      <Button
        className="lg:hidden mt-4"
        onClick={() => {
          if (window.confirm("Are you sure you want to logout?")) {
            handleLogout();
          }
        }}
      >
        Logout
      </Button>
    )}
  </div>

  <HamburgerMenu />
</nav>

{/* Username or Sign-in Button outside nav */}
<div className="flex items-center gap-3 lg:hidden ml-auto">
  {isLoggedIn ? (
    <div className="flex items-center text-white gap-2">
      <FaUserCircle className="text-2xl" />
      <span className="text-sm font-semibold">{username}</span>
    </div>
  ) : (
    <Button className="text-sm" href="/register">
      Sign in
    </Button>
  )}

  {/* Mobile Menu Toggle Button */}
  <Button className="ml-2" px="px-3" onClick={toggleNavigation}>
    <MenuSvg openNavigation={openNavigation} />
  </Button>
</div>

      </div>
    </div>
  );
};

export default Header;
