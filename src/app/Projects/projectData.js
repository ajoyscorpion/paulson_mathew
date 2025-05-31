// FULL STACK PROJECTS

import Image from "next/image";
import Link from "next/link";

const FullStackSkeletonOne = () => {
    return (
        <div>
            <p className="font-bold md:text-xl text-xl text">
                RN Clinic - Doctor Booking App
            </p>
            <p className="font-normal text-base my-4 max-w-lg text">
                Developed a doctor booking platform using React, integrating MUI and Bootstrap for responsive design.
                Backend services built with PostgreSQL and Django, handling secure appointment scheduling and patient data.
                Role-based access control features for doctors and patients were implemented.
            </p>
            <div className="flex gap-3 mt-3">
                <Image src="/images/projectIcons/React.png" width={25} height={25} alt="ReactJs"/>
                <Image src="/images/projectIcons/Material UI.png" width={25} height={25} alt="MaterialUI"/>
                <Image src="/images/projectIcons/Bootstrap.png" width={25} height={25} alt="Bootstrap"/>
                <Image src="/images/projectIcons/django-icon.png" width={25} height={25} alt="Django"/>
                <Image src="/images/projectIcons/PostgresSQL.png" width={25} height={25} alt="PostgresSQL" />
            </div>
            <div className="space-x-4 mt-3">
                <Link href={"https://github.com/ajoyscorpion/doctor_booking_app"} target="_blank" rel="noopener noreferrer" className="text-[15px]">GitHub</Link>
                {/* <Link href={""} className="text-[15px]">Live Demo</Link> */}
            </div>
        </div>
    );
};
   
const FullStackSkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-xl text-xl text">
                ATS Resume Builder -React Project
            </p>
            <p className="font-normal text-base my-4 max-w-lg text">
                Designed and developed an ATS-friendly resume builder using React.js, 
                ensuring fast rendering and a seamless user experience.
            </p>
            <div className="flex gap-3 mt-3">
                <Image src="/images/projectIcons/React.png" width={25} height={25} alt="ReactJs"/>
                <Image src="/images/projectIcons/google-gemini-icon.png" width={25} height={25} alt="Gemini AI"/>
            </div>
            <div className="space-x-4 mt-3">
                <Link href={"https://github.com/ajoyscorpion/AI_resume_builder"} target="_blank" rel="noopener noreferrer" className="text-[15px]">GitHub</Link>
                <Link href={"https://ai-resume-builder-five.vercel.app/"} target="_blank" rel="noopener noreferrer" className="text-[15px]">Live Demo</Link>
            </div>
        </div>
    );
};

const FullStackSkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-xl text-xl text">
                Pick and Drop - Next.js Project
            </p>
            <p className="font-normal text-base my-4 max-w-lg text">
                Developed a logistics management system using Next.js, offering dynamic routing and server-side rendering for enhanced performance.
                Integrated backend services with Node.js and MongoDB, enabling real-time tracking and order processing.
            </p>
            <div className="flex gap-3 mt-3">
                <Image src="/images/projectIcons/NextJsInvert.png" width={25} height={25} alt="NextJs" />
                <Image src="/images/projectIcons/Google Cloud.png" width={25} height={25} alt="GoogleCloud" />
                <Image src="/images/projectIcons/ExpressInvert.png" width={25} height={25} alt="ExpressJs" />
                <Image src="/images/projectIcons/Node.js.png" width={25} height={25} alt="NodeJs" />
                <Image src="/images/projectIcons/MongoDB.png" width={25} height={25} alt="MongoDB"/>
            </div>
            <div className="space-x-4 mt-3">
                <Link href={"https://github.com/ajoyscorpion/pick_n_drop"} target="_blank" rel="noopener noreferrer" className="text-[15px]">GitHub</Link>
                {/* <button className="text-[15px]">Live Demo</button> */}
            </div>
        </div>
    );
};

const FullStackSkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-xl text-xl text-">
                Burger House - MEAN Stack Project
            </p>
            <p className="font-normal text-base my-4 max-w-lg text">
                Created a food ordering platform using the MEAN stack. Angular powered the frontend, and Node.js, Express.js, and MongoDB handled backend operations.
                Features included secure payment gateway integration and real-time order tracking.
            </p>
            <div className="flex gap-3 mt-3">
                <Image src="/images/projectIcons/Angular.png" width={25} height={25} alt="Angular" />
                <Image src="/images/projectIcons/ExpressInvert.png" width={25} height={25} alt="ExpressJS" />
                <Image src="/images/projectIcons/Node.js.png" width={25} height={25} alt="NodeJs" />
                <Image src="/images/projectIcons/MongoDB.png" width={25} height={25} alt="MongoDB" />
            </div>
            <div className="space-x-4 mt-3">
                <Link href={"https://github.com/ajoyscorpion/burger_house"} target="_blank" rel="noopener noreferrer" className="text-[15px]">GitHub</Link>
                {/* <button className="text-[15px]">Backend</button> */}
            </div>
        </div>
    );
};

const FullStackSkeletonFive = () => {
    return (
        <div>
            <p className="font-bold md:text-xl text-xl text">
                bsharp Music Conservatory - MERN Stack Project
            </p>
            <p className="font-normal text-base my-4 max-w-lg text">
                Built a music learning platform using the MERN stack, offering features such as course enrollment and lesson tracking. Developed a role-based dashboard with React.js and integrated MongoDB for scalable data storage.
            </p>
            <div className="flex gap-3 mt-3">
                <Image src="/images/projectIcons/React.png" width={25} height={25} alt="ReactJs" />
                <Image src="/images/projectIcons/ExpressInvert.png" width={25} height={25} alt="ExpressJs" />
                <Image src="/images/projectIcons/Node.js.png" width={25} height={25} alt="NodeJs" />
                <Image src="/images/projectIcons/MongoDB.png" width={25} height={25} alt="MongoDB" />
                <Image src="/images/projectIcons/AWS.png" width={25} height={25} alt="AWS" />
            </div>
            <div className="space-x-4 mt-3">
                <Link href={"https://github.com/ajoyscorpion/bSharp_Music"} target="_blank" rel="noopener noreferrer" className="text-[15px]">GitHub</Link>
            </div>
        </div>
    );
};

const FullStackSkeletonSix = () => {
    return (
        <div>
            <p className="font-bold md:text-xl text-xl text">
                Biryani Hut - MEAN Stack Project
            </p>
            <p className="font-normal text-base my-4 max-w-lg text">
                Developed a restaurant order management system using the MEAN stack, ensuring smooth order placement and tracking. Designed an interactive UI with Angular and implemented a robust backend with Node.js, Express.js, and MongoDB.
            </p>
            <div className="flex gap-3 mt-3">
                <Image src="/images/projectIcons/Angular.png" width={25} height={25} alt="Angular" />
                <Image src="/images/projectIcons/ExpressInvert.png" width={25} height={25} alt="ExpressJs" />
                <Image src="/images/projectIcons/Node.js.png" width={25} height={25} alt="NodeJs" />
                <Image src="/images/projectIcons/MongoDB.png" width={25} height={25} alt="MongoDB" />
            </div>
            <div className="space-x-4 mt-3">
                <Link href={"https://github.com/ajoyscorpion/biryani_hut"} target="_blank" rel="noopener noreferrer" className="text-[15px]">GitHub</Link>
                {/* <Link href={""} className="text-[15px]">Backend</Link> */}
            </div>
        </div>
    );
};

export const FullStackCards = [
    {
        id: 1,
        content: <FullStackSkeletonOne />,
        //className: "md:col-span-1",
        thumbnail:
        "/images/projectImages/RNClinic.png",
    },
    {
        id: 2,
        content: <FullStackSkeletonTwo />,
        className: "col-span-1",
        thumbnail:
        "/images/projectImages/ATSResume.png",
    },
    {
        id: 3,
        content: <FullStackSkeletonThree />,
        className: "col-span-1",
        thumbnail:
        "/images/projectImages/PicknDrop.png",
    },
    {
        id: 4,
        content: <FullStackSkeletonFour />,
        className: "md:col-span-1",
        thumbnail:
        "/images/projectImages/BurgerHouse.png",
    },
    {
        id: 5,
        content: <FullStackSkeletonFive />,
        className: "md:col-span-1",
        thumbnail:
        "/images/projectImages/bSharpMusic.png",
    },
    {
        id: 6,
        content: <FullStackSkeletonSix />,
        className: "md:col-span-1",
        thumbnail:
        "/images/projectImages/biryaniHut.png",
    },
];



