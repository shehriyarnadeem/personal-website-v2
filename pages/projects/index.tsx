import React from 'react'
import Heading from '../../components/Heading'
import { LightBulbIcon } from "@heroicons/react/outline";
import Box from '../../components/ProjectBox/Box'
const projects = [{
    title: 'Personal Website',
    desc: "My presonall project",
    tags: ["Next js", "Tailwind"],
    link: "http://localhost:3000/",
    id: 1
},
{
    title: 'Madox Productions',
    desc: "A Media Production web application Built Next JS",
    tags: ["NextJs", "Youtube APIs", "CSS"],
    link: "https://www.madoxproductions.com/",
    id: 2
},
{
    title: 'Covid Tracker',
    desc: "Covid 19 Tracker application for monitoring realtime patiens",
    tags: ["Firebase", "React"],
    link: "https://covid19-tracker-a3a8b.firebaseapp.com/",
    id: 3
},
{
    title: 'Columbian Coffee App',
    desc: "Real world columbian coffee admin managment system",
    tags: ["Firebase", "React"],
    link: "https://colombiancoffeeclub-f6642.web.app/#/login",
    id: 4
},
{
    title: 'Netflix Clone',
    desc: "A clone i made of Netlix includes the Front-end part only",
    tags: ["React", "CSS"],
    link: "https://netflixclone-94e85.web.app",
    id: 5
},
{
    title: 'Product Market Comparision Web application',
    desc: "A Hybrid Mobile application for live market prices and feature comparisions",
    tags: ["React Native", "React Animations"],
    link: "https://youtu.be/jsDDnA0J-M4",
    id: 6
},
{
    title: 'Breath Regulation Monitoring App',
    desc: "A Hybrid mobile application IOS and Android for breath regulation monitoring.",
    tags: ["React Native"],
    link: "https://youtu.be/qMFtz0Ikfpc",
    id: 7
},
{
    title: 'Travel Log',
    desc: "A full stack application to store / list places you have traveled.",
    tags: ["React", "CSS"],
    link: "https://github.com/shehriyarnadeem/TravelLog",
    id: 8
},
{
    title: 'Advance Note Taking application',
    desc: "A full Stack application Todo Application for monitoring your daily tasks",
    tags: ["React", "CSS"],
    link: "https://github.com/shehriyarnadeem/TravelLog",
    id: 9
}
]

const libraries = [
    {
        title: 'Npm package Extension Shadow Maker',
        desc: "A Npm library for creating and applying box-shadow with easy props",
        tags: ["Javascript", "Css"],
        link: "https://github.com/shehriyarnadeem/shadowMaker",
        id: 1
    },
    {

        title: "Common Errors Middlewares",
        desc: "Common Middlewares and Errors is a Node js library which provides a clean structure for all your customized error handlers and middlewares.",
        tags: ["Node", "Js"],
        link: "https://github.com/shehriyarnadeem/common-errors-middlewares",
        id: 2
    },
    {
        title: 'Letra Extension contribution',
        desc: "Urdu language addition as a opensource contribution in Letra extension",
        tags: ["React", "Node Js"],
        link: "https://github.com/shehriyarnadeem/letra-extension",
        id: 3
    },


]
function Projects() {

    return (
        <div className="min-h-screen lg:p-0 md:p-0 p-9" >
            <div className="flex flex-col lg:mx-auto  lg:w-[66%]">
                <div>
                    <Heading title="Projects" Icon={LightBulbIcon} extrastyle="font-bold" />
                    <p className="my-[10px] lg:pl-[5px] pl-[15px] font-sans tracking-[0.5px] text-xl w-[39rem] dark:text-dark text-light">Some of my recent works and contributions</p>
                </div>
                <div className="flex flex-wrap">
                    {projects.map(project => {
                        return <a key={project.id} href={project.link ? project.link : ''}>
                            <Box title={project.title} desc={project.desc} tags={project.tags} />
                        </a>
                    })}
                </div>
                <div>
                    <Heading title="Libraries" Icon={LightBulbIcon} extrastyle="font-bold" />
                    <p className="my-[10px] lg:pl-[5px] pl-[15px] font-sans tracking-[0.5px] text-xl w-[39rem] dark:text-white text-gray-700">Open source tools i have built</p>
                </div>
                <div className="flex flex-wrap ">
                    {libraries.map(library => {
                        return <a key={library.id} href={library.link ? library.link : ''}>
                            <Box title={library.title} desc={library.desc} tags={library.tags} />
                        </a>
                    })}
                </div>
                <div className="py-9"></div>
            </div>

        </div>
    )
}


// export async function getStaticProps() {

//     const projects = await gitApiRequest("https://api.github.com/users/shehriyarnadeem/projects")

// return {
//     props: { projects }
// }
// }


export default Projects
