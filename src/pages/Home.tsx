import Bio from "../components/home/Bio";
import Experiences from "../components/home/Experiences";
import Skills from "../components/home/Skills";

const Home = () => {
  return (
    <>
      <Bio />

      <hr className="mb-4" />

      <Experiences />

      <hr className="mb-4" />

      <Skills />
    </>
  );
};

export default Home;
