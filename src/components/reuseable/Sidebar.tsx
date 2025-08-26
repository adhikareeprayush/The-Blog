import { useTheme } from "../../provider/ThemeProvider";
import moon from "../../assets/icons/moon.png";
import sun from "../../assets/icons/sun.svg";
import close from "../../assets/icons/close.svg";

const Sidebar = ({
  isOpen,
  setSidebar,
}: {
  isOpen: boolean;
  setSidebar: (isOpen: boolean) => void;
}) => {
  const { theme, toggleTheme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed dark:bg-[#121212] bg-white flex flex-col items-center justify-center h-[100vh] w-[100vw] overflow-hidden">
      <p className="font-bold">Your Name</p>
      <ul className="flex flex-col gap-3">
        <li>Blog</li>
        <li>Projects</li>
        <li>About</li>
        <li>Newsletter</li>
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
      <button onClick={() => setSidebar(false)}>
        <img src={close} alt="" className="size-6" />
      </button>
    </div>
  );
};

export default Sidebar;
