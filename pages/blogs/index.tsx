import React from 'react'
import CardList from '../../components/Card'
import Heading from '../../components/Heading'
import { getUserArticles } from '../../lib/GraphQlQueries';
import { sendGraphQlQueryPost } from '../../lib/helpers'
import { PencilIcon } from "@heroicons/react/outline";
import Image from 'next/image'
function Blogs(params) {
    const { blogs: { data: { user: { publication: { posts } } } } } = params;

    return (
        <div className="min-w-screen-lg min-h-screen bg-primary dark:bg-primary" >
            <div className="flex flex-col lg:mx-auto  lg:w-[66%]">
                <div>
                    <Heading title="Blogs" Icon={PencilIcon} extrastyle="font-bold" />
                    <p className="my-[10px] lg:pl-[5px] pl-[15px] font-sans tracking-[0.5px] text-xl w-[39rem]">Sometimes i write about things i learn in web development and also stuff that i find intresting</p>
                </div>
                <div className="flex flex-col  py-9">
                    {posts.map(post => {
                        return (
                            <>
                                <div className="">
                                    <Image src={post.coverImage} className="rounded-lg shadow-lg" width={550} height={300} objectFit="contain" />
                                </div>
                                <CardList post={post} />
                            </>

                        )
                    })}

                </div>
                <div className="py-9"></div>
            </div>

        </div>
    )
}

export async function getStaticProps() {

    const blogs = await sendGraphQlQueryPost(getUserArticles("shehriyarnadeem", 0));

    return {
        props: { blogs }
    }
}

export default Blogs
