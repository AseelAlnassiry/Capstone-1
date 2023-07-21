import SearchModal from './SearchModal';
import NavbarStart from './NavbarStart';
import NavbarCenter from './NavbarCenter';
import NavbarEnd from './NavbarEnd';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

const Navbar = () => {
  const user = null;
  return (
    <div className="navbar bg-accent-200 shadow-lg">
      <NavbarStart user={user} />
      <NavbarCenter user={user} />
      <NavbarEnd user={user} />
      <SearchModal user={user} />
      <RegisterModal user={user} />
      <LoginModal user={user} />
    </div>
  );
};
export default Navbar;
