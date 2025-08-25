import { useState } from "react";
import arrowLeft from "../../assets/icons/arrow-left.svg";

const Pagination = () => {
  const paginations = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={arrowLeft} alt="" className="size-6" />
        <span className="text-sm text-[#667085]">Previous</span>
      </div>
      <div className="flex items-center gap-2">
        {Array.from({ length: paginations }).map((_, idx) => (
          <button
            key={idx}
            className={`flex items-center text-sm font-medium leading-5 ${
              currentPage === idx + 1
                ? "text-[#7F56D9] bg-[#F9F5FF]"
                : "text-[#667085]"
            }  px-3 py-1 rounded-lg`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#667085]">Next</span>
        <img src={arrowLeft} alt="" className="size-6 transform rotate-180" />
      </div>
    </div>
  );
};

export default Pagination;
