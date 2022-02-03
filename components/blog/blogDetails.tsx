import React from 'react';
import { convertDate } from '../../common/utils/blogUtils';

function BlogDetails({post}) {
const dateAdded = convertDate(post.dateAdded);
  return  (
        <div className='space-y-10'>
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
        <img src={post.coverImage} />
        <div className="flex items-center space-x-4">
        <img className='rounded-full h-10 w-10' 
            src={post.author?.photo} 
            alt="author_image" />
        <div className="flex-col">
        <h3>{post.author?.name}</h3> 
        <p>Published on <span className="text-gray-500 font-bold">{dateAdded}</span></p>
        </div>
        </div>
        </div>
  );
}

export default BlogDetails;
