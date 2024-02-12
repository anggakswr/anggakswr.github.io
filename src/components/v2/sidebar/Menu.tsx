import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IMenuProp {
  sText: string;
  bOdd?: boolean;
  nIndex: number;
  link: string;
}

const Menu = ({ sText, bOdd, nIndex, link }: IMenuProp) => {
  // router
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  // local state
  const [bHover, setBHover] = useState(false);

  // booleans
  const boxActive = pathname === link;
  const isHover = bHover || boxActive;

  // css classes
  const activeCSS = "rotate-3 !bg-black !text-white border-2 border-white";
  const sBoxCSS = "absolute top-0 left-0 w-full h-full";
  const sBox1CSS = "z-10";
  const sBox1Anim = isHover ? "-rotate-3 bg-white" : activeCSS;
  const sBox2CSS = `bg-red-700 ${bOdd ? "skew-x-3" : ""}`;
  const sBox2Anim = isHover ? "rotate-3" : "";
  const sTextCSS = "relative z-20 drop-shadow-md text-xl flex";
  const sTextAnim = isHover ? "" : "text-white";
  const sRotateCSS = isHover && bOdd ? "rotate-6" : "-rotate-6";

  const sLetterCSS = (nIndex2: number) =>
    nIndex2 === nIndex + 1 ? `bg-red-700 ${sRotateCSS} text-white` : "";

  return (
    <div
      onClick={() => navigate(link)}
      className="relative w-[80px] h-[40px] box-center cursor-pointer"
      onMouseOver={() => setBHover(true)}
      onMouseOut={() => setBHover(false)}
    >
      <div className={`${sTextCSS} ${sTextAnim}`}>
        {sText.split("").map((sLetter, nIndex2) => (
          <div
            key={`letter-${sLetter}-${nIndex2}`}
            className={sLetterCSS(nIndex2)}
          >
            {sLetter}
          </div>
        ))}
      </div>

      <div className={`absolute inset-0 ${bOdd ? "rotate-180" : ""}`}>
        {/* box */}
        <div className={`${sBoxCSS} ${sBox1CSS} ${sBox1Anim}`} />

        {/* parallelogram */}
        <div className={`${sBoxCSS} ${sBox2CSS} ${sBox2Anim}`} />
      </div>
    </div>
  );
};

export default Menu;
