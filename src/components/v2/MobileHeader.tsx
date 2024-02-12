import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "./sidebar/Menu";
import aMenus from "../../helpers/menus";

const MobileHeader = () => {
  // local state
  const [bHamburger, setBHamburger] = useState(false);
  const sCSSLinks = bHamburger ? "top-[73px] bottom-0" : "-top-96";

  // router
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  useEffect(() => {
    setBHamburger(false);
  }, [pathname]);

  return (
    <>
      <nav className="bg-black md:hidden fixed z-20 inset-x-0 top-0 shadow-sm p-4 box-between">
        {/* img */}
        <div onClick={() => navigate("/")} className="relative cursor-pointer">
          <div className="absolute inset-0 bg-red-700 -rotate-6" />

          <div
            className="w-10 h-10 bg-center bg-cover rotate-6"
            style={{ backgroundImage: "url(/img/profile.jpg)" }}
          />
        </div>

        {/* hamburger */}
        <button
          onClick={() => setBHamburger(!bHamburger)}
          className={`p-1 ${
            bHamburger ? "" : "flex items-end justify-center flex-col gap-2"
          }`}
        >
          <div
            className={`h-px bg-white w-8 ${bHamburger ? "-rotate-45" : ""}`}
          />

          <div
            className={`h-px bg-white ${bHamburger ? "w-8 rotate-45" : "w-6"}`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden bg-black fixed z-20 inset-x-0 p-4 ${sCSSLinks} flex items-center !pt-8 gap-8 flex-col`}
      >
        {aMenus.map((menu, nIndex) => (
          <Menu
            key={`menu-${nIndex}`}
            sText={menu.text}
            bOdd={!(nIndex % 2)}
            nIndex={nIndex}
            link={menu.link}
          />
        ))}
      </div>
    </>
  );
};

export default MobileHeader;
