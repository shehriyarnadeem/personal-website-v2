import React from 'react';
import ReactMarkdown from "react-markdown";
import CodeBlock from '../CodeBlock';
import remarkGfm from 'remark-gfm'
import mardownCss from '../../styles/markdown.module.css'
import rehypeRaw from 'rehype-raw'

function BlogContent({content}) {
  return (
  <div>
      <ReactMarkdown 
       className={mardownCss['reactMarkDown']} 
       rehypePlugins={[rehypeRaw]}
       components={CodeBlock}
       remarkPlugins={[remarkGfm]}
      >
      {content}
    </ReactMarkdown>
    </div>
   );
}

export default BlogContent;
