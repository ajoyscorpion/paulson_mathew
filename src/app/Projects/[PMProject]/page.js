"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { PMProjectData } from '../PMProjectData';
import { useRouter } from 'next/navigation';


function PMProjects() {
    const router = useRouter();

    const {PMProject} = useParams()
    console.log(PMProject);

    const project = PMProjectData.find((item) => item.name === PMProject);
    console.log(project);

  return (
    <div className='flex justify-center items-center mt-45 '>

        <div className='w-[90%] md:w-[80%] lg:w-[70%] relative h-auto' style={{backgroundColor:"#191919",color:"white",borderRadius:"50px"}}> 
            <button
                onClick={() => router.back()}
                className="lg:block md:block hidden absolute top-5 left-5 text-sm text-white bg-[#333] hover:bg-[#444] px-3 py-2  rounded-[50%] transition"
            >
                ←
            </button>  
            {project.content}
        </div>
        
    </div>
  )
}

export default PMProjects



// #212121
// 232323