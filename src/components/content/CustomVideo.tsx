import { useState } from "react";

export interface IVideo {
  sTitle: string;
  sDesc: string;
  sLink: string;
  sImg: string;
}

const CustomVideo = ({ oVideo }: { oVideo: IVideo }) => {
  // local state
  const [isHover, setHover] = useState(false);

  const rotate1 = isHover ? "rotate-3" : "-rotate-3";
  const rotate2 = isHover ? "-rotate-3" : "rotate-3";

  return (
    <div
      className="rounded-xl"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {/* desc */}
      <div className="box-end relative z-10">
        <p className="inline-block relative p-1">
          {/* bg */}
          <span className={`absolute inset-0 ${rotate2} bg-red-700`}></span>

          {/* content (text) */}
          <span className="relative z-10 text-white">{oVideo.sDesc}</span>
        </p>
      </div>

      {/* img */}
      <a
        href={oVideo.sLink}
        className="mb-2 hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={oVideo.sImg}
          alt={oVideo.sTitle}
          className={`${rotate1} border-4 border-red-700`}
        />
      </a>

      {/* texts */}
      <div>
        <a
          href={oVideo.sLink}
          className="block mb-1 relative p-2 bg-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* bg & decoration (boxes decoration) */}
          <span
            className={`${rotate2} absolute inset-0 border-x-4 border-b-2 border-t-8 border-red-700 bg-white`}
          />
          <span className="absolute inset-0 pattern1" />

          {/* content (text) */}
          <span className="relative z-10 text-lg leading-4 text-black">
            {oVideo.sTitle}
          </span>
        </a>
      </div>
    </div>
  );
};

export default CustomVideo;
