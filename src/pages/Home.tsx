import { useState } from "react";

const Home = () => {
  return (
    <div className="bg-black min-h-screen box-center flex-col gap-8">
      {aMenus.map((sMenu, nIndex) => (
        <Menu sText={sMenu} bOdd={!(nIndex % 2)} />
      ))}
    </div>
  );
};

const aMenus = ["HOME", "PROJECTS", "CONTENT", "CONTACT"];

const Menu = ({ sText, bOdd }: { sText: string; bOdd?: boolean }) => {
  const [bHover, setBHover] = useState(false);

  const sBoxCSS = "absolute top-0 left-0 w-full h-full";
  const sBox1CSS = "z-10";
  const sBox1Anim = bHover ? "rotate-0 bg-white" : "rotate-12 bg-red-400";
  const sBox2CSS = "bg-red-700 skew-x-12 hover:";
  const sBox2Anim = bHover ? "rotate-12" : "";

  const sTextAnim = bHover ? "" : "text-white";

  return (
    <div
      className="relative w-[100px] h-[50px] box-center"
      onMouseOver={() => setBHover(true)}
      onMouseOut={() => setBHover(false)}
    >
      <p className={`relative z-20 drop-shadow-md text-xl ${sTextAnim}`}>
        {sText}
      </p>

      <div className={`absolute inset-0 ${bOdd ? "rotate-180" : ""}`}>
        {/* box */}
        <div className={`${sBoxCSS} ${sBox1CSS} ${sBox1Anim}`} />

        {/* parallelogram */}
        <div className={`${sBoxCSS} ${sBox2CSS} ${sBox2Anim}`} />
      </div>
    </div>
  );
};

export default Home;