// ML - PROJECTS

const MLCardOne = () => {
    return(
        <div>
            <p className="font-bold md:text-xl text-xl text">
                Kidney Disease Prediction
            </p>
            <p className="font-normal text-base my-4 max-w-lg text">
                Developed and deployed a machine learning-based Kidney Disease Prediction system using FastAPI for the backend and Next.js for the frontend. 
                Trained a Random Forest Classifier on medical datasets to predict kidney disease based on patient data. 
                Implemented API endpoints for model inference and integrated a user-friendly web interface for data input and real-time predictions.
            </p>
            <div className="flex gap-3 mt-3">
                <Image src="/images/projectIcons/NextJsInvert.png" width={25} height={25} alt="Next.js" />
                <Image src="/images/projectIcons/FastAPI.png" width={25} height={25} alt="FastAPI" />
                <Image src="/images/projectIcons/Jupyter.png" width={25} height={25} alt="Jupyter" />
                <Image src="/images/projectIcons/Kaggle.png" width={25} height={25} alt="Kaggle" />
            </div>
            <div className="mt-3 flex space-x-4">
                <Link href={"https://github.com/ajoyscorpion/Kidney_Disease"} className="text-[15px]" target="_blank" rel="noopener noreferrer">GitHub</Link>
                <Link href={"https://kidney-disease.vercel.app/"} className="text-[15px]" target="_blank" rel="noopener noreferrer">Live</Link>
            </div>
        </div>
    )
}

export const MLCards = [
    {
        id: 1,
        content: <MLCardOne/>,
        className: "col-span-8",
        thumbnail:
        "/images/projectImages/KidneyDisease.png",
    }
]


// MSC - PROJECTS

const MScCardOne = () => {
    return (
        <div>
            <p className="font-bold md:text-xl text-xl text">
                Analysis on the Variation in Wettability Property of Nanocomposites
            </p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Conducted research on the wettability properties of polythiophene-manganese doped zinc oxide nanocomposite, analyzing surface characteristics and hydrophobic behavior. Utilized various analytical techniques to measure contact angles and assess material suitability for industrial applications.
            </p>
            <div>
                <Link href={"https://docs.google.com/document/d/1qZeKlaOvOM7fimu9UmCQKMn62oI3bNFp/edit?usp=sharing&ouid=113085576950698422247&rtpof=true&sd=true"} className="text-[15px]" target="_blank" rel="noopener noreferrer">View</Link>
            </div>
        </div>
    )
}

export const MScCards = [
    {
        id: 1,
        content: <MScCardOne />,
        className: "col-span-8",
        thumbnail:
        "/images/projectImages/MSc Project.png",
    }
]


// Project Management


const ProjectManagementCardOne = () => {
    return(
        <div>
            <p className="font-bold md:text-xl text-xl text">
                AI-Powered Nurse Assistant for Reducing Medical Errors
            </p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                An AI-powered assistant designed to reduce medical errors and streamline nurse workflows in hospitals. 
                The system automates vitals monitoring, sends real-time alerts, and generates shift reports, improving patient safety and operational efficiency. 
                Implemented with a phased rollout strategy and HIPAA-compliant design.
            </p>
        </div>
    )
}

const ProjectManagementCardTwo = () => {
    return(
        <div>
            <p className="font-bold md:text-xl text-xl text">
                Smart Hospital Appointment System
            </p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Developed a smart hospital appointment system to enhance patient experience and operational efficiency. 
                The system integrates real-time appointment scheduling, automated reminders, and a user-friendly interface for both patients and healthcare providers. 
                Focused on reducing wait times and improving resource allocation in healthcare facilities.
            </p>
        </div>
    )
}


export const ProjectManagement = [
    {
        id:1,
        content:<ProjectManagementCardTwo/>,
        className:"col-span-8",
        thumbnail:"/images/projectImages/Smart Hospital Appointment.png",
        link:'/Projects/hospital-appointment-system'
    },
    {
        id:2,
        content:<ProjectManagementCardOne/>,
        className:"col-span-8",
        thumbnail:"/images/projectImages/Nurse Assistant.png",
        link:'/Projects/nurse-assistant'
    },
       
]