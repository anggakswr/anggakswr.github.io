import Btn from "./cover/Btn";
import CircleAnimation from "./cover/CircleAnimation";
import Separator from "./cover/Separator";
import Footer from "./cover/Footer";
import { useCover } from "../../store/cover";
import PhantomLogo from "./cover/PhantomLogo";

const Cover = () => {
  const { bOpened } = useCover((state) => state);

  if (bOpened) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 bg-black flex flex-col">
      {/* red & black circles */}
      <div className="h-1/3 relative">
        {/* red hat img */}
        <PhantomLogo />

        {/* black & red circles */}
        <CircleAnimation />

        {/* white boxes */}
        <Separator />
      </div>

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
