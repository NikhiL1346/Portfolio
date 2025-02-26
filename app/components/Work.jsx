import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import {motion} from 'motion/react';

const Work = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className="w-full px-[12%] py-10 scroll-mt-20 ">
      <motion.h4 
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.3}}
      className="text-center mb-2 text-lg font-Ovo ">My Portfolio</motion.h4>
      <motion.h2 
   initial={{opacity:0,y:-20}}
   whileInView={{opacity:1,y:0}}
   transition={{duration:0.5,delay:0.5}}
      className="text-center text-5xl font-Ovo">My latest Work</motion.h2>
    
    
    <motion.p
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:0.7}}
    className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
     SOme text
    </motion.p>

    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.6,delay:0.9}}
    className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map((project,index)=>(
            <motion.div 
           
      whileHover={{scale:1.05}}
      transition={{duration:0.3}}
            key={index} 
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
            cursor-pointer group"
            style={{backgroundImage:`url(${project.bgImage})` 
            }}>
               <motion.div className="bg-white w-10/12 rounded-md absolute 
               bottom-5 left-1/2  -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
               group-hover:bottom-7">

               <motion.div >
                   <motion.h2 className="font-semibold">{project.title}</motion.h2>
                   <p className="text-sm text-gray-700">{project.description}</p>
               </motion.div>
               <motion.div className="border rounded-full border-black w-9 aspect-square flex
               items-center justify-center shadow-[2px_2_0_#000] hover:group-hover:bg-lime-300 transition">
                   <Image src={assets.send_icon} alt="send icon"
                    className="w-5"/>
               </motion.div>
               <button>Show More</button>
               </motion.div>
            </motion.div>
        ))}
    </motion.div>
    <motion.a 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:1.1}}
    href="" className="w-max flex items-center justify-center gap-2 text-gray-700
     border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
      hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">Show more
      <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt="right arrow" 
    className="w-4"/>
    </motion.a>
    </motion.div>
  );
};

export default Work;
