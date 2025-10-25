"use client"
import React, { useEffect, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import './sideBar.css'
import { delay, motion } from 'framer-motion';
import { animate, stagger } from "motion";


function SideBar() {
     
    useEffect(() => {
        animate(".icon-container", 
            { opacity: [0, 1], x: [-30, 0] }, 
            { duration: 0.5, delay: stagger(0.2), ease: "easeInOut" }
        );
    }, []);

  return (
    <motion.div 
        className="sidebar"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}  
    >
        {
            [
                {icon: <LinkedInIcon style={{color:"white"}} className='icon'/>, link: "https://www.linkedin.com/in/paulsonmathew/"},
                {icon: <InstagramIcon style={{color:"white"}} className='icon'/>, link: "https://www.instagram.com/paulson_mathew_3/?hl=en"},
                {icon: <WhatsAppIcon style={{color:"white"}} className='icon'/>, link: "https://wa.me/918113000923"},
                {icon: <EmailIcon style={{color:"white"}} className='icon'/>, link: "mailto:paulsonmathew11@gmail.com"},
                {icon: <GitHubIcon style={{color:"white"}} className='icon'/>, link: "https://github.com/ajoyscorpion"},
            ].map((item, index) => (
                <motion.div className="icon-container" key={index} whileHover={{ scale: 1.1 }}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                </motion.div>
            ))
        }
    </motion.div>
  )
}

export default SideBar
