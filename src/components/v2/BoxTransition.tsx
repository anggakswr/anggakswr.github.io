import { useState } from "react";

const BoxTransition = () => {
  const [sToggle, setSToggle] = useState<"TOP" | "BOTTOM">("TOP");

  const sBox = "w-96 h-48 bg-white fixed z-40 rotate-45";

  const sBox1 =
    sToggle === "TOP" ? "-top-96 right-40" : "top-0 -right-96 opacity-0";

  const sBox2 =
    sToggle === "TOP" ? "-bottom-96 left-40" : "bottom-0 -left-96 opacity-0";

  const vToggle = () => {
    if (sToggle === "TOP") {
      setSToggle("BOTTOM");
    } else {
      setSToggle("TOP");
    }
  };

  return (
    <>
      <div className={`${sBox} ${sBox1}`} />
      <div className={`${sBox} ${sBox2}`} />

      <div className="fixed inset-0 z-40 box-center" onClick={vToggle}>
        <div className="bg-white w-20 h-20"></div>
      </div>
    </>
  );
};

export default BoxTransition;
