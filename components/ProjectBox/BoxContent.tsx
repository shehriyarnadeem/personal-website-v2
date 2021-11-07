import React from 'react'

function BoxContent({ title, desc, tags }) {
    
    return (
        <div className="flex-col flex justify-between h-[12rem]">
            <div className="flex flex-col space-y-1">
                <h3 className="dark:text-white text-gray-800">{title}</h3>
                <p className="dark:text-white text-gray-800 text-sm">{desc}</p>
            </div>
            {tags.map(tag=>{
                <Tags tag={tag} />
            })}

        </div>
    )
}

const Tags = (tag) => {
   
     return <div className="bg-gray-800 p-1 w-[4.5rem]">
        <p>{tag}</p>
         </div> 
}


export default BoxContent
