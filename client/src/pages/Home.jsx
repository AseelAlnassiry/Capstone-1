import GET_TRENDING from "../apollo/trending";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import ErrorModal from "../components/ErrorModal";

import AnimeCard from "../components/AnimeCard";

const Home = () => {
  const { loading, error, data } = useQuery(GET_TRENDING);
  return (
    <div className="flex flex-1 flex-wrap justify-center gap-6 px-2 py-4 bg-base-200">
      {loading && <Loading />}
      {error && (
        <ErrorModal msg={error.message} />
      )}
      {data &&
        data.Page.media.map((anime) => (
          <AnimeCard anime={anime} key={anime.id} />
        ))}
    </div>
  );
};
export default Home;
