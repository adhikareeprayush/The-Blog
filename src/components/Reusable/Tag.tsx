import React from 'react'

interface TagProps {
    bgColor: string;
    textColor: string;
    text: string;
}

const Tag: React.FC<TagProps> = ({ bgColor, textColor, text }) => {
    return (
        <div
            className="rounded-full px-[10px] py-[2px] text-[14px] leading-5 text-center"
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            {text}
        </div>
    );
};

export default Tag
