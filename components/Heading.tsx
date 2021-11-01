import React from 'react'
import { PencilIcon } from "@heroicons/react/outline";

interface HeadingProps {
    Icon?: any,
    title: string,
    extrastyle?: string

}
function Heading({ Icon, title, extrastyle }: HeadingProps) {
    return (

        <div className="flex space-x-3 mt-16 lg:px-0 px-3">
            <Icon className="h-6 dark:text-accent text-gray-900" />
            <h4 className={`font-heebo dark:text-accent text-gray-900 ${extrastyle}`}>{title}</h4>
        </div>

    )
}

export default Heading;
