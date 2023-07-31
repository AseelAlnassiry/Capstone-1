import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SavedCard from "../components/SavedCard";

const Saved = () => {
  const { user } = useContext(AuthContext);
  const nav = useNavigate();
  useEffect(() => {
    if (!user) nav("/");

    return () => {};
  }, [user, nav]);
  return (
    <div className="flex flex-1 flex-wrap justify-center gap-6 bg-base-200 px-2 py-4">
      {user && user.saved.map((id) => <SavedCard key={id} id={id} />)}
    </div>
  );
};
export default Saved;
