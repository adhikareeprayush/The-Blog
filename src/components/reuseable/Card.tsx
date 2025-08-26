// Global reusable card component
import type { Post } from "../../types";
import viewBlog from "../../assets/icons/arrow-up-right.svg";
import { format } from "date-fns";

type CardProps = {
  type: 1 | 2 | 3;
  post: Post;
  classname?: string;
  hideView?: boolean;
};

const type1Container = "flex flex-col gap-[32px]";
const type2Container = "grid grid-cols-2 gap-4 h-full";
const type3Container = "flex flex-col gap-4";

const tagsColorPairs = [
  {
    bg: "#F9F5FF",
    text: "6941C6",
  },
  {
    bg: "#EEF4FF",
    text: "#3538CD",
  },
  {
    bg: "#FDF2FA",
    text: "#C11574",
  },
];

const Card = (CardDetails: CardProps) => {
  const formatDate: (dateString: string) => string = (
    dateString: string
  ): string => {
    return format(new Date(dateString), "do MMMM yyyy");
  };
  return (
    <div
      className={`${
        CardDetails.type === 1
          ? type1Container
          : CardDetails.type === 2
          ? type2Container
          : type3Container
      }
      `}
    >
      <img
        src={CardDetails.post.bannerImage || undefined}
        className="h-full object-cover w-full"
      />
      <div className="flex flex-col gap-2 h-full">
        <span className="text-purple font-semibold">
          {CardDetails.post.author.name} •{" "}
          {formatDate(CardDetails.post.createdAt.toISOString())}
        </span>
        <div className="flex items-center justify-between w-full">
          <h4 className="light:text-text-dark dark:text-white text-2xl font-semibold leading-8">
            {CardDetails.post.title}
          </h4>
          {!CardDetails.hideView && (
            <img src={viewBlog} alt="" className="size-6" />
          )}
        </div>
        <p className="light:text-text-light dark:text-light line-clamp-3">
          {CardDetails.post.content}
        </p>
        <div className="flex items-center gap-3">
          {CardDetails.post.tags &&
            CardDetails.post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-full text-xs font-medium text-dark"
                style={{
                  backgroundColor:
                    tagsColorPairs[idx % tagsColorPairs.length].bg,
                  color: tagsColorPairs[idx % tagsColorPairs.length].text,
                  // Ensure color does not change with theme by using inline styles only
                }}
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
