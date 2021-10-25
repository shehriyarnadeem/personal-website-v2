import React from 'react'
import Link from 'next/link'
const content = [
    { name: 'Blog', link: "/blogs", key: 1 },
    { name: 'Work', link: "/work", key: 2 },
    { name: 'Client', link: "/client", key: 2 },
    { name: 'About', link: "/about", key: 2 },
]

function NavMenu() {
    return (
        <div className="flex items-center ">
            <ul className="hidden lg:flex lg:space-x-7">
                {content.map(item => {
                    return <>
                        <Link href={`${item.link}`}>
                            <li key={item.key} className="text-lg font-extrabold dark:text-gray-300  dark:hover:text-accent hover:text-blue-900 text-gray-900 cursor-pointer font-poppins ">{item.name}
                            </li>
                        </Link></>
                })}

            </ul>
        </div >
    )
}

export default NavMenu
