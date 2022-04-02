import React from 'react';
import { convertDate } from '../../common/utils/blogUtils';

function BlogDetails({post}) {
const dateAdded = convertDate(post.dateAdded);
  return  (
        <div className=' space-y-10 mt-24'>
         <div className='flex-col space-y-4'>
          <p><span className="text-gray-400 font-bol font-jura">{dateAdded}</span></p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-10 mb-3 text-forePrimary mb-10 dark:text-forePrimary text-black">{post.title}</h1>
         </div>
        <img src={post.coverImage}  className='rounded-lg border-2'/>
        </div>
  );
}

export default BlogDetails;
