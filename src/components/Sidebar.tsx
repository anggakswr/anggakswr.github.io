import { Link, useLocation } from "react-router-dom";

import {
  BiBookmarks,
  BiCategory,
  BiHomeAlt2,
  BiPaperPlane,
} from "react-icons/bi";

const aLinks = [
  { sLink: "/", sTitle: "Home", rnIcon: <BiHomeAlt2 /> },
  { sLink: "/projects", sTitle: "Projects", rnIcon: <BiBookmarks /> },
  { sLink: "/content", sTitle: "Content", rnIcon: <BiCategory /> },
  { sLink: "/contact", sTitle: "Contact", rnIcon: <BiPaperPlane /> },
];

const Sidebar = () => {
  return (
    <nav className="fixed hidden md:block w-56">
      {/* decoration box */}
      <div className="h-20 bg-gray-200 relative overflow-hidden rounded-xl">
        <div className="absolute bg-gray-100 rounded-full w-48 h-40 -left-20 -top-10 blur-[2px] z-10" />
        <div className="absolute bg-gray-300 rounded-full w-40 h-40 -left-5 -top-5 blur-[2px] opacity-50" />
      </div>

      {/* circle img */}
      <div className="relative z-10 box-center -mt-10 mb-2">
        <div
          className="w-28 h-28 rounded-full shadow border-2 border-white bg-center bg-cover"
          style={{ backgroundImage: "url(/img/profile.jpg)" }}
        />
      </div>

      {/* name */}
      <div className="text-center pb-2 border-b">
        <p className="font-medium text-lg">Kamiswara Angga W.</p>
        <p className="text-gray-600">@anggakswr</p>
      </div>

      {/* links */}
      <Links />
    </nav>
  );
};

export const Links = () => {
  const location = useLocation();
  const { pathname } = location;

  const sTextColor = (sLink: string) => {
    if (pathname === sLink) {
      return "bg-gray-100";
    }

    return "text-gray-600";
  };

  return (
    <div className="py-2 flex flex-col gap-2">
      {aLinks.map((oLink) => (
        <Link
          key={oLink.sLink}
          to={oLink.sLink}
          className={`box-equal gap-x-2 py-2 px-4 hover:bg-gray-100 rounded-xl ${sTextColor(
            oLink.sLink
          )}`}
        >
          {oLink.rnIcon}
          {oLink.sTitle}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
