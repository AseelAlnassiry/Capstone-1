const InfoCard = ({ anime }) => {
  return (
    <article className="group relative  z-10 rounded-lg px-4 text-white shadow-lg md:h-96 md:w-72">
      {/* Picture */}
      <img
        className="absolute left-0 -z-10 h-full w-full rounded-lg object-cover brightness-[50%] contrast-125 grayscale transition-all duration-200 ease-in"
        src={anime.bannerImage}
        alt=""
      />
      <div className="flex flex-col justify-around gap-2  py-4 font-semibold">
        <div className="flex flex-col items-start gap-0">
          <span className="font-semibold">Native Title:</span>
          <span className="font-light">{anime.title.native}</span>
        </div>
        <div className="flex flex-col items-start gap-0">
          <span className="font-semibold">Release:</span>
          <span className="font-light">
            {anime.startDate.year} - {anime.startDate.month} -{" "}
            {anime.startDate.day}
          </span>
        </div>
        <div className="flex flex-col items-start gap-0">
          <span className="font-semibold">Relavant Figure:</span>
          <span className="text-sm font-light">
            {anime.staff.edges[0].role} -{" "}
            {anime.staff.edges[0].node.name.userPreferred}
          </span>
        </div>
        <div className="flex flex-col items-start gap-0">
          <span className="font-semibold">Genres:</span>
          <span className="text-sm font-light">
            {anime.genres[0]} {anime.genres[1] ? ` - ${anime.genres[1]}` : ""}{" "}
            {anime.genres[2] ? ` - ${anime.genres[2]}` : ""}
          </span>
        </div>
        <div className="flex flex-col items-start gap-0">
          <span className="font-semibold">Adult?</span>
          <span className="text-sm font-light">
            {anime.isAdult ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </article>
  );
};
export default InfoCard;
