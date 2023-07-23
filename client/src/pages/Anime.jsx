import { useQuery } from "@apollo/client";
import GET_ANIME from "../apollo/anime";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorModal from "../components/ErrorModal";
import AnimeCard from "../components/AnimeCard";
import StatsCard from "../components/StatsCard";
import InfoCard from "../components/InfoCard";

const Anime = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ANIME, { variables: { id } });
  data && console.log(data);
  return (
    <div className="flex flex-1 flex-wrap justify-center gap-6 px-2 py-4">
      {loading && <Loading />}
      {error && (
        <ErrorModal msg={error.networkError.result.errors[0].message} />
      )}
      {data && (
        <>
          <div className="flex flex-col md:flex-row gap-4">
            <AnimeCard anime={data.Media} />
            <StatsCard anime={data.Media} />
            <InfoCard anime={data.Media} />
          </div>
          <div>Reivew Stuff</div>
        </>
      )}
    </div>
  );
};
export default Anime;
