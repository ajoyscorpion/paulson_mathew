"use client"
import React, { useEffect, useState } from 'react'
import "./Landing.css"
import { animate, motion } from 'framer-motion'

function LandingPage() {

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
        <motion.div 
            className="home flex flex-col items-center justify-center"
            // initial={{opacity:0}}
            // animate={{opacity:1}}
            // transition={{
            //     ease:'easeInOut',
            //     duration:0.1
            // }}
        >
            <h1 
                className="text-3xl font-bold transition-all duration-300"
                //style={{ fontSize: `${fontSize}px` }}
            >
                Paulson
            </h1>
            <h1 
                className='mathew text-3xl font-bold mr-2 transition-all duration-300'
            >
                Mathew
            </h1>
        </motion.div>
        <motion.div 
            className='description text-white'
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{
                duration:0.7,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
            }}
        >
            <p>Associate Project Manager</p>
            <p className='bar'>|</p>
            <p>Full Stack Developer</p>
            <p className='bar'>|</p>
            <p>ML Engineer</p>
        </motion.div>
    </div>
  )
}

export default LandingPage
