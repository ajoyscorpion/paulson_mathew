"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
//import a from '.../public/images/logo.png'
import './navbar.css'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'


function Navbar() {

  const [showName, setShowName] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const updateShowName = () => {
      if (window.scrollY > 500 || pathname === "/Projects" || pathname === "/Photography" || pathname.includes("/Projects/")) {
        setShowName(true);
      } else {
        setShowName(false);
      }
    };

    // Call function immediately to update on mount
    updateShowName();

    window.addEventListener("scroll", updateShowName);
    return () => window.removeEventListener("scroll", updateShowName);
  }, [pathname]);;

  return (
    <div className='fixed top-0 left-0 w-full bg-transparent z-50 mt-14'>
      
      <div className='flex items-center justify-around'>
        <Link href="/">
          <motion.img 
            src='/images/logoBlack.png'
            className='logo opacity-90 sm:w-10 md:w-40 lg:w-48 xl:w-56 '
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
            }}
            whileHover={{ scale: 1.1 }}
          />
        </Link>

        <AnimatePresence mode='wait'>
        {/* Show name only after scrolling 100vh */}
        {showName ? (
          
            <motion.div 
              className="home flex flex-col items-center justify-center"
              initial={{ opacity: 0,  y:15 }}
              animate={{ opacity: 1,  y:0 }}
              exit={{opacity: 0, y: -25  }}
              transition={{
                  duration: 0.4,
                  //scale: { visualDuration: 0.4 },
              }}
            >
              <p 
                  className="NameInMiddle font-bold"
                  style={{color:"white"}}
              >
                Paulson
              </p>
              <p 
                  className='NameInMiddle font-bold '
                  id='NameInMiddleBottom'
                  style={{color:"grey"}}
              >
                Mathew
              </p>
            </motion.div>
          
          ) : (
            <div className="home flex flex-col items-center justify-center">
              <p 
                  className="NameInMiddle font-bold"
                  style={{color:"transparent"}}
              >
                Paulson
              </p>
              <p 
                  className='NameInMiddle font-bold'
                  id='NameInMiddleBottom'
                  style={{color:"transparent"}}
              >
                Mathew
              </p>
            </div>
          )
        }
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <button
            onClick={() => window.location.href = "mailto:ajoyscorpion@gmail.com"} 
            className="openToWorkButton bg-black border border-gray-400 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs lg:font-semibold font-normal leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-black-50 py-0.5 px-4 ring-1 ring-white/10 ">
              <span className="lg:w-3 lg:h-3 w-2.5 h-2 rounded-full bg-green-500 animate-blink greenRound"></span>
              <span>
                Open To work
              </span>
            </div>
          </button>
        </motion.div>
      </div>  

    </div>
  )
}

export default Navbar

