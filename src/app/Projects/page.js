"use client"
import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Link from 'next/link';
import { FullStackCards, MLCards, MScCards, ProjectManagement,  } from './projectData';
//import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {motion} from 'framer-motion';
import "./page.module.css"


function Projects() {


    const [selected,setSelected] = useState("Full Stack Projects");

    const projectData = {
      "Full Stack Projects": FullStackCards,
      "ML - Projects": MLCards,
      "MSc - Project": MScCards,
      "Project Management":ProjectManagement
    };
  
    const handleTabChange = (newTab) => {
      if (newTab !== selected) setSelected(newTab);
    };

  return (
    <div className=''>
      <motion.div 
        className='flex lg:flex-row flex-col space-y-[-5px] lg:space-y-[0px] lg:gap-7 items-center justify-center mt-52' 
        style={{fontFamily:"roboto"}}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          //scale: { visualDuration: 0.4 },
        }} 
      >
        {[
          "Full Stack Projects",
          "Project Management", 
          "ML - Projects", 
          "MSc - Project", 
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 rounded-md transition-all cursor-pointer ${
              selected === tab ? "text-white font-bold" : "text-[#808080]"
            }`}
          >
            <p>{tab.toUpperCase()}</p>
          </button>
        ))}
      </motion.div>

      {/* Cards */}
      <div className='mt-16 grid grid-cols-12 items-center justify-center'>
        <div className='lg:col-span-[2]'></div>
        <div className='lg:col-span-[8] col-span-10 grid-cols-1 grid lg:grid-cols-2 items-center justify-center gap-7'>
          {projectData[selected].map((card, index) => {
            const cardContent = (
              <motion.div
                key={card.id || index}
                className="mt-5 p-1 bg-[#181818] border rounded-2xl shadow-[4px_4px_-4px_-3px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-black p-6 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                  <Image src={card.thumbnail} width={500} height={500} style={{ width: "100%", height: "auto" }} alt={`${card.id}`} className="rounded-lg object-cover w-full h-48 mb-4"/>
                  <div className="text-xl font-bold text-white">
                    {card.content}
                  </div>
                </div>
              </motion.div>
            );

            return selected === "Project Management" ? (
              <Link href={card.link} key={card.id || index} className="block">
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })}
        </div>
        <div className='lg:col-span-[2]'></div>
      </div>

    </div>
  )
}

export default Projects




// {projectData[selected].map((card,index) => (
//   <motion.div
//     key={card.id || index} 
//     className="mt-5 p-1 bg-[#181818] border rounded-2xl shadow-[4px_4px_-4px_-3px_rgba(0,0,0,0.5)]"
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.3, delay: card.id * 0.1 }}
//   >
    
//     <div
//       key={card.id}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: card.id * 0.1 }}
//       className="bg-black p-6 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
//     >
//       {/* <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
//       <p className="mt-2 text-sm text-gray-600"></p> */}
//       <Image src={card.thumbnail} width={500} height={500} style={{ width: "100%", height: "auto" }} alt={`${card.id}`} className="rounded-lg object-cover w-full h-48 mb-4"/>
//       <div className="text-xl font-bold text-white">
//         {card.content}
//       </div>
//     </div>
    
//   </motion.div>
// ))}