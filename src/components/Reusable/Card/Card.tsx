import { RiArrowRightUpLine } from "react-icons/ri";
import Tag from "../Tag";
import { Link } from "react-router-dom";

interface Data {
  author: string;
  published: string;
  title: string;
  img: string;
  url: string;
  showArrow?: boolean; // Added a new optional property
  description: string;
  tags: Array<{
    text: string;
  }>;
}

interface CardProps {
  data: Data;
  type: string; // Changed from an object to a string
}

const tagsColors = [
  {
    bgColor: "#F9F5FF",
    textColor: "#6941C6",
    text: "Design",
  },
  {
    bgColor: "#FDF2FA",
    textColor: "#3538CD",
    text: "Research",
  },
  {
    bgColor: "#FDF2FA",
    textColor: "#C11574",
    text: "Presentation",
  },
]

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
};

const Card: React.FC<CardProps> = ({ data, type }) => {
  return (
    <Link to={`/blog/${generateSlug(data.title)}`}>
      <div className={`flex  gap-[32px] flex-1 cursor-pointer ${type === "vertical" ? 'flex-col' : 'flex-row'}`}>
      <img src={data.url} alt={data.title} className={`w-full  object-cover ${type == "horizontal" ? "max-h-[246px]" : 'max-h-[228px]'}`} />
      <div className="flex gap-6 flex-col">
        <span className="text-[#6941C6] text-[14px] font-semibold leading-5">
          {data.author} • {data.published}
        </span>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{data.title}</h3>
          {data.showArrow  && <RiArrowRightUpLine className="text-[32px]" />}
        </div>
        <p className="text-[#667085] leading-6">{data.description}</p>
        <div className="flex gap-2">
          {data.tags.map((tag, index) => (
            <Tag
              key={index}
              bgColor={tag.text == "Design" ? tagsColors[0].bgColor : tag.text == "Research" ? tagsColors[1].bgColor : tagsColors[2].bgColor}
              textColor={tag.text == "Design" ? tagsColors[0].textColor : tag.text == "Research" ? tagsColors[1].textColor : tagsColors[2].textColor}
              text={tag.text}
            />
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
