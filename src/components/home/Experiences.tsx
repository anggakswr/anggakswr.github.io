import { BiBriefcaseAlt, BiDownArrowAlt } from "react-icons/bi";
import Office from "./experiences/Office";

const Experiences = () => {
  return (
    <>
      <div className="box-equal gap-x-2 text-xl mb-2">
        <BiBriefcaseAlt />
        <h2 id="experiences">Experiences</h2>
      </div>

      <div className="box-between gap-x-2 mb-4">
        <p className="text-gray-600 text-sm md:text-base">
          My professional career journey.
        </p>

        <a
          href="#"
          className="text-xs box-equal gap-x-2 bg-gray-100 py-2 px-4 rounded-xl"
        >
          <BiDownArrowAlt />
          Download CV
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {aOffices.map((oOffice) => (
          <Office key={oOffice.oCompany.sName} oOffice={oOffice} />
        ))}
      </div>
    </>
  );
};

const aOffices = [
  {
    sTitle: "Frontend Developer",
    sTimeline: "Jul 2022 - Present",
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
    sTitle: "Fullstack Developer",
    sTimeline: "Januari 2021 - Desember 2022",
    oCompany: {
      sLogo: "untag-logo.png",
      sName: "UNTAG",
      sLink: "https://untagsmg.ac.id",
      sCity: "Semarang",
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
