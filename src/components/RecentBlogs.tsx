import blogImage from "../assets/Image.png";
import Card from "./reuseable/Card";

const post = {
  id: "68968189cf50c94680fa27dd",
  title: "Getting Started with Node.js",
  content:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, et quibusdam minus nihil ullam possimus dolorum laborum? Dolor consequuntur nemo corporis, optio repellendus maiores totam. Dolorum, amet! Corporis non laborum eos itaque, harum adipisci culpa architecto sunt, nisi vel esse ut odit, voluptas dolorum nostrum maiores. Aliquam ipsam nesciunt molestias, doloribus adipisci dolores beatae, fugit officiis cumque enim soluta blanditiis suscipit porro ad autem est. Molestias reiciendis quod officia, omnis esse pariatur vitae dolores dignissimos exercitationem beatae doloremque adipisci quas est quae harum optio iure! Iusto, nisi. Quos suscipit, qui dolores explicabo sapiente odit quod, at est accusantium beatae quisquam minima fuga eligendi. Laboriosam eveniet deleniti magnam, deserunt sint, consectetur eum nobis facere incidunt sit, error blanditiis doloribus natus labore animi iure itaque corporis perspiciatis aperiam. Qui hic vitae voluptas quaerat sunt modi, eveniet quia placeat eius distinctio id neque doloribus ipsa, minus suscipit laboriosam voluptates nobis dolores, quo at repellat? Quo possimus dignissimos est ullam, expedita dolorem cum sequi magnam incidunt laborum nemo esse architecto minima suscipit similique, totam aliquid vitae mollitia distinctio. Velit, nemo. Voluptatum iste non saepe ullam, sapiente facere! Quod dolor tempore molestiae nam dolores asperiores! Neque odio nihil quas rerum quia laudantium aperiam itaque. Voluptate vel dolor fugiat laboriosam necessitatibus quisquam dolore mollitia accusantium inventore iure. Minus, molestias.",
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
    <div className="grid grid-cols-2 w-full gap-5">
      <p className="col-span-2 text-xl font-semibold">Recent blog posts</p>
      <div className="xl:col-span-1 col-span-2">
        <Card type={1} post={post} />
      </div>
      <div className="xl:col-span-1 col-span-2 flex flex-col gap-4 w-full h-full justify-between">
        <Card type={2} post={post} hideView={true} />
        <Card type={2} post={post} hideView={true} />
      </div>
      <div className="grid grid-cols-1 gap-4 w-full col-span-2 mt-3">
        <Card type={3} post={post} />
      </div>
    </div>
  );
};

export default RecentBlogs;
