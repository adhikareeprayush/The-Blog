import { Outlet } from "react-router-dom";
import Nav from "../components/reuseable/Nav";
import { useTheme } from "../provider/ThemeProvider";
import Footer from "../components/Footer";
const Landing = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`2xl:px-[140px] px-[40px] min-h-screen py-4 flex flex-col gap-4 ${
        theme === "dark" ? "bg-dark" : ""
      }`}
    >
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Landing;
