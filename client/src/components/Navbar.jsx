import SearchModal from "./SearchModal";
import NavbarStart from "./NavbarStart";
import NavbarCenter from "./NavbarCenter";
import NavbarEnd from "./NavbarEnd";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

const Navbar = () => {
  return (
    <div className="navbar z-50 shadow-lg lg:px-6 ">
      <NavbarStart />
      <NavbarCenter />
      <NavbarEnd />
      <SearchModal />
      <RegisterModal />
      <LoginModal />
    </div>
  );
};
export default Navbar;
