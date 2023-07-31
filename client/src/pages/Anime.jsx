import { useQuery } from "@apollo/client";
import GET_ANIME from "../apollo/anime";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorModal from "../components/ErrorModal";
import AnimeCard from "../components/AnimeCard";
import StatsCard from "../components/StatsCard";
import InfoCard from "../components/InfoCard";
import ReviewFeed from "../components/ReviewFeed";
import ReviewForm from "../components/ReviewForm";

const Anime = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ANIME, { variables: { id } });
  return (
    <div className="flex flex-1 flex-wrap justify-center gap-6 bg-base-200 px-2 py-4">
      {loading && <Loading />}
      {error && (
        <ErrorModal msg={error.networkError.result.errors[0].message} />
      )}
      {data && (
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <AnimeCard anime={data.Media} />
            <StatsCard anime={data.Media} />
            <InfoCard anime={data.Media} />
            <ReviewForm anime={data.Media} />
          </div>
          <ReviewFeed anime={data.Media} />
        </div>
      )}
    </div>
  );
};
export default Anime;
