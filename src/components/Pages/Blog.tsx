import { useParams } from "react-router-dom";
import AllBlogs from "../AllBlogs/AllBlogs";

const blogPosts = [
  {
    title: "How to create a blog from scratch",
    slug: "how-to-create-a-blog-from-scratch",
    content: "This is the content of the blog post",
  },
  {
    title: "How to create a blog from scratch",
    slug: "how-to-create-a-blog-from-scratch",
    content: "This is the content of the blog post",
  },
  {
    title: "How to create a blog from scratch",
    slug: "how-to-create-a-blog-from-scratch",
    content: "This is the content of the blog post",
  },
];

const Blog = () => {
  const { slug } = useParams();
  console.log(slug);

  if (!slug) {
    return <h2 className="text-center text-xl">Blog post not found</h2>;
  }

  // extract the blog post from the slug
  const blogPost = blogPosts.find((post) => post.slug === slug);
  console.log(blogPost);
  if (!blogPost) {
    return <h2 className="text-center text-xl">Blog post not found</h2>;
  }

  return (
    <>
      <AllBlogs />
    </>
  );
};

export default Blog;
