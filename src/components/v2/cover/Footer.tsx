const sFooterText = "2023 ALL RIGHT RESERVED. KAMISWARA ANGGA W.";
const aWords = sFooterText.split(" ");

const sFooterTextCSS = (nIndex: number) => {
  const bEven = nIndex % 2;
  const sCSS1 = `bg-black w-[200%] ${bEven ? "h-[80%]" : "h-[70%]"}`;
  const sCSS2 = bEven ? "rotate-12" : "-rotate-12";

  return `${sCSS1} ${sCSS2}`;
};

const Footer = () => {
  return (
    <div className="relative h-1/6 box-center gap-1.5">
      {/* text */}
      <div className="relative z-10 text-white bg-black rotate-12">&copy;</div>

      {aWords.map((sWord) => (
        <div key={sWord} className="relative z-10 text-white flex">
          {sWord.split("").map((sLetter, nIndex) => (
            <div key={`footer-letter-${sLetter}`} className="relative">
              <span className="relative z-20">{sLetter}</span>

              {/* black bg */}
              <div className="absolute inset-0 box-center w-[200%]">
                <div className={`${sFooterTextCSS(nIndex)} z-10`} />
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* red rotated bg */}
      {/* <div className="absolute inset-x-0 -bottom-[70%] w-[200%] h-[200%] -rotate-3 bg-red-700" /> */}
      <div className="absolute inset-x-0 w-full h-full rotate-3 bg-red-700" />
    </div>
  );
};

export default Footer;
