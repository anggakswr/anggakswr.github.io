import Cover from "../components/v2/Cover";
import SidebarV2 from "../components/v2/Sidebar";

const Home = () => {
  return (
    <div className="bg-black min-h-screen box-center">
      <Cover />

      <div className="w-3/4 mx-auto py-8 flex gap-x-8">
        <SidebarV2 />

        {/* body */}
        <div className="w-full bg-red-500 text-white">asd</div>
      </div>
    </div>
  );
};

export default Home;
