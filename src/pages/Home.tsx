import AllBlogs from "../components/AllBlogs";
import Hero from "../components/Hero";
import RecentBlogs from "../components/RecentBlogs";
import Pagination from "../components/reuseable/Pagination";

const Home = () => {
  return (
    <>
      <Hero />
      <RecentBlogs />
      <AllBlogs />
      <Pagination />
    </>
  );
};

export default Home;
