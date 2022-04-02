import React from 'react'

function BoxContent({ title, desc, tags, githubLink, projectLink }) {
    
    return (
        <div className="flex-col flex justify-between h-[18rem]">
            <div className="flex flex-col space-y-1">
                <h3 className="dark:text-darkHeading font-bold text-2xl">{title}</h3>
                <p className="dark:text-dark text-light">{desc}</p>
                <a href={projectLink} className="hover:bg-gray-400"><strong>View Project</strong></a>
                {githubLink && <a href={githubLink} className="hover:bg-gray-400"><strong>View Repo</strong></a>}
            </div>

        </div>
    )
}

const Tags = (tag) => {
   
     return <div className="bg-gray-800 p-1 w-[4.5rem]">
        <p>{tag}</p>
         </div> 
}


export default BoxContent
