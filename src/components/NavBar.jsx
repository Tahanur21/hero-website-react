
// import { DiGithubBadge } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { NavLink } from "react-router";

const NavBar = () => {

  const links = (
  <>
    <NavLink
      className={({ isActive }) =>
        `transition-all duration-300 ${
          isActive
            ? "underline bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
            : ""
        }`
      }
      to={"/"}
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        `transition-all duration-300 ${
          isActive
            ? "underline bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
            : ""
        }`
      }
      to={"/app"}
    >
      App
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        `transition-all duration-300 ${
          isActive
            ? "underline bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
            : ""
        }`
      }
      to={"/installation"}
    >
      Installation
    </NavLink>
  </>
)
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start lg:px-8">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-bold">
             {links}
            </li>
          </ul>
        </div>
        <div className="flex items-center btn btn-ghost">
          <img className="w-6 h-6 object-cover" src="/assets/logo.png" alt="_blank" />
          <a href="/" className="text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="flex flex-row">
             {links}
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-5">
        <a
          href="https://github.com/Tahanur21/hero-website-react"
          className="btn btn-primary flex items-center gap-2"
        >
          <DiGithubBadge className="text-xl" /> Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;
