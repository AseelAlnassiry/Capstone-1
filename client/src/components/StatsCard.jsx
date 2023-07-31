import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../axiosConfig";

const StatsCard = ({ anime }) => {
  const { user } = useContext(AuthContext);
  let def = false;
  if (user && user.saved) def = user.saved.includes(anime.id);
  const [saved, setSaved] = useState(def);
  const handleSaved = async () => {
    setSaved(!saved);
    const res = await axiosInstance.post(
      "/saved",
      {
        email: user.email,
        show_id: anime.id,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    user.saved = res.data.saved;
  };

  return (
    <article className="group relative z-10 rounded-lg bg-base-100 p-2 shadow-lg md:h-96 md:w-72">
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
          className="progress progress-success w-full"
          value={anime.meanScore}
          max="100"
        ></progress>
      </div>

      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex w-full items-start justify-between">
          <div className="stat w-fit p-0">
            <div className="stat-title">Lists</div>
            <div className="stat-value text-secondary">
              {Math.round(Number(anime.popularity) / 1000)}K
            </div>
            <div className="stat-desc">Lists containg this</div>
          </div>

          <div className="stat w-fit p-0">
            <div className="stat-title">Episodes</div>
            <div className="stat-value text-error">
              {anime.episodes ? anime.episodes : "0"}
            </div>
            <div className="stat-desc">{anime.duration} minutes avg</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="stat p-0">
            <div className="stat-title">Status</div>
            <div className="stat-value text-2xl text-info">{anime.status}</div>
          </div>
          <div className="stat p-0">
            <div className="stat-title">Trending Score</div>
            <div className="stat-value text-2xl text-warning">
              {anime.trending}
            </div>
            <div className="stat-desc">activity in the last hour</div>
          </div>
        </div>
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleSaved}
            checked={saved}
            disabled={user ? false : true}
          />

          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
      </div>
    </article>
  );
};
export default StatsCard;
