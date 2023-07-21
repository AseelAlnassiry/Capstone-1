import { Link } from 'react-router-dom';
const NavbarCenter = ({ user }) => {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {user ? (
          <>
            <li>
              <Link className="flex items-center gap-1" to={'/'}>
                <img className="h-5 w-5" src="fire.svg" alt="" />
                <span className="text-base font-medium">Trending</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" to={'/'}>
                <img className="h-5 w-5" src="bookmark.svg" alt="" />
                <span className="text-base font-medium">Saved</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" to={'/'}>
                <img className="h-5 w-5" src="newspaper.svg" alt="" />
                <span className="text-base font-medium">My Reviews</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <button
                className="flex items-center gap-1"
                onClick={() => window.register_modal.showModal()}>
                <img className="h-5 w-5" src="add-user.svg" alt="" />
                <span className="text-base font-medium">Register</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-1"
                onClick={() => window.login_modal.showModal()}>
                <img className="h-5 w-5" src="user.svg" alt="" />
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
