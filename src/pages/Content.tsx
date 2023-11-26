import axios from "axios";
import { useQuery } from "react-query";
import Writing from "../components/content/Writing";
import CustomVideo, { IVideo } from "../components/content/CustomVideo";

export interface IWriting {
  id: number;
  title: string;
  url: string;
  description: string;
  published_at: string;
  positive_reactions_count: number;
  social_image: string;
}

const Content = () => {
  const getWritings = () => {
    return axios.get("https://dev.to/api/articles?username=anggakswr");
  };

  const { data } = useQuery("writings", getWritings);
  const aWritings = (data?.data as IWriting[]) ?? [];

  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Content</h1>

      <p className="leading-6 md:leading-7 mb-4 text-sm md:text-base text-gray-600">
        Embarking on a journey through the realms of technology, unraveling the
        secrets of code documentation, and embracing the art of perpetual
        creation.
      </p>

      <hr className="mb-4" />

      <h2 className="text-xl mb-4">Latest Videos</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {aVideos.map((oVideo) => (
          <CustomVideo key={`yt-${oVideo.sLink}`} oVideo={oVideo} />
        ))}
      </div>

      <hr className="mb-4" />

      <h2 className="text-xl mb-4">Latest Writings</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {aWritings.map((oWriting) => (
          <Writing key={`devto-${oWriting.id}`} oWriting={oWriting} />
        ))}
      </div>
    </div>
  );
};

const aVideos: IVideo[] = [
  {
    sTitle: "Micro-frontends",
    sDesc: "Modern concept of frontends",
    sImg: "/img/yt-vids/microfe.jpg",
    sLink:
      "https://www.youtube.com/playlist?list=PLtj3PG7JyoVvNEf9gGvPRT_CAgqYYa4Yy",
  },
  {
    sTitle: "TDD",
    sDesc: "Test Driven Development",
    sImg: "/img/yt-vids/tdd.jpg",
    sLink:
      "https://www.youtube.com/playlist?list=PLtj3PG7JyoVvm3PlTr_MHym8-18BUQcCG",
  },
];

export default Content;
