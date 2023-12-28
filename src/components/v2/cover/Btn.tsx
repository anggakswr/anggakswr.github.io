import { useState } from "react";
import { useCover } from "../../../store/cover";

const Btn = () => {
  // global state
  const { vOpen } = useCover((state) => state);

  // local state
  const [bHover, setBHover] = useState(false);

  const sBtnCSS = "absolute w-full h-full";
  const sBox1Anim = bHover ? "bg-red-700" : "bg-black";
  const sBox1CSS = `z-10 border border-white ${sBox1Anim}`;
  const sBox2Anim = bHover ? "rotate-12" : "-rotate-12";
  const sBox2CSS = `bg-white ${sBox2Anim}`;
  const sTextAnim = "text-white";

  return (
    <div
      className="relative w-[100px] h-[50px] box-center cursor-pointer"
      onMouseOver={() => setBHover(true)}
      onMouseOut={() => setBHover(false)}
      onClick={vOpen}
    >
      <div className={`relative z-20 text-2xl ${sTextAnim}`}>Open</div>

      <div className={`${sBtnCSS} ${sBox1CSS}`} />
      <div className={`${sBtnCSS} ${sBox2CSS}`} />
    </div>
  );
};

export default Btn;
