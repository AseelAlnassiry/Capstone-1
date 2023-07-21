import { Link } from "react-router-dom";

const NavbarStart = ({ user }) => {
  return (
    <div className="navbar-start">
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-circle btn-ghost">
          <img className="h-6 w-6" src="bars.svg" alt="" />
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
        >
          {user ? (
            <>
              <li>
                <Link className="flex items-center gap-1" to={"/"}>
                  <img className="h-5 w-5" src="fire.svg" alt="" />
                  <span className="text-base font-medium">Trending</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-1" to={"/"}>
                  <img className="h-5 w-5" src="bookmark.svg" alt="" />
                  <span className="text-base font-medium">Saved</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-1" to={"/"}>
                  <img className="h-5 w-5" src="newspaper.svg" alt="" />
                  <span className="text-base font-medium">My Reviews</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="flex items-center gap-1" to={"/"}>
                  <img className="h-5 w-5" src="add-user.svg" alt="" />
                  <span className="text-base font-medium">Register</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-1" to={"/"}>
                  <img className="h-5 w-5" src="user.svg" alt="" />
                  <span className="text-base font-medium">Login</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <Link
        className="btn btn-ghost p-1 text-xl normal-case text-accent md:px-4 md:text-2xl"
        to={"/"}
      >
        レノ国
      </Link>
    </div>
  );
};
export default NavbarStart;
