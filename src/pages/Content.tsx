import axios from "axios";
import dayjs from "dayjs";
import { useQuery } from "react-query";

interface IWriting {
  id: number;
  title: string;
  url: string;
  description: string;
  published_at: string;
  positive_reactions_count: number;
  social_image: string;
}

const Content = () => {
  // https://dev.to/api/articles?username=codebayu

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

      <h2 className="text-xl mb-4">Latest Writings</h2>

      <div className="grid grid-cols-3 gap-4">
        {aWritings.map((oWriting) => (
          <Writing key={`devto-${oWriting.id}`} oWriting={oWriting} />
        ))}
      </div>
    </div>
  );
};

const Writing = ({ oWriting }: { oWriting: IWriting }) => {
  return (
    <div className="rounded-xl">
      {/* img */}
      <div className="mb-2">
        <img
          src={oWriting.social_image}
          alt={oWriting.title}
          className="rounded"
        />
      </div>

      {/* texts */}
      <div>
        <a
          href={oWriting.url}
          className="text-sm block mb-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {oWriting.title}
        </a>

        <p className="text-xs text-gray-500">
          {dayjs(oWriting.published_at).format("MMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Content;
