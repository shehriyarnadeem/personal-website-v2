import React from 'react'
import Image from 'next/dist/client/image'
import Button from '../UI/Button'
import { motion } from "framer-motion"
function Introduction() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row lg:justify-evenly space-x-14 lg:h-[70vh]  ">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 20, duration: 1 }} className="flex flex-auto flex-col max-w-lg max-h-56 self-center space-y-9 lg:px-0 px-5">
                    <h2 className="md:text-center lg:text-left">Hi, I’m Shehriyar. I’m an experienced Web Engineer.</h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 4 }}
                        transition={{ type: 'spring', stiffness: 20, delay: 1 }}
                        className="flex lg:self-start self-center">
                        <Button title="Read Blog" className="btn btn-lg rounded-full bg-base-100 dark:text-gray-900 dark:bg-white  text-white items-center" />
                    </motion.div>
                </motion.div>
                <motion.div className="avatar self-center right-16"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 20 }}
                    transition={{ type: 'spring', duration: 10 }}
                >
                    <div className="flex ml-10 sm:align-center">
                        <div className="p-1 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full">
                            <div className="p-1 bg-gradient-to-r from-green-900 via-green-600 to-green-50 rounded-full">
                                <Image
                                    src="/avatar.png"
                                    height={400}
                                    width={400}
                                    className='w-32 h-32 rounded-full'
                                    objectFit="contain"
                                />

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Introduction
