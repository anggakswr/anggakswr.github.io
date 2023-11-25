import { useEffect, useState } from "react";
import { Links } from "./Sidebar";
import { useLocation } from "react-router-dom";

const MobileHeader = () => {
  // local state
  const [bHamburger, setBHamburger] = useState(false);
  const sCSSLinks = bHamburger ? "top-[73px] bottom-0" : "-top-96";

  // router
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setBHamburger(false);
  }, [pathname]);

  return (
    <>
      <nav className="md:hidden fixed z-20 inset-x-0 top-0 shadow-sm p-4 box-between bg-white">
        {/* img */}
        <div
          className="w-10 h-10 rounded-full shadow bg-center bg-cover"
          style={{ backgroundImage: "url(/img/profile.jpg)" }}
        />

        {/* hamburger */}
        <button
          onClick={() => setBHamburger(!bHamburger)}
          className={`p-1 ${
            bHamburger ? "" : "flex items-end justify-center flex-col gap-2"
          }`}
        >
          <div
            className={`h-px bg-black w-8 ${bHamburger ? "-rotate-45" : ""}`}
          />

          <div
            className={`h-px bg-black ${bHamburger ? "w-8 rotate-45" : "w-6"}`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden bg-white fixed z-20 inset-x-0 p-4 ${sCSSLinks}`}
      >
        <Links />
      </div>
    </>
  );
};

export default MobileHeader;
