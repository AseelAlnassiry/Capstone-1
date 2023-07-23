import { Link } from "react-router-dom";
import parse from "html-react-parser";

const InfoCard = ({ anime 

  }) => {
  return (
    <article className="group relative h-96 rounded-lg shadow-lg md:h-96 md:w-72">
      {/* Picture */}
      <img
        className="object-fit h-full w-full rounded-lg transition-all duration-200 ease-in group-hover:brightness-[25%]"
        src={anime.coverImage.extraLarge}
        alt=""
      />
      <div
        className="absolute top-0 h-full w-full text-gray-200 transition-all duration-200 ease-in"
        style={{ color: anime.coverImage.color }}
      >
        <div className="hidden h-full w-full flex-col gap-4 px-4 py-4 group-hover:flex">
          <Link
            className="text-2xl font-bold hover:brightness-150"
            to={`/${anime.id}`}
          >
            {anime.title.english}
          </Link>
          <p className="h-48 overflow-scroll text-sm font-medium">
            {anime.description && parse(anime.description)}
          </p>
          <div className="mt-auto flex items-center justify-center gap-3">
            {anime.genres.slice(0, 3).map((genre) => (
              <p className="text-xs" key={genre}>
                {genre}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
export default InfoCard;
