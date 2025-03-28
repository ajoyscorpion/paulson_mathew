"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import "./GetInTouch.css"

function GetInTouch() {
  return (
    <div className='getInTouch relative lg:h-[45vh] lg:mt-[-50px] flex items-center justify-center'>
      <motion.div
        whileHover={{ scale: 1.1 }}
      >  
        <Link href="mailto:ajoyscorpion@gmail.com" className="hover:underline hover:decoration-gray-100 hover:underline-offset-4" style={{textDecorationThickness:"1.5px"}}>
          <p>ajoyscorpion@gmail.com</p>
        </Link>
      </motion.div>
      <div className='getInTouchArrow absolute'>
          <p className='getInTouchText'>Get In Touch</p>
          <Image className='lg:ml-8 lg:mt-[-30px]' src="/images/GetInTouch.PNG" alt="Get In Touch Arrow" width={200} height={200}/>
      </div>
    </div>
  )
}

export default GetInTouch
