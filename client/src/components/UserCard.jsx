import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const UserCard = () => {
  const { user } = useContext(AuthContext);
  const nav = useNavigate();
  useEffect(() => {
    if (!user) nav("/");
    return () => {};
  }, [nav, user]);

  return (
    <article className="group relative z-10 flex flex-col gap-4 rounded-lg bg-base-100 p-4 shadow-lg md:h-96 md:w-72">
      {!user && <Loading />}
      {user && (
        <div className="flex flex-col items-center gap-4">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={user.profileImage} alt={user.displayName} />
            </div>
          </div>
          {/* Name */}
          <span className="text-2xl font-bold">{user.displayName}</span>
          {/* Email */}
          <span>{user.email}</span>
          <div className="flex w-full items-center justify-between">
            <span>Shows Saved: {user.saved.length}</span>
            <span>Reviews: {user.reviews}</span>
          </div>
        </div>
      )}
    </article>
  );
};
export default UserCard;
