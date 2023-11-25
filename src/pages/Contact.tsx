import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTiktok,
  TbBrandYoutube,
} from "react-icons/tb";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Contact</h1>

      <p className="leading-6 md:leading-7 mb-4 text-sm md:text-base text-gray-600">
        Sometimes I take on side projects for website development, working as a
        freelance frontend developer. I'm also proficient in backend using
        Node.js and MongoDB. Occasionally, I conduct webinars, create some
        contents on social medias, and serve as an instructor for online
        classes. Feel free to reach out if you're interested in collaborating
        with me.
      </p>

      <hr className="mb-4" />

      <h2 className="text-xl mb-4">Find me on</h2>

      {aSocials.map((oSocial) => (
        <a
          key={oSocial.sText}
          href={oSocial.sLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block py-2 px-4 shadow mr-4 mb-4 rounded-full text-white ${oSocial.sCSSColor}`}
        >
          <span className="box-equal gap-x-2">
            <span className="text-xl">{oSocial.sImg}</span>

            <span className="text-xs md:text-sm">{oSocial.sText}</span>
          </span>
        </a>
      ))}
    </div>
  );
};

const aSocials = [
  {
    sImg: <TbBrandGithub />,
    sText: "Github",
    sLink: "https://github.com/anggakswr/",
    sCSSColor: "bg-black",
  },
  {
    sImg: <TbBrandLinkedin />,
    sText: "LinkedIn",
    sLink: "https://www.linkedin.com/in/anggakswr/",
    sCSSColor: "bg-blue-500",
  },
  {
    sImg: <TbBrandInstagram />,
    sText: "Instagram",
    sLink: "https://www.instagram.com/anggakswr/",
    sCSSColor: "bg-purple-500",
  },
  {
    sImg: <TbBrandYoutube />,
    sText: "Youtube",
    sLink: "https://www.youtube.com/@anggakswr/",
    sCSSColor: "bg-red-500",
  },
  {
    sImg: <TbBrandTiktok />,
    sText: "Tiktok",
    sLink: "https://www.tiktok.com/@anggakswr",
    sCSSColor: "bg-black",
  },
];

export default Contact;
