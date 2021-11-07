import React from "react";
import Introduction from "../../components/Home/Introduction";
import CardList from "../../components/Card";
import Heading from "../../components/Heading";

import { PencilIcon, LightBulbIcon } from "@heroicons/react/outline";



function Home(props) {

  const blogs=[{
    
      data:{
        user:{
          publication:
            {posts:[{
              brief:"123",
              coverImage:'123',
              slug:"123",
              title:'123'
            },
            {
              brief:"123",
              coverImage:'123',
              slug:"123",
              title:'123'
            }
          ]
            }
          
        }
      }
    
   }]

  const {
    blogs: {
      data: {
        user: {
          publication: { posts },
        },
      },
    },
  } = props ? props.props: blogs;
  return (
    <div>
      <Introduction />
      <div className="flex-1">
        <Heading title="WRITINGS" Icon={PencilIcon} />
        <div className="py-4 lg:px-0 px-3 mx-auto">
          {posts.length > 0 ?
            posts.map((post) => {
              return<CardList post={post} key={post.id}/>;
            }): (<div key={Math.random()}></div>)}
        </div>
      </div>

      <div className="py-11"></div>
    </div>
  );
}

export default Home;
