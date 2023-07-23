import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

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
        <img className="h-5 w-5" src="search.svg" alt="" />
      </button>
      {user && (
        <button className="btn btn-circle btn-ghost">
          <div className="dropdown dropdown-end">
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
              className="menu dropdown-content rounded-box menu-sm z-50 mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link className="justify-between" to={"/profile"}>
                  {user.displayName}
                  <span className="badge">0 Reviews</span>
                </Link>
              </li>
              <li>
                <Link to={"/settings"}>Settings</Link>
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
