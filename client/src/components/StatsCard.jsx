import { Link } from "react-router-dom";
import parse from "html-react-parser";

const StatsCard = ({ anime }) => {
  return (
    <article className="group relative h-96 rounded-lg px-4 shadow-lg md:w-72">
      {/* Picture */}
      <div className="flex flex-col justify-around gap-2  py-4 font-semibold">
        <span>Average Score: {anime.averageScore}%</span>
        <progress
          className="progress progress-accent w-full"
          value={anime.averageScore}
          max="100"
        ></progress>
      </div>
      <div className="flex flex-col justify-around gap-2  py-4 font-semibold">
        <span>Mean Score: {anime.meanScore}%</span>
        <progress
          className="progress progress-error w-full"
          value={anime.meanScore}
          max="100"
        ></progress>
      </div>

      <div className="flex flex-wrap justify-between gap-8">
        <div className="stat w-fit p-0">
          <div className="stat-title">Lists</div>
          <div className="stat-value">
            {Math.round(Number(anime.popularity) / 1000)}K
          </div>
          <div className="stat-desc">Lists containg this</div>
        </div>

        <div className="stat w-fit p-0">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat w-fit p-0">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat w-fit p-0">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </article>
  );
};
export default StatsCard;
