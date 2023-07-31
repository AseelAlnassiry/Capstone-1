import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  BookmarkIcon,
  FireIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

const NavbarCenter = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal gap-2 px-1">
        {user ? (
          <>
            <li>
              <Link className="flex items-center gap-1" to={"/"}>
                <FireIcon className="h-5 w-5" />
                <span className="text-base font-medium">Trending</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" to={"/saved"}>
                <BookmarkIcon className="h-5 w-5" />
                <span className="text-base font-medium">Saved</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <button
                className="flex items-center gap-1"
                onClick={() => window.register_modal.showModal()}
              >
                <UserPlusIcon className="h-5 w-5" />
                <span className="text-base font-medium">Register</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-1"
                onClick={() => window.login_modal.showModal()}
              >
                <UserIcon className="h-5 w-5" />
                <span className="text-base font-medium">Login</span>
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default NavbarCenter;
