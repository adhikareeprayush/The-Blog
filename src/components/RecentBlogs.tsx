import blogImage from "../assets/Image.png";
import Card from "./reuseable/Card";
import { format } from "date-fns";

const post = {
  id: "68968189cf50c94680fa27dd",
  title: "Getting Started with Node.js",
  excerpt:
    "Learn the basics of Node.js development in this comprehensive guide for beginners.",
  bannerImage: blogImage,
  isMarkdown: true,
  author: {
    id: "68968093cf50c94680fa27d3",
    username: "prayush",
    name: "Prayush Adhikari",
    avatar: null,
  },
  published: true,
  views: 1,
  likes: ["68968093cf50c94680fa27d3"],
  tags: ["Technology", "Education"],
  readTime: 1,
  comments: [
    {
      id: "689681b7cf50c94680fa27ef",
      content: "Great post! Very informative and well-written.",
      author: {
        id: "68968093cf50c94680fa27d3",
        username: "prayush",
        name: "Prayush Adhikari",
        avatar: null,
      },
      createdAt: new Date("2025-08-08T23:01:11.534Z"),
    },
  ],
  createdAt: new Date("2025-08-08T23:00:25.921Z"),
  updatedAt: new Date("2025-08-08T23:01:11.540Z"),
  slug: "updated-getting-started-with-node-js-1754694055385",
};
const RecentBlogs = () => {
  return (
    <div className="grid grid-cols-2 w-full gap-4">
      <p className="col-span-2 text-xl font-semibold">Recent blog posts</p>
      <div className="col-span1">
        <Card type={1} post={post} />
      </div>
      <div className="col-span-1 flex flex-col gap-4 w-full h-full justify-between">
        <Card type={2} post={post} hideView={true} />
        <Card type={2} post={post} hideView={true} />
      </div>
      <div className="grid grid-cols-1 gap-4 w-full col-span-2">
        <Card type={2} post={post} />
      </div>
    </div>
  );
};

export default RecentBlogs;
