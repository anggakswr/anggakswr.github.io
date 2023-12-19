const WritingSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* gray box */}
      <div className="w-full h-[100px] bg-gray-200 rounded mb-1" />

      {/* texts */}
      <div className="w-full h-4 bg-gray-200 rounded mb-1" />
      <div className="w-4/5 h-4 bg-gray-200 rounded" />
    </div>
  );
};

export default WritingSkeleton;
