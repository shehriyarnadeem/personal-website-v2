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
            <Icon className="h-6 dark:text-darkHeading text-gray-900 relative top-5" />
            <h4 className={`font-heebo dark:text-darkHeading text-gray-500 text-2xl ${extrastyle}`}>{title}</h4>
        </div>

    )
}

export default Heading;
