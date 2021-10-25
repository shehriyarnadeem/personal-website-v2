import React from 'react'
import Introduction from '../../components/Home/Introduction';
import CardList from '../../components/Card'
import Heading from '../../components/Heading'

import { PencilIcon, LightBulbIcon } from "@heroicons/react/outline";

function Home({ props }) {


    // const { blogs: { data: { user: { publication: { posts } } } } } = props;
    // console.log(props);
    return (
        <div>
            <Introduction />
            <Heading title="WRITINGS" Icon={PencilIcon} />
            <div className="py-4 lg:px-0 px-3">
                {/* {posts && posts.map(post => {
                    return <CardList post={post} />
                })} */}
            </div>


            <div className="py-11"></div>
        </div>
    )
}




export default Home
