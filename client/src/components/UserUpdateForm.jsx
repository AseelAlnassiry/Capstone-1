import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../axiosConfig";

const UserUpdateForm = () => {
  const [url, setUrl] = useState("");
  const { user, update, logout } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axiosInstance.put(
        "/auth",
        {
          email: user.email,
          userImage: url,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      user.profileImage = res.data.image;
      update(user);
      window.location.reload();
    } catch (error) {
      logout();
      window.location.reload();
    }
  };
  return (
    <form
      className="group relative z-10 flex flex-col gap-4 rounded-lg bg-base-100 p-4 shadow-lg md:h-48 md:w-72"
      onSubmit={handleSubmit}
    >
      <span>New Image URL?</span>
      <input
        type="text"
        placeholder="Enter URL"
        className="input input-secondary rounded-full bg-base-200"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className="btn">Submit</button>
    </form>
  );
};
export default UserUpdateForm;
