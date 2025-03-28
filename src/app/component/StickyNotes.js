import React from 'react'
//import './StickyNotes.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import Image from 'next/image';


function StickyNotes() {
  return (
    <div className='flex justify-center align-middle'>
      {/* Red Sticky Note */}
      {/* <div className='w-28 h-28 bg-red-500 m-6 shadow-lg transform rotate-6 
        transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 
        animate-slideInFromLeft'> */}
        {/* Optional: Add some text */}
        {/* <div className='flex justify-center'>
            <Image src={"/images/pintop.png"} width={20} height={20} alt="Pin Top"/>
        </div>
      </div> */}

      {/* Green Sticky Note */}
      <div className='w-28 h-28 m-6 shadow-lg transform -rotate-0 
        transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 
        animate-slideInFromRight'
            style={{backgroundColor:"yellow"}}
        >
        {/* Optional: Add some text */}
        <div className='flex justify-center'>
            <Image src={"/images/pintop.png"} width={20} height={20} alt="Pin Top"/>
        </div>
        <div className='flex justify-center items-center mt-3'>
            <p className='font-bold text-black flex flex-col items-center'>
                <LocationOnIcon style={{color:"red"}}/>
                Kottayam
            </p>
        </div>
      </div>

      {/* Yellow Sticky Note */}
      <div className='w-28 h-28 m-6 shadow-lg transform -rotate-6 
        transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 
        animate-slideInFromLeft'
            style={{backgroundColor:"orange"}}
        >
        {/* Optional: Add some text */}
        <div className='flex justify-center'>
            <Image src={"/images/pintop.png"} width={20} height={20} alt="Pin Top"/>
        </div>
        <div className='flex justify-center items-center mt-6'>
            <ArrowDownwardSharpIcon/>
            <Link href={"/"} className="font-bold">Resume</Link>
        </div>
      </div>

      {/* Blue Sticky Note */}
      {/* <div className='w-28 h-28 bg-blue-300 m-6 shadow-lg transform -rotate-6 
        transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 
        animate-slideInFromRight'> */}
        {/* Optional: Add some text */}
        {/* <div className='flex justify-center'>
            <Image src={"/images/pintop.png"} width={20} height={20} alt="Pin Top"/>
        </div>
      </div> */}
    </div>
  )
}

export default StickyNotes