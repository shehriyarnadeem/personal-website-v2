import React from 'react'
import Heading from '../../components/Heading'
import {  EmojiHappyIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";

function Aboutme() {

    return (
        <div className="min-w-screen-lg min-h-screen bg-primary dark:bg-primary" >
            <div className="flex flex-col lg:mx-auto  lg:w-[66%]">
                <div>
                    <Heading title="About Me" Icon={EmojiHappyIcon} extrastyle="font-bold" />
                    <p className="my-[10px] lg:pl-[5px] pl-[15px] font-sans tracking-[0.5px] text-xl w-[39rem] dark:text-white text-gray-700">I'm Shehriyar, I work full-time as a Web engineer at 10pearls, Pvt. In my free time, I study Full stack development. My goal is to write useful apps and contribute to open source projects while working a full-time job.</p>
                </div>
            </div>
            <div className="flex flex-col lg:mx-auto  lg:w-[66%]">
                <div>
                    <Heading title="Why make this website?" Icon={QuestionMarkCircleIcon} extrastyle="font-bold" />
                    <p className="my-[10px] lg:pl-[5px] pl-[15px] font-sans tracking-[0.5px] text-xl w-[39rem] dark:text-white text-gray-700">I made this website to learn what actually goes into web development. From planning, design, development, launch, and maintenance. For sure there are other things that I have yet to encounter, and I’m ready to learn them. This also serves a motivation for me to continue making projects because now I finally have a place to showcase them.</p>
                </div>
            </div>
        </div>
    )
}


export default Aboutme