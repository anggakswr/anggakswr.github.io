interface IMementosCircleProp {
  nMaxWidth?: number;
  nInitWidth?: number;
}

const MementosCircle = ({
  nMaxWidth = 1300,
  nInitWidth = 160,
}: IMementosCircleProp) => {
  let nCircles = 1;
  let nWidth = nInitWidth;

  while (nWidth < nMaxWidth) {
    nCircles += 1;
    nWidth += 80;
  }

  const aCircles = [...Array(nCircles).keys()];
  const sCircleCSS = "rounded-full absolute inset-x-0 mx-auto";
  const sColor = (nNumber: number) => (nNumber % 2 ? "bg-black" : "bg-red-700");
  const nSize = (nNumber: number) => nInitWidth + nNumber * nInitWidth;
  const nBottom = (nNumber: number) => (nNumber + 1) * 32;

  return (
    <>
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
    </>
  );
};

export default MementosCircle;
