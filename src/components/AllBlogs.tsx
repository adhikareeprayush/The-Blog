import blogImage from "../assets/Image.png";
import Card from "./reuseable/Card";

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

const AllBlogs = () => {
  const count = 6;
  return (
    <div className="flex flex-col w-full mb-4 gap-4">
      <p className="text-xl font-semibold">All blogs</p>
      <div className="grid grid-cols-3 w-full gap-6">
        {Array.from({ length: count }).map((_, idx) => (
          <Card key={idx} type={1} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
