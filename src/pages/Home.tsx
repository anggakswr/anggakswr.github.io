const Home = () => {
  return (
    <div className="bg-black min-h-screen box-center flex-col gap-8">
      <Menu />
      <Menu bOdd />
      <Menu />
      <Menu bOdd />
    </div>
  );
};

const Menu = ({ bOdd }: { bOdd?: boolean }) => {
  return (
    <div className="relative w-[100px] h-[50px] box-center">
      <div className="text-white font-bold">Home</div>

      <div className={`absolute inset-0 ${bOdd ? "rotate-180" : ""}`}>
        <div className="absolute left-0 -top-4 w-1 h-[80px] bg-white" />
        <div className="absolute right-0 -bottom-4 w-1 h-[60px] bg-white rotate-12" />
        <div className="absolute top-0 -left-4 w-[120px] h-1 bg-white rotate-12" />
        <div className="absolute bottom-0 -left-4 w-[120px] h-1 bg-white -rotate-3" />
      </div>
    </div>
  );
};

export default Home;
