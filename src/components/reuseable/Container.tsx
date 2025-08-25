import Nav from "./Nav";
import Hero from "../Hero";
import RecentBlogs from "../RecentBlogs";
import AllBlogs from "../AllBlogs";
import Pagination from "./Pagination";

const Container = () => {
  return (
    <div className="">
      <Nav />
      <Hero />
      <RecentBlogs />
      <AllBlogs />
      <Pagination />
    </div>
  );
};

export default Container;
