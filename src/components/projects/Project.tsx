import { BiUpArrowAlt } from "react-icons/bi";

interface IProject {
  sBorder: string;
  sName: string;
  sLogo: string;
  sDesc: string;
  sDesc2: string;
  sImg: string;
  sImgBg: string;
  sLink?: string;
}

const Project = ({ oProject }: { oProject: IProject }) => {
  const { sBorder, sName, sLogo, sDesc, sDesc2, sImg, sImgBg, sLink } =
    oProject;

  return (
    <div
      className={`relative overflow-hidden border ${sBorder} md:rounded-xl p-4 mb-4`}
    >
      {/* decoration */}
      <div className="absolute inset-0 pattern1" />

      {/* content */}
      <div className="relative z-10">
        {/* title */}
        <div className="box-equal gap-x-4 mb-4">
          <div className="w-12">
            <img src={sLogo} alt={sName} />
          </div>

          <h2 className="text-xl">{sName}</h2>
        </div>

        <p className="text-sm md:text-base mb-4">{sDesc}</p>

        <div className={`rounded-xl p-2 md:p-8 mb-4 ${sImgBg}`}>
          <img src={sImg} alt={sName} className="rounded-xl relative z-10" />
        </div>

        <p className="text-sm md:text-base mb-4">{sDesc2}</p>

        {sLink ? (
          <div className="md:w-1/2">
            <a
              href={sLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl shadow p-4"
            >
              <span className="box-between mb-2">
                <span className="box-equal gap-x-4">
                  <span className="w-4 h-4 rounded-full animate-pulse bg-green-400" />

                  <span className="text-green-400 text-sm font-bold">
                    Live in Production
                  </span>
                </span>

                <span className="text-white bg-slate-600 p-1 rounded shadow">
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
