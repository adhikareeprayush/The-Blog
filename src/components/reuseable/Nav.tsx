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

import moon from "../../assets/icons/moon.png";
import sun from "../../assets/icons/sun.svg";
import { useTheme } from "../../provider/ThemeProvider";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="w-full flex items-center justify-between light:text-dark dark:text-text-white text-[20px]">
      <p className="font-semibold">Your Name</p>
      <ul className="flex items-center gap-4">
        {navMenus.map((menu: NavMenu) => {
          return (
            <li key={menu.url}>
              <Link to={`/${menu.url}`}>{menu.name}</Link>
            </li>
          );
        })}
        <div className="flex items-center border-[2px] border-transparent px-2 py-1 gap-3 rounded-full  dark:bg-white bg-dark">
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <img
                src={sun}
                alt=""
                className="h-[28px] w-[28px] object-contain"
              />
            ) : (
              <div className="w-[28px] h-[28px] bg-black rounded-full"></div>
            )}
          </button>
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <img
                src={moon}
                alt=""
                className="h-[28px] w-[28px] object-contain"
              />
            ) : (
              <div className="w-[28px] h-[28px] bg-white rounded-full"></div>
            )}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
