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
        className="mb-2 hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={oVideo.sImg} alt={oVideo.sTitle} className="rounded" />
      </a>

      {/* texts */}
      <div>
        <a
          href={oVideo.sLink}
          className="text-lg leading-4 block mb-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {oVideo.sTitle}
        </a>

        <p className="text-red-700">{oVideo.sDesc}</p>
      </div>
    </div>
  );
};

export default CustomVideo;
