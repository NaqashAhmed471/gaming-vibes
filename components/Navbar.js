import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import logo from "../public/rupee.png";
import banner from "../public/banner.png";

const Navbar = () => {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container">
      <nav>
        <Image src={logo} width={50} height={48} alt="logo" />
        <h1>Gaming Vibes</h1>
        {authReady && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </li>
            {!user && (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}
            {user && <li>{user.email}</li>}
            {user && (
              <li onClick={logout} className="btn">
                Log out
              </li>
            )}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src={banner} width={966} height={276} alt="banner" />
      </div>
    </div>
  );
};

export default Navbar;
