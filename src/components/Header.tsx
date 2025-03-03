import { Link } from "react-router";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link to='/'>
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;