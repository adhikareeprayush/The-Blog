import { useState } from "react";
import Card from "../Reusable/Card/Card";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const blogs = [
  {
    id: 1,
    title: "Understanding React Server Components",
    description: "A deep dive into React Server Components and their benefits.",
    imageUrl: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Next.js 14 Features You Should Know",
    description: "Exploring the new features in Next.js 14.",
    imageUrl: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which?",
    description: "A comparison between CSS Grid and Flexbox.",
    imageUrl: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Tailwind CSS v4: What's New?",
    description: "An overview of the latest updates in Tailwind CSS v4.",
    imageUrl: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "State Management in React: Redux vs Context API",
    description: "Choosing the right state management tool for your React app.",
    imageUrl: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "TypeScript vs JavaScript: Should You Switch?",
    description: "Understanding the benefits of TypeScript over JavaScript.",
    imageUrl: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="w-full p-4 flex flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {currentBlogs.map((blog) => (
          <Card 
            key={blog.id}
            data={{
                title: blog.title,
                description: blog.description,
                url: blog.imageUrl,
                tags: [
                    {
                        text: "Technology"
                    },
                    {
                        text: "React"
                    }
                ], 
                img: blog.imageUrl,
                author: "John Doe",
                published: "1 Jan 2023"
                }}
            type="vertical"
        />
        ))}
      </div>
      <div className="flex justify-between w-full">
        <button
          className="px-4 py-2 bg-gray-100 text-gray-700 flex items-center gap-2 rounded disabled:opacity-50 cursor-pointer"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
            <BiLeftArrowAlt />
            <span>Previous</span>
        </button>
        <span className="flex items-center gap-4">
            { 
                Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                    key={page}
                    className={`px-4 py-2 shadow-sm text-gray-700 rounded cursor-pointer ${currentPage === page ? 'bg-violet-200 text-white' : 'bg-white'}`}
                    onClick={() => setCurrentPage(page)}
                    >
                    {page}
                    </button>
                ))
                }
        </span>
        <button
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded disabled:opacity-50 flex items-center gap-2 cursor-pointer"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <span>Next</span>
            <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
