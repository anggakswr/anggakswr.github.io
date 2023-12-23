import Btn from "./cover/Btn";
import Footer from "./cover/Footer";

const Cover = () => {
  return (
    <div className="fixed inset-0 z-30 bg-black flex flex-col">
      {/* red & black circles */}
      <div className="h-1/3 bg-red-700"></div>

      {/* body */}
      <div className="flex-1 box-center">
        {/* btn */}
        <Btn />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Cover;