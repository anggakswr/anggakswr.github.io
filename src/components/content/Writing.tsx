import dayjs from "dayjs";
import { IWriting } from "../../pages/Content";

const Writing = ({ oWriting }: { oWriting: IWriting }) => {
  return (
    <div className="rounded-xl">
      {/* img */}
      <a
        href={oWriting.url}
        className="block mb-2 hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={oWriting.social_image}
          alt={oWriting.title}
          className="rounded"
        />
      </a>

      {/* texts */}
      <div>
        <a
          href={oWriting.url}
          className="text-lg leading-4 block mb-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {oWriting.title}
        </a>

        <p className="text-red-700">
          {dayjs(oWriting.published_at).format("MMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Writing;
