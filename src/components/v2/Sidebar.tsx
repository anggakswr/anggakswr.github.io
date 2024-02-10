import MementosCircle from "./cover/circle-animation/MementosCircle";
import Menu from "./sidebar/Menu";

const SidebarV2 = () => {
  return (
    <div className="fixed hidden md:flex items-center flex-col gap-8 w-56">
      {/* red box (with mementos circles) */}
      <div className="relative w-full h-20 bg-red-700 -rotate-3 overflow-hidden">
        <MementosCircle nMaxWidth={224} nInitWidth={60} />
      </div>

      {/* circle img */}
      <div className="relative z-10 box-center -mt-20">
        <div
          className="w-28 h-28 rounded-full shadow border-2 border-white bg-center bg-cover"
          style={{ backgroundImage: "url(/img/profile.jpg)" }}
        />
      </div>

      {/* name */}
      <div className="text-center pb-2 border-b -mt-4">
        <p className="font-medium text-xl text-white">Kamiswara Angga W.</p>
        <p className="text-red-700 -mt-2">@anggakswr</p>
      </div>

      {aMenus.map((menu, nIndex) => (
        <Menu
          key={`menu-${nIndex}`}
          sText={menu.text}
          bOdd={!(nIndex % 2)}
          nIndex={nIndex}
          link={menu.link}
        />
      ))}
    </div>
  );
};

const aMenus = [
  { link: "/", text: "HOME" },
  { link: "/projects", text: "PROJECTS" },
  { link: "/content", text: "CONTENT" },
  { link: "/contact", text: "CONTACT" },
];

export default SidebarV2;
