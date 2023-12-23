import { useState } from "react";

const SidebarV2 = () => {
  return (
    <div className="flex flex-col gap-8">
      {aMenus.map((sMenu, nIndex) => (
        <Menu sText={sMenu} bOdd={!(nIndex % 2)} nIndex={nIndex} />
      ))}
    </div>
  );
};

const aMenus = ["HOME", "PROJECTS", "CONTENT", "CONTACT"];

const Menu = ({
  sText,
  bOdd,
  nIndex,
}: {
  sText: string;
  bOdd?: boolean;
  nIndex: number;
}) => {
  const [bHover, setBHover] = useState(false);

  const sBoxCSS = "absolute top-0 left-0 w-full h-full cursor-pointer";
  const sBox1CSS = "z-10";
  const sBox1Anim = !bHover
    ? "-rotate-12 bg-white"
    : "rotate-12 bg-black border-2 border-white";
  const sBox2CSS = `bg-red-700 ${bOdd ? "skew-x-12" : ""}`;
  const sBox2Anim = !bHover ? "rotate-12" : "";

  const sTextCSS = "relative z-20 drop-shadow-md text-xl flex";
  const sTextAnim = !bHover ? "" : "text-white";
  const sRotateCSS = !bHover && bOdd ? "rotate-6" : "-rotate-6";
  const sLetterCSS = (nIndex2: number) =>
    nIndex2 === nIndex + 1 ? `bg-red-700 ${sRotateCSS} text-white` : "";

  return (
    <div
      className="relative w-[100px] h-[50px] box-center"
      onMouseOver={() => setBHover(true)}
      onMouseOut={() => setBHover(false)}
    >
      <div className={`${sTextCSS} ${sTextAnim}`}>
        {sText.split("").map((sLetter, nIndex2) => (
          <div key={`letter-${sLetter}`} className={sLetterCSS(nIndex2)}>
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

export default SidebarV2;
