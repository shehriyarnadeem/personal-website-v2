import React from "react";
import Link from "next/link";
const content = [
  { name: "Blog", link: "/blogs", key: 1 },
  { name: "Projects", link: "/projects", key: 2 },
  { name: "About", link: "/about", key: 4 },
  { name: "Home", link: "/", key: 5 },
];

function NavMenu() {
  return (
    <div className="flex items-center ">
      <ul className="hidden lg:flex lg:space-x-7">
        {content.map((item) => {
          return (
            <Link href={`${item.link}`} key={item.key}>
              <li
                key={item.key}
                className="text-lg font-light dark:text-gray-300  dark:hover:text-accent hover:text-blue-900 text-gray-900 cursor-pointer font-poppins "
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default NavMenu;
