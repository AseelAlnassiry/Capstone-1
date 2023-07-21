import { Link } from "react-router-dom";

const NavbarEnd = () => {
  return (
    <div className="navbar-end">
      <button
        className="btn btn-circle btn-ghost"
        onClick={() => window.my_modal_2.showModal()}
      >
        <img className="h-5 w-5" src="search.svg" alt="" />
      </button>
      <button className="btn btn-circle btn-ghost">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="w-8 rounded-full md:w-10">
              <img
                src="https://ipfs.creary.net/ipfs/QmayCWVoB27yxuN4aum762sfZVrX7XsSEY6wJ16na4QUWQ"
                alt="Aseel's Profile"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link className="justify-between" to={"/profile"}>
                Profile
                <span className="badge">0 Reviews</span>
              </Link>
            </li>
            <li>
              <Link to={"/settings"}>Settings</Link>
            </li>
            <li>
              <Link to={"/logout"}>Logout</Link>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};
export default NavbarEnd;
