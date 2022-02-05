import React from 'react'
import BoxContent from './BoxContent'
function Box({ title, desc, tags }) {
    return (
        <div className=" transition duration-500 ease-in-out h-auto w-[13rem] px-3 py-3 dark:bg-green-900 bg-gray-200 bg-footer mt-7  transform hover:-translate-y-1 hover:scale-80 hover:border-l-8 hover:border-b-8 dark:hover:border-green-500 hover:border-gray-500 hover:shadow-2xl filter drop-shadow-3xl hover:rounded-md cursor-pointer mr-[12px] ">

            <BoxContent title={title} desc={desc} tags={tags} />


        </div>
    )
}

export default Box
