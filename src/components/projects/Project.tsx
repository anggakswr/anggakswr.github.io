import { BiUpArrowAlt } from "react-icons/bi";

interface IProject {
  sBorder?: string;
  sName: string;
  sLogo: string;
  sDesc: string;
  sDesc2: string;
  sImg: string;
  sImgBg: string;
  sLink?: string;
}

const Project = ({ oProject }: { oProject: IProject }) => {
  const { sName, sLogo, sDesc, sDesc2, sImg, sImgBg, sLink } = oProject;

  const borderRed = "border-t-2 border-b-4 border-x-8 border-red-700";
  // const borderWhite = "border-t-2 border-b-4 border-x-8 border-white";
  // const borderBlack = "border-t-2 border-b-4 border-x-8 border-black";

  return (
    <div className={`relative overflow-hidden p-4 mb-4`}>
      {/* content */}
      <div className="relative z-10">
        {/* title */}
        <div
          className={`${borderRed} relative z-10 inline-block bg-white px-4 -rotate-3`}
        >
          {/* decoration */}
          <div className="absolute inset-0 pattern1" />

          <div className="relative z-10 box-equal gap-x-4">
            {/* img */}
            <div className="w-12">
              <img src={sLogo} alt={sName} className="bg-white" />
            </div>

            {/* content (text) */}
            <h2 className="text-xl text-black">{sName}</h2>
          </div>
        </div>

        {/* desc 1 */}
        <div className={`${borderRed} relative bg-white p-4 rotate-1`}>
          {/* decoration */}
          <div className="absolute inset-0 pattern1" />

          {/* content (text) */}
          <p className="text-black text-lg md:text-xl">{sDesc}</p>
        </div>

        {/* big img */}
        <div className={`${borderRed} ${sImgBg} p-2 md:p-8 -rotate-1`}>
          <img src={sImg} alt={sName} className="relative z-10" />
        </div>

        {/* desc 2 */}
        <div className={`${borderRed} relative bg-white p-4 rotate-1`}>
          {/* decoration */}
          <div className="absolute inset-0 pattern1" />

          {/* content (text) */}
          <p className="text-black text-lg md:text-xl">{sDesc2}</p>
        </div>

        {/* gray box link */}
        {sLink ? (
          <div className={`ml-auto md:w-1/2 relative z-10 -mt-4 ${borderRed}`}>
            <a
              href={sLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-slate-600 to-slate-800 shadow p-4"
            >
              <span className="box-between mb-2">
                <span className="box-equal gap-x-4">
                  <span className="w-4 h-4 rounded-full animate-pulse bg-green-400" />

                  <span className="text-green-400 text-sm font-bold">
                    Live in Production
                  </span>
                </span>

                <span className="text-white bg-slate-600 p-1 shadow">
                  <BiUpArrowAlt className="rotate-45" />
                </span>
              </span>

              <span className="text-white text-lg font-bold">
                {sLink.replace("https://", "")}
              </span>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
