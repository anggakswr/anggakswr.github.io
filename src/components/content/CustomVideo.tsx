export interface IVideo {
  sTitle: string;
  sDesc: string;
  sLink: string;
  sImg: string;
}

const CustomVideo = ({ oVideo }: { oVideo: IVideo }) => {
  return (
    <div className="rounded-xl">
      {/* img */}
      <a
        href={oVideo.sLink}
        className="mb-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={oVideo.sImg} alt={oVideo.sTitle} className="rounded" />
      </a>

      {/* texts */}
      <div>
        <a
          href={oVideo.sLink}
          className="text-sm block mb-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {oVideo.sTitle}
        </a>

        <p className="text-xs text-gray-500">{oVideo.sDesc}</p>
      </div>
    </div>
  );
};

export default CustomVideo;
