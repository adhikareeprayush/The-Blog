import { Outlet } from "react-router-dom";
import Nav from "../components/reuseable/Nav";
const Landing = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Landing;
