import React from "react";
import Introduction from "../../components/Home/Introduction";
import CardList from "../../components/Card";
import Heading from "../../components/Heading";

import { PencilIcon, LightBulbIcon } from "@heroicons/react/outline";

function Home({ props }) {
  const {
    blogs: {
      data: {
        user: {
          publication: { posts },
        },
      },
    },
  } = props;

  return (
    <div>
      <Introduction />
      <div className="flex-1">
        <Heading title="WRITINGS" Icon={PencilIcon} />
        <div className="py-4 lg:px-0 px-3 mx-auto">
          {posts &&
            posts.map((post) => {
              return <CardList post={post} />;
            })}
        </div>
      </div>

      <div className="py-11"></div>
    </div>
  );
}

export default Home;
