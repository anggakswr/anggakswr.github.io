import { BiCode } from "react-icons/bi";
import {
  TbBrandCss3,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNuxt,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVite,
} from "react-icons/tb";

const Skills = () => {
  return (
    <>
      <div className="box-equal gap-x-2 mt-4 text-3xl">
        <BiCode className="rotate-12" />
        <h2 id="skills">Skills</h2>
      </div>

      <p className="text-red-700 mb-4 text-lg md:text-xl">
        My coding tools and skills.
      </p>

      <div>
        {aSkills.map((oSkill) => (
          <div key={oSkill.sText} className="relative inline-block mr-4 mb-4">
            {/* red bg */}
            <div className="absolute inset-0 bg-red-700 rotate-6"></div>

            {/* content (white bg) */}
            <div className="relative z-10 bg-white py-2 px-4 box-equal gap-x-2">
              <div className={`text-xl ${oSkill.sCSSColor}`}>{oSkill.sImg}</div>

              <div className="text-black md:text-lg">{oSkill.sText}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const aSkills = [
  { sImg: <TbBrandHtml5 />, sText: "HTML", sCSSColor: "text-orange-500" },
  { sImg: <TbBrandCss3 />, sText: "CSS", sCSSColor: "text-blue-500" },
  {
    sImg: <TbBrandJavascript />,
    sText: "JavaScript",
    sCSSColor: "text-yellow-500",
  },
  { sImg: <TbBrandReact />, sText: "React.js", sCSSColor: "text-blue-300" },
  {
    sImg: <TbBrandTailwind />,
    sText: "Tailwind CSS",
    sCSSColor: "text-lime-500",
  },
  { sImg: <TbBrandNextjs />, sText: "Next.js", sCSSColor: "text-black" },
  {
    sImg: <TbBrandTypescript />,
    sText: "TypeScript",
    sCSSColor: "text-blue-500",
  },
  // { sImg: <TbBrandreactqu  />, sText: "React Query", sCSSColor: 'text-orange-500' },
  // { sImg: <TbBrandCss3  />, sText: "Zustand", sCSSColor: 'text-orange-500' },
  { sImg: <TbBrandNuxt />, sText: "Nuxt 2", sCSSColor: "text-green-500" },
  { sImg: <TbBrandVite />, sText: "Vite", sCSSColor: "text-green-300" },
  { sImg: <TbBrandGit />, sText: "Git", sCSSColor: "text-black" },
];

export default Skills;
