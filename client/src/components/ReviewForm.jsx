import { useContext, useState } from "react";
import axiosInstance from "../axiosConfig";
import { AuthContext } from "../context/AuthContext";
const ReviewForm = ({ anime }) => {
  const [rating, setRating] = useState(75);
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axiosInstance.post(
        "/reviews",
        {
          show_id: anime.id,
          email: user.email,
          content,
          rating,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      window.location.reload();
    } catch (error) {}
  };
  return (
    <form
      className="group relative z-10 flex flex-col items-center gap-4 rounded-lg bg-base-100 p-4 shadow-lg md:h-96 md:w-72"
      onSubmit={handleSubmit}
    >
      <span className="text-xl font-semibold">Review This Anime!</span>
      <input
        type="range"
        min={0}
        max="100"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="range range-accent"
        step="25"
      />
      <div className="flex w-full justify-between px-2 text-xs">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <textarea
        className="textarea textarea-success min-h-[10rem] w-full flex-1"
        placeholder="What do you think?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="btn w-full bg-base-200 text-success shadow">
        Submit
      </button>
    </form>
  );
};
export default ReviewForm;
