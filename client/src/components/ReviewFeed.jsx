import ReviewItem from "./ReviewItem";
import axiosInstance from "../axiosConfig";
import { useEffect, useState } from "react";
import Loading from "./Loading";

// const res = await axiosInstance.get(`reviews/${id}`);

const ReviewFeed = ({ anime }) => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      const res = await axiosInstance.get(`reviews/${anime.id}`);
      setReviews(res.data.reviews);
      setLoading(false);
    };

    loadReviews();
  }, [anime.id]);

  return (
    <section className="w-full">
      <div className="">
        <h2 className="py-4 pt-4 text-center text-2xl font-semibold">
          Reviews
        </h2>
        <div className="grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {loading && <Loading />}
          {reviews &&
            reviews.map((review) => (
              <ReviewItem key={review.reviewId} review={review} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default ReviewFeed;
