"use client"
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StickyNotes from '../StickyNotes';
import Link from 'next/link';
import './About.css'
import ProjectLink from '../ProjectLink/ProjectLink';
import { LinkPreview } from '../LinkPreview';
import Image from 'next/image';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { motion, useAnimation, useInView} from 'framer-motion';
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"


function About() {

    const base_url = "https://www.paulsonmathew.com"

  return (
    <div id='about' className='about lg:h-[100vh] scroll-mt-[170px]  lg:scroll-mt-[200px]'>
        <div   
            className='grid grid-cols-12'
        >
            <div className='lg:col-span-[2] col-span-2'></div>
            <motion.div 
                className='aboutUs lg:col-span-4 col-span-8 mt-10'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{duration:0.7,ease: "easeInOut"}}
            >
                <div className='p'>
                    <span className='block mt-2.5 text-center'>
                        I’m a passionate
                        <LinkPreview imageSrc='/images/underConstruction.png' isStatic url={`${base_url}/UnderConstruction`} className='text-white, font-bold'> Project Coordinator</LinkPreview>, 
                        <LinkPreview imageSrc='/images/fullStackDeveloper.png' isStatic url={`${base_url}/Projects`} className='text-white, font-bold'> Full-Stack Developer</LinkPreview>, 
                        <LinkPreview imageSrc='/images/ml.png' isStatic url={`${base_url}/Projects`} className='text-white, font-bold'> ML Engineer</LinkPreview>, and  
                        who thrives on building innovative solutions and managing impactful projects. With expertise in software development and machine learning, I blend problem-solving with structured execution.
                    </span>
                    <span className='block mt-2.5 text-center'>
                        Beyond tech, I’m a 
                        <LinkPreview url={`${base_url}/Photography`} className='text-white, font-bold'> Photographer</LinkPreview>, 
                        <LinkPreview imageSrc='/images/projectImages/bSharpMusic.png' isStatic url={`${base_url}/UnderConstruction`} className='text-white, font-bold'> Vocalist</LinkPreview>, 
                        <LinkPreview imageSrc='/images/projectImages/bSharpMusic.png' isStatic url={`${base_url}/UnderConstruction`} className='text-white, font-bold'> Pianist</LinkPreview>, 
                        <LinkPreview imageSrc='/images/underConstruction.png' isStatic url={`${base_url}/UnderConstruction`} className='text-white, font-bold'> Paper Artist</LinkPreview> and a 
                        <LinkPreview imageSrc='/images/Surfer.png' isStatic url="https://www.instagram.com/p/C8ACiUhSp7TM8yALBkFQ6jiASzML1DK74GS_ws0/?hl=en&img_index=1" className='text-white font-bold'> Surfer</LinkPreview>, 
                        exploring creativity through music, storytelling, and visual art.
                    </span>
                    <span className='block mt-2.5 text-center'>
                        Currently, I’m working on diverse projects, collaborating with teams to drive meaningful solutions while continuously learning and evolving.
                    </span>
                </div>
            </motion.div>
            <motion.div 
                className='aboutUsRight lg:col-span-4 col-span-12 flex flex-col justify-center items-center'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 , ease: "easeInOut"}}
            >
                <motion.div
                    animate={{ y: [-4, 0, -4], x: [4, 0, 4]}}  
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                    <Image src='/images/portfolio.png' width={250} height={250} alt='Paulson Mathew' style={{ width: "auto", height: "auto" }} ></Image>
                </motion.div>
                <div className='mt-7 flex space-x-7'>
                    <motion.div className='flex space-x-1'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <LocationOnIcon style={{color:"red"}}/>
                        <a 
                            href="https://www.google.com/maps/place/Kottayam" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-white'
                        >
                            Kottayam
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <motion.a href='/resume/paulson mathew resume.pdf' download="Paulson Mathew.pdf" whileHover={{ scale: 1.1 }} className="bg-black border border-gray-400 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-black-50 py-0.5 px-4 ring-1 ring-white/10 ">
                                <span className=''>
                                    <ArrowDownwardSharpIcon/> Resume 
                                </span>
                            </div>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
        <div className='mt-24'>
            <ProjectLink/>
        </div>     
    </div>
  )
}

export default About


    //     document.fonts.ready.then(() => {
    //         if (!containerRef.current) return;
    
    //         // Make the container visible after fonts are loaded
    //         containerRef.current.style.visibility = "visible";
    
    //         // Select all paragraph elements
    //         const paragraphs = containerRef.current?.querySelectorAll("p");
    //         if (!paragraphs) return;
    
    //         paragraphs.forEach((paragraph) => {
    //             const { words } = splitText(paragraph);
    
    //             // Animate each paragraph
    //             animate(
    //                 words,
    //                 { opacity: [0, 1], y: [10, 0] },
    //                 {
    //                     type: "spring",
    //                     duration: 2,
    //                     bounce: 0,
    //                     delay: stagger(0.05),
    //                 }
    //             );
    //         });
    //     });
    // }, []);



    //const containerRef = useRef(null);