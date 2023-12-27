const Separator = () => {
  const aNumbers = [...Array(60).keys()];
  const nRandom = Math.floor(Math.random() * 1000);

  return (
    <div className="absolute -bottom-4 inset-x-0 z-20 flex -rotate-3">
      {aNumbers.map((nNumber) => (
        <div
          key={`white-box-${nNumber}`}
          className={`bg-white w-8 h-6 -mx-1`}
          style={{
            transform: `rotate(${nRandom * nNumber}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Separator;
