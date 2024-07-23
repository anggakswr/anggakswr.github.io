import { useState } from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTiktok,
  TbBrandYoutube,
} from "react-icons/tb";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-medium mb-4">Contact</h1>

      <p className="leading-6 md:leading-7 mb-4 text-lg md:text-xl">
        Sometimes I take on side projects for website development, working as a
        freelance frontend developer. I'm also proficient in backend using
        Node.js and MongoDB. Occasionally, I conduct webinars, create some
        contents on social medias, and serve as an instructor for online
        classes. Feel free to reach out if you're interested in collaborating
        with me.
      </p>

      <hr className="mb-4" />

      <h2 className="text-xl mb-4">Find me on</h2>

      {aSocials.map((socmed) => (
        <SocmedLink key={socmed.text} socmed={socmed} />
      ))}

      <hr className="my-4" />
    </div>
  );
};

interface Socmed {
  img: JSX.Element;
  img2?: string;
  text: string;
  link: string;
  bgColor: string;
}

const SocmedLink = ({ socmed }: { socmed: Socmed }) => {
  // local state
  const [isHover, setHover] = useState(false);

  const bgRotate = isHover ? "-rotate-0" : "-rotate-3";
  const contentBg = socmed.bgColor === "bg-black" ? "border" : "";
  const contentRotate = isHover ? "rotate-0" : "rotate-3";
  const socmedLink =
    "hover:rotate-0 inline-block mr-4 mb-4 text-white relative";

  return (
    <a
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      href={socmed.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${socmedLink}`}
    >
      {socmed.img2 ? (
        <img
          src={socmed.img2}
          alt={socmed.text}
          className="relative z-10 w-full md:w-40"
        />
      ) : null}

      <span className={`absolute inset-0 bg-white ${bgRotate}`} />

      <span
        className={`relative z-10 box-equal gap-x-2 py-2 px-4 ${contentBg} ${contentRotate} ${socmed.bgColor}`}
      >
        <span className="text-xl">{socmed.img}</span>
        <span className="text-xs md:text-sm">{socmed.text}</span>
      </span>
    </a>
  );
};

const aSocials = [
  {
    img: <TbBrandGithub />,
    text: "Github",
    link: "https://github.com/anggakswr/",
    bgColor: "bg-black",
  },
  {
    img: <TbBrandLinkedin />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/anggakswr/",
    bgColor: "bg-blue-500",
  },
  {
    img: <TbBrandInstagram />,
    text: "Instagram",
    link: "https://www.instagram.com/anggakswr/",
    bgColor: "bg-[#8134AF]",
  },
  {
    img: <TbBrandYoutube />,
    text: "Youtube",
    link: "https://www.youtube.com/@anggakswr/",
    bgColor: "bg-red-500",
  },
  {
    img: <TbBrandTiktok />,
    text: "Tiktok",
    link: "https://www.tiktok.com/@anggakswr",
    bgColor: "bg-black",
  },
];

export default Contact;
