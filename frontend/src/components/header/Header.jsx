import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { links, profileLinks } from "../../../data/links";
import NavLinks from "./NavLinks";
import { useAppContext } from "../../contexts/AppContext";
import { logoutFunc } from "../../api-calls";
const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const [showProf, setShowProf] = useState(false);
  console.log(isLoggedIn, setIsLoggedIn);
  const handleLogOut = () => {
    const response = logoutFunc();
    console.log(response);
    setIsLoggedIn(response);
  };
  useEffect(() => {
    setIsLoggedIn((pre) => pre);
  }, [isLoggedIn]);
  return (
    <header className="w-full bg-secondary max-h-fit flex-1 shadow-md">
      <div className="flex flex-row h-[72px] justify-between items-center customwq">
        <div className="flex gap-6 flex-row">
          <Logo />
          <NavLinks links={links} />
        </div>
        {isLoggedIn ? (
          <div className="flex gap-6 items-center">
            <Link to="/cart">
              <FaCartShopping size={26} />
            </Link>

            <div className="profile relative inline-block text-left">
              <button
                onClick={() => setShowProf((prev) => !prev)}
                type="button"
                className="inline-flex justify-center rounded-full px-0.5 py-0.5 shadow bg-mwhite"
              >
                <IoPersonCircleOutline size={32} />
              </button>
              <div
                className="origin-top-right transition-all  md:scale-100 scale-90 absolute right-0 duration-150 bg-white mt-2 w-36 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden flex flex-col"
                style={
                  showProf
                    ? { opacity: 1, display: "block" }
                    : { opacity: 0, display: "none" }
                }
              >
                {profileLinks.map((el) => (
                  <Link
                    className="text-type-secondary block text-center px-4 py-2.5 text-sm hover:bg-zinc-200 transition"
                    to={el.path}
                    key={el.name}
                  >
                    {el.name}
                  </Link>
                ))}
                <button
                  onClick={handleLogOut}
                  className="bg-danger w-full py-2.5 px-4 shadow md:hidden text-sm text-mwhite hover:bg-red-700 hover:text-slate-200 transition"
                >
                  Log out
                </button>
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="rounded-md bg-danger py-2 px-4 shadow font-medium md:block hidden text-mwhite hover:bg-red-700 hover:text-slate-200 transition"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="rounded-md bg-primary py-2 px-4 font-medium shadow hover:bg-yellow-500 hover:text-slate-800 transition"
          >
            Log in
          </Link>
        )}
      </div>
      <NavLinks links={links} type="2" />
    </header>
  );
};

export default Header;
