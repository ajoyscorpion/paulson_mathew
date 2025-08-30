"use client"
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { animate, stagger } from "motion";
import { delay, motion, px } from 'framer-motion';
import './ProjectLink.css'
import Link from 'next/link';

function ProjectLink() {
    
    useEffect(() => {
      animate(".projectButtons", 
          { opacity: [0, 1], y: [-30, 0] }, 
          { duration: 0.5, delay: stagger(0.2), ease: "easeInOut" }
      );
  }, []);

  return (
    <motion.div 
      className="text-white relative mt-28"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }} 
    >
      
      <div className='projectLinkContent flex items-center justify-center'>
        {/* Responsive Check Out Arrow */}
        <div 
          className='
            checkOutArrow absolute 
            top-[-70px] right-[450px] 
            md:top-[-60px] md:right-[300px]
            sm:top-[-50px] sm:right-[100px]
            xs:top-[-30px] xs:right-[50px]
            lg:block
            hidden
          '
        >
                    
          <p className='text-[20px] md:text-[18px] sm:text-[15px] xs:text-[13px] font-[Caveat] rotate-[5deg]'>
              Check Out My Projects
          </p>
                    
          <Image 
              className='w-[200px] h-[200px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] xs:w-[100px] xs:h-[100px] mt-[-40px] lg:-ml-8 lg:mt-[-80px]'
              src="/images/IMG_0204.PNG" 
              alt='Check out my project'
              width={200}
              height={200}
          />
        </div>

        <div className='largeScreenProjects flex gap-6 items-center justify-center '>
          <motion.div
            className="projectButtons"
            whileHover={{ scale: 1.1 }}
          >
            <Link href="/Projects" passHref>
              <button href={"/Projects"} className="bg-black border border-gray-400 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-black-50 py-0.5 px-4 ring-1 ring-white/10 ">
                      <span className='opacity-70'>
                          PROJECTS <ArrowForwardIcon/>
                      </span>
                  </div>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>  
    </motion.div>
  )
}

export default ProjectLink

