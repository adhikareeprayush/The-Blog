import { Outlet } from "react-router-dom";
import Nav from "../components/reuseable/Nav";
import { useTheme } from "../provider/ThemeProvider";
const Landing = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`2xl:px-[140px] px-[40px] py-4 flex flex-col gap-4 ${
        theme === "dark" ? "bg-dark" : ""
      }`}
    >
      <Nav />
      <Outlet />
    </div>
  );
};

export default Landing;
