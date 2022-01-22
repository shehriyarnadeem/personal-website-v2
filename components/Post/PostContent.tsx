import React from "react";
import PostHeader from "../Post/PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import CodeBlock from "../CodeBlock"

function PostContent({ title, image, date, content }) {
  return (
    <article className="w-[95%] max-w-[78rem] mx-auto ">
      <PostHeader title={title} image={image} />
      <div>
        <Image src={image} width={1000} height={500} objectFit="contain" />
      </div>
      <ReactMarkdown className="py-[1rem] text-2xl dark:text-white text-gray-600 leading-[1.99]" components={CodeBlock}>{content}</ReactMarkdown>
      <div className="py-[5rem]"></div>
    </article>
  );
}

export default PostContent;
