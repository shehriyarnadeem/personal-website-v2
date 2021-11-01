import React from 'react'
import Link from 'next/link'
function CardList({ post }) {

    return (
        <div className="flex flex-col space-y-2">
            <CardItem title={post.title} brief={post.brief} slug={post.slug}  />
        </div>
    )
}

const CardItem = ({ title, brief, slug }) => {
    const path = `/blogs/${slug}`
    return (
        <>
           <Link href={path}>
            <div className="group flex items-center  dark:hover:bg-hoverCard hover:bg-hoverCard   hover:text-white  rounded-md ">

                <div className="flex flex-col space-y-2 py-3 px-3 cursor-pointer max-w-2xl ">
                    <h3 className="font-jura font-semibold dark:group-hover:text-white group-hover:text-blue-900 ">{title}</h3>
                    <p className='dark:group-hover:text-gray-300 group-hover:text-gray-800 py-3'>{brief}</p>
                </div>
                <div className=" mt-[51px]  pr-4 dark:group-hover:text-gray-900  dark:group-hover:white">
                    <p>June 2021</p>
                </div>
            </div>
            </Link>
        </>
    );

}
export default CardList
