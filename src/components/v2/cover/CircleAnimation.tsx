// import { useEffect, useState } from "react";

const CircleAnimation = () => {
  // const [aCircles, setACircles] = useState([])

  // useEffect(() => {
  // const nMaxWidth = window.innerWidth
  // const aCircles = []

  // }, [])

  const nMaxWidth = 1300;
  let nCircles = 1;
  const nInitWidth = 160;
  let nWidth = nInitWidth;

  while (nWidth < nMaxWidth) {
    nCircles += 1;
    nWidth += 80;
  }

  console.log({ nCircles });

  const aCircles = [...Array(nCircles).keys()];

  const sCircleCSS = "rounded-full absolute inset-x-0 mx-auto";
  const sColor = (nNumber: number) => (nNumber % 2 ? "bg-black" : "bg-red-700");
  const nSize = (nNumber: number) => nInitWidth + nNumber * nInitWidth;
  const nBottom = (nNumber: number) => (nNumber + 1) * 32;

  return (
    <div className="absolute inset-x-0 bottom-0 -top-8 bg-red-700 -rotate-3 overflow-hidden">
      {aCircles.map((nNumber) => (
        <div
          key={`circle-${nNumber}`}
          className={`${sCircleCSS} ${sColor(nNumber)}`}
          style={{
            width: nSize(nNumber),
            height: nSize(nNumber),
            bottom: -nBottom(nNumber),
            zIndex: 999 - nNumber,
          }}
        />
      ))}
    </div>
  );
};

export default CircleAnimation;
