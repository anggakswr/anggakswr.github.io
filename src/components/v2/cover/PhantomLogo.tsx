const PhantomLogo = () => {
  return (
    <div className="relative z-30 h-full box-center flex-col">
      {/* img */}
      <div className="w-1/3 md:w-[12%] mx-auto py-4">
        <img src="/img/cover/phantom.png" alt="Phantom Logo" />
      </div>

      {/* text */}
      <div className="box-center gap-4">
        {aWords.map((sWord) => (
          <div key={sWord} className="relative z-10 text-white flex gap-x-2">
            {sWord.split("").map((sLetter, nIndex) => (
              <div key={`footer-letter-${nIndex}`} className="relative">
                <span className="relative z-20 text-3xl">{sLetter}</span>

                {/* black bg */}
                <div className="absolute inset-0 box-center w-[200%]">
                  <div
                    className={`${sTextBg(
                      nIndex
                    )} ${sDefaultTextBg} ${sBorderBg(nIndex, sWord)}`}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const sDefaultTextBg = "z-10 border-y-2 border-white p-3";
const sFooterText = "Portfolio Site";
const aWords = sFooterText.split(" ");

const sTextBg = (nIndex: number) => {
  const bEven = nIndex % 2;
  const sCSS1 = `bg-black w-[200%] ${bEven ? "h-[80%]" : "h-[70%]"}`;
  const sCSS2 = bEven ? "rotate-12" : "-rotate-12";

  return `${sCSS1} ${sCSS2}`;
};

const sBorderBg = (nIndex: number, sWord: string) => {
  if (nIndex < 1) {
    return "border-l-2";
  }

  if (nIndex + 1 === sWord.length) {
    return "border-r-2";
  }

  return "";
};

export default PhantomLogo;
