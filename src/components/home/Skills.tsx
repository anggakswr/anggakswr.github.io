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
      <div className="box-equal gap-x-2 text-xl mb-2">
        <BiCode />
        <h2 id="skills">Skills</h2>
      </div>

      <p className="text-gray-600 mb-4">My coding tools and skills.</p>

      <div>
        {aSkills.map((oSkill) => (
          <span
            key={oSkill.sText}
            className="inline-block py-2 px-4 shadow mr-4 mb-4 rounded-full"
          >
            <span className="box-equal gap-x-2">
              <span className={`text-xl ${oSkill.sCSSColor}`}>
                {oSkill.sImg}
              </span>

              <span className="text-xs md:text-sm">{oSkill.sText}</span>
            </span>
          </span>
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
