// Update the import path if your types are in a different file, e.g. '../../types'
import { Link } from "react-router-dom";
import type { NavMenus, NavMenu } from "../../type";

const navMenus: NavMenus = [
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Newsletter",
    url: "/newsletter",
  },
];

const Nav = () => {
  return (
    <nav className="w-full flex items-center justify-between text-dark text-[20px]">
      <p className="font-semibold">Your Name</p>
      <ul className="flex items-center gap-4">
        {navMenus.map((menu: NavMenu) => {
          return (
            <li key={menu.url}>
              <Link to={`/${menu.url}`}>{menu.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
