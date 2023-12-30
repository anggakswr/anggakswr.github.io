const Bio = () => {
  return (
    <>
      <div className="box-between gap-x-2">
        <h1 className="text-3xl font-medium">Hi, I'm Angga</h1>

        <div className="box-equal gap-x-2 border py-1 px-2 bg-white rotate-3">
          {/* green circle */}
          <div className="bg-green-500 animate-ping w-2 h-2 rounded-full" />
          <p className="text-lg text-black">Hire me!</p>
        </div>
      </div>

      <div className="text-red-700 text-xl box-equal gap-x-2 mb-4">
        <p>Frontend Developer</p>
        <p>&middot;</p>
        <p>Based in Indonesia</p>
      </div>

      <p className="mb-4 text-lg md:text-xl">
        Hello, I'm Angga, a seasoned professional with over three years of
        hands-on experience in web development. I specialize in utilizing
        cutting-edge tools such as Next.js, Tailwind CSS, and TypeScript to
        craft innovative and dynamic web solutions.
      </p>

      <hr />
    </>
  );
};

export default Bio;
