import { useTransition } from "../../store/transition";

const BoxTransition = () => {
  const { sToggle } = useTransition((state) => state);

  const sBox = "w-96 h-48 bg-white fixed z-40 rotate-45";

  const sBox1 =
    sToggle === "TOP" ? "-top-96 right-40" : "top-0 -right-96 opacity-0";

  const sBox2 =
    sToggle === "TOP" ? "-bottom-96 left-40" : "bottom-0 -left-96 opacity-0";

  return (
    <>
      <div className={`${sBox} ${sBox1}`} />
      <div className={`${sBox} ${sBox2}`} />
    </>
  );
};

export default BoxTransition;
