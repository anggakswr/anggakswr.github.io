import Bio from "../components/home/Bio";
import Experiences from "../components/home/Experiences";
import Skills from "../components/home/Skills";

const Home = () => {
  return (
    <div className="w-full text-white">
      <Bio />
      <Experiences />
      <Skills />
    </div>
  );
};

export default Home;
