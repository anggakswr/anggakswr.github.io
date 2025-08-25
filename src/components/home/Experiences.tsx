import { BiBriefcaseAlt, BiDownArrowAlt } from "react-icons/bi";
import Office from "./experiences/Office";

const Experiences = () => {
  return (
    <>
      <div className="box-equal gap-x-2 mt-4 text-3xl">
        <BiBriefcaseAlt className="rotate-12" />
        <h2 id="experiences">Experiences</h2>
      </div>

      <div className="box-between gap-x-2 mb-4">
        <p className="text-red-700 text-lg md:text-xl">
          My professional career journey.
        </p>

        <a
          href="/docs/cv-ats-angga-eng.pdf"
          className="text-lg box-equal gap-x-2 bg-white text-black py-2 px-4 rotate-3 hover:-rotate-3"
          download
        >
          <BiDownArrowAlt className="animate-bounce" />
          Download CV
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {aOffices.map((oOffice) => (
          <Office key={oOffice.oCompany.sName} oOffice={oOffice} />
        ))}
      </div>

      <hr />
    </>
  );
};

const aOffices = [
  {
    sTitle: "Software Engineer",
    sTimeline: "Apr 2025 - Present",
    oCompany: {
      sLogo: "maze-logo.png",
      sName: "Mazecare",
      sLink: "https://mazecare.com",
      sCity: "Hongkong",
    },
  },
  {
    sTitle: "Frontend Developer",
    sTimeline: "Jul 2022 - Jun 2025",
    oCompany: {
      sLogo: "prima-logo.png",
      sName: "Primaku",
      sLink: "https://primaku.com",
      sCity: "Jakarta",
    },
  },
  {
    sTitle: "Frontend Developer",
    sTimeline: "Apr 2022 - Aug 2022",
    oCompany: {
      sLogo: "gama-logo.jpg",
      sName: "Gamatechno",
      sLink: "https://www.gamatechno.com",
      sCity: "Yogyakarta",
    },
  },
  {
    sTitle: "Frontend Developer",
    sTimeline: "Nov 2020 - Aug 2022",
    oCompany: {
      sLogo: "icrea-logo.png",
      sName: "iCreativeLabs",
      sLink: "https://icreativelabs.com",
      sCity: "Bandung",
    },
  },
];

export default Experiences;
