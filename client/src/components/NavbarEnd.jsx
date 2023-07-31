import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const NavbarEnd = () => {
  const { logout, user } = useContext(AuthContext);
  const nav = useNavigate();
  const handleLogout = () => {
    logout();
    nav("/");
  };

  return (
    <div className="navbar-end">
      <button
        className="btn btn-circle btn-ghost"
        onClick={() => window.search_modal.showModal()}
      >
        <MagnifyingGlassIcon className="h-5 w-5"/>
      </button>
      {user && (
        <button className="btn btn-circle btn-ghost">
          <div className="dropdown dropdown-end w-fit">
            <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
              <div className="w-8 rounded-full md:w-10">
                <img
                  src={user.profileImage}
                  alt={`${user.displayName}'s profile`}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-50 mt-3 w-80 bg-base-100 p-2 shadow"
            >
              <li>
                <Link className="flex justify-between" to={"/profile"}>
                  {user.displayName}
                  <span className="badge whitespace-nowrap">{user.reviews} Reviews</span>
                </Link>
              </li>
              <li>
                <span to={"/logout"} onClick={handleLogout}>
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </button>
      )}
    </div>
  );
};
export default NavbarEnd;
