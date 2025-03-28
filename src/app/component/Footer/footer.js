import React from 'react'

function Footer() {
  return (
    <div className="flex items-center justify-center h-[25vh]">
        <p style={{color:"white", fontFamily:'Roboto', fontSize:"14px",textAlign:"center"}}>Paulson Mathew &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
