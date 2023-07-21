import SearchModal from "./SearchModal";
import NavbarStart from "./NavbarStart";
import NavbarCenter from "./NavbarCenter";
import NavbarEnd from "./NavbarEnd";

const Navbar = () => {
  const user = null;
  return (
    <div className="navbar bg-base-200 shadow-lg">
      <NavbarStart user={user} />
      <NavbarCenter user={user} />
      <NavbarEnd user={user} />
      <SearchModal user={user} />
    </div>
  );
};
export default Navbar;
