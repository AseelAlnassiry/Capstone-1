const ReviewItem = ({ review }) => {
  console.log(review.rating);
  return (
    <article className="group relative z-10 flex flex-col gap-4 rounded-lg bg-base-100 p-2 shadow-lg md:h-96 md:w-72">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={review.image} alt="jfklaklsd profile" />
          </div>
        </div>
        <span>{review.displayName}</span>
      </div>
      <div className="rating gap-1 self-center">
        <input
          type="radio"
          name={review.review_id}
          className="mask mask-heart bg-red-400"
          checked={review.rating === 0}
          readOnly
        />
        <input
          type="radio"
          name={review.review_id}
          className="mask mask-heart bg-orange-400"
          checked={review.rating === 25}
          readOnly
        />
        <input
          type="radio"
          name={review.review_id}
          className="mask mask-heart bg-yellow-400"
          checked={review.rating === 50}
          readOnly
        />
        <input
          type="radio"
          name={review.review_id}
          className="mask mask-heart bg-lime-400"
          checked={review.rating === 75}
          readOnly
        />
        <input
          type="radio"
          name={review.review_id}
          className="mask mask-heart bg-green-400"
          checked={review.rating === 100}
          readOnly
        />
      </div>
      <p className="overflow-scroll self-center">{review.content}</p>
    </article>
  );
};
export default ReviewItem;
