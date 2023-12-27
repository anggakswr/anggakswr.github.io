const CircleAnimation = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 -top-8 bg-red-700 -rotate-3 overflow-hidden">
      {/* black circle */}
      <div className="bg-black w-40 h-40 rounded-full absolute inset-x-0 mx-auto -bottom-16 z-20"></div>

      {/* red circle */}
      <div className="bg-red-700 w-60 h-60 rounded-full absolute inset-x-0 mx-auto -bottom-24 z-10"></div>

      {/* black circle */}
      <div className="bg-black w-80 h-80 rounded-full absolute inset-x-0 mx-auto -bottom-32"></div>
    </div>
  );
};

export default CircleAnimation;
