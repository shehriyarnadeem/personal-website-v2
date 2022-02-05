import React from "react";
import Link from "next/link";

const content = [
  { name: "Blog", link: "/blogs", key: 1 },
  { name: "Projects", link: "/projects", key: 2 },
  { name: "About", link: "/about", key: 4 },
];

function NavMenu({open}) {
  return (
    <div className={open ? "justify-between w-full md:flex md:w-[50%]  mt-[20px] md:order-1":"hidden justify-between w-full md:flex md:w-[50%]  mt-[20px] md:order-1"}>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        {content.map((item) => {
          return (
            <Link href={`${item.link}`} key={item.key}>
              <li
                key={item.key}
                className="text-lg cursor-pointer font-poppins font-bold  "
              >
               <span className=" dark:text-dark text-light text-xl mb-4 dark:hover:text-white hover:text-blue-600">{item.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default NavMenu;
