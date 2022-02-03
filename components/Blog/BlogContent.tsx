import React from 'react';
import ReactMarkdown from "react-markdown";
import CodeBlock from '../CodeBlock';
import remarkGfm from 'remark-gfm'

function BlogContent({content}) {
  return (
  <div>
      <ReactMarkdown 
       className=" dark:text-white text-gray-600 text-[1.25rem] leading-[1.8] font-heebo" 
       components={CodeBlock}
       remarkPlugins={[remarkGfm]}
      >
      {content}
    </ReactMarkdown>
    </div>
   );
}

export default BlogContent;
