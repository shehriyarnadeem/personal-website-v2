import React from 'react'
import Link from 'next/link'
function CardList({ post }) {

    return (
        <div className="flex flex-col space-y-2">
            <CardItem title={post.title} brief={post.brief} slug={post.slug} dateAdded={post.dateAdded}  />
        </div>
    )
}

const CardItem = ({ title, brief, slug,dateAdded }) => {
    const date = new Date(dateAdded).toLocaleString('default', { month: 'long', year:'2-digit' });
    const path = `/blogs/${slug}`
    return (
        <>
           <Link href={path}>
            <div className=" transition duration-500 ease-in-out group flex items-center   hover:text-white  rounded-md transform hover:scale-x-110 ">

                <div className="flex flex-col space-y-2 py-3 px-3 cursor-pointer max-w-2xl">
                    <h3 className="font-jura font-semibold dark:group-hover:text-white group-hover:text-blue-900">{title}</h3>
                    <p className='dark:group-hover:text-gray-300 group-hover:text-gray-800 py-3 dark:text-gray-300 text-gray-800'>{brief}</p>
                </div>
                <div className=" mt-[51px]  pr-4 dark:group-hover:text-white">
                    <p>{date}</p>
                </div>
            </div>
            </Link>
        </>
    );

}
export default CardList
