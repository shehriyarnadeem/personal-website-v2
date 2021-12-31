import React from "react";
import Link from "next/link";
const content = [
  { name: "Blog", link: "/blogs", key: 1 },
  { name: "Projects", link: "/projects", key: 2 },
  { name: "About", link: "/about", key: 4 },
];

function NavMenu({open}) {
console.log(open);
  return (
    <div className={open ? "justify-between w-full md:flex md:w-[50%]  mt-[20px] md:order-1":"hidden justify-between w-full md:flex md:w-[50%]  mt-[20px] md:order-1"}>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        {content.map((item) => {
          return (
            <Link href={`${item.link}`} key={item.key}>
              <li
                key={item.key}
                className="text-lg font-light dark:text-green-400  dark:hover:text- hover:text-blue-900 text-gray-900 cursor-pointer font-poppins "
              >
               <span className="block py-2 pr-4 pl-3 dark:text-white dark:hover:text-green-600  text-black hover:text-gray-500 rounded md:bg-transparent md:p-0"> {item.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default NavMenu;
