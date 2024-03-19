import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../styles/navbar.css";

function Header() {
  return (
    <>
      <nav
        className="w-full h-[90px] flex justify-around items-center bg-transparent border border-gray-300
       "
      >
        <Logo />

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `w-[80%] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/crypto"
          end
          className={({ isActive }) =>
            `w-[80%] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          Crypto
        </NavLink>

        <NavLink
          to="/trending"
          className={({ isActive }) =>
            `w-[80%] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          Trending
        </NavLink>

        <NavLink
          to="/saved"
          className={({ isActive }) =>
            `w-[80%] text-base text-center font-nunito m-2.5 ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
            } border-0 cursor-pointer rounded capitalize font-semibold`
          }
        >
          Saved
        </NavLink>
      </nav>
      ;
    </>
  );
}

export default Header;
