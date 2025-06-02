import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Image from 'next/image';


const Divider = () => (
    <div className='mt-5 flex justify-center items-center'>
        <div className='w-[800px] h-[1px] bg-white opacity-40'></div>
    </div>
)

const SmartHospitalAppointmentSystem = () => {
    return(
        <>
            <div className='flex lg:flex-row md:flex-row flex-col items-center justify-center mt-10 mb-5 mx-5 lg:mx-11 space-y-3 lg:space-y-0 '>

                <div>
                    {/* Project Title */}
                    <h3 className='text-center font-extrabold text-[25px] mt-13 '>Smart Hospital Appointment System</h3>

                    <div className='mx-5 lg:mx-11 mt-11 p-5 flex flex-col items-start justify-start gap-1 bg-[#494949]/30 rounded-[30px] text-[#c3c3c3]'>
                        <p className='font-bold'>Role: <span className='font-normal'>Project Manager</span></p>
                        <p className='font-bold'>Organization: <span className='font-normal'>Self-Initiated Project</span></p>
                        <p className='font-bold'>Timeline: <span className='font-normal'>August 2024 – September 2024</span></p>
                        <p className='font-bold'>Domain: <span className='font-normal'>Healthcare, Artificial Intelligence, Product Management</span></p>
                        <p className='font-bold'>Tools & Technologies: <span className='font-normal'>ReactJS, Django, MySQL, Python (for AI modules), Jira, Confluence, Figma, REST APIs, HIPAA-compliant frameworks</span></p>                    </div>
                </div>

                <Image src={'/images/projectImages/Smart Hospital Appointment.png'} className='rounded-[30px]' width={500} height={100}/>

            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
                <div className='pt-7 pb-5 mx-5 lg:mx-11 bg-[#1F1F1F] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className="text-[#c3c3c3]">
                        In today’s fast-moving healthcare world, easy and efficient appointment booking is essential. 
                        This document defines the requirements for a Hospital Appointment Booking System designed to simplify scheduling for both patients and hospital staff. 
                        Using modern technology, including GenAI, the system aims to improve access, reduce wait times, and enhance the booking experience. 
                        It covers the system’s goals, users, key features, and success measures, ensuring a smooth and effective solution.
                    </p>
                </div>
                {/* Project Objective */}
                <div className='mt-5 mx-5 lg:mx-11 bg-[#1e1e1e] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className='font-bold'>Project Objective</p>
                    <p className='mt-2 text-[#c3c3c3]'>
                        Patients often face long wait times and complicated booking processes, causing delays in care. 
                        Hospital staff struggle with manual scheduling, leading to errors and inefficiencies. A simple, user-friendly appointment system is needed to improve access, ease staff workload, and reduce admin tasks. 
                        Using GenAI can further enhance scheduling and communication, making the process smoother for everyone.
                    </p>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>

                {/* Challenges */}
                <div className='mt-5 mx-5 lg:mx-11 bg-[#2B2B2B] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className='font-bold'>Challenges</p>
                    <ul className='list-disc ml-5 mt-2 text-[#c3c3c3]'>
                        <li>Long Wait Times – Booking by phone or in person takes too long for patients.</li>
                        <li>Scheduling Issues – Manual processes lead to errors, double bookings, and poor doctor schedule management.</li>
                        <li>Poor Communication – Missed calls and lack of reminders result in confusion and no-shows.</li>
                        <li>High Administrative Workload – Staff spend excessive time managing appointments manually.</li>
                        <li>Data Errors – Paper records are error-prone and difficult to track or analyze.</li>
                        <li>Lack of Accessibility – Patients with disabilities or digital preferences struggle with current systems.</li>
                        <li>No-Show Problem – Missed appointments increase without automated alerts and reminders.</li>
                    </ul>
                </div>

                {/* Goals */}
                <div className='mt-5 mx-5 lg:mx-7 bg-[#373737] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Goal</TableCell>
                                    <TableCell>Metric</TableCell>
                                    <TableCell>Criteria</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[
                                    ["Reduce Patient Wait Times", "Average Booking Time", "50% decrease from current average"],
                                    ["Reduce Patient Wait Times", "Average Appointment Wait Time", "30% decrease from current average"],
                                    ["Improve Scheduling Efficiency", "Double Bookings", "90% reduction"],
                                    ["Improve Scheduling Efficiency", "Scheduling Errors", "90% reduction"],
                                    ["Enhance Appointment Availability", "Online Booking Rate", "70% of all bookings online"],
                                    ["Improve Communication", "No-Show Rate", "25% reduction"],
                                    ["Improve Communication", "Patient Satisfaction (Communication)", "4.5/5 average rating"],
                                    ["Reduce Administrative Burden", "Staff Time Savings", "40% reduction in staff time spent on scheduling"],
                                    ["Improve Data Accuracy", "Data Entry Errors", "95% reduction"],
                                ].map(([goal, metric, criteria], index) => (
                                    <TableRow hover key={index}>
                                        <TableCell style={{ color: "white" }}>{goal}</TableCell>
                                        <TableCell style={{ color: "white" }}>{metric}</TableCell>
                                        <TableCell style={{ color: "white" }}>{criteria}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                
            </div>


            <div className='flex flex-col items-center justify-center mt-5 mx-5 bg-[#1F1F1F] rounded-[30px] p-5 text-white'>
                <p className='font-bold'>Key Features</p>
                <div className="mt-4 flex lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-30">
                    <div className='flex flex-col'>
                        <h3 className="font-bold">Functional Features</h3>
                        <ul className="list-disc ml-5 mt-2 space-y-1 text-[#c3c3c3]">
                            <li><strong>Online Booking:</strong> Search doctors, view availability, book and confirm slots. GenAI suggests optimal times.</li>
                            <li><strong>Patient Profiles:</strong> Sign up/login via email, phone, or social. Update personal and medical info securely.</li>
                            <li><strong>Appointment Management:</strong> View, reschedule, or cancel bookings. Get SMS/email/in-app reminders. Calendar sync supported.</li>
                            <li><strong>Staff Scheduling:</strong> Manage doctor availability, schedules, and waitlists.</li>
                            <li><strong>EHR Integration:</strong> Secure access to patient records and prescriptions.</li>
                            <li><strong>Telehealth:</strong> Book and conduct video consultations.</li>
                            <li><strong>Payments:</strong> Integrated secure online payments.</li>
                            <li><strong>Reports & Analytics:</strong> Generate insights on appointment trends.</li>
                            <li><strong>Feedback System:</strong> Collect patient feedback post-visit.</li>
                            <li><strong>AI Chatbot:</strong> Assist with booking and answer routine questions.</li>
                        </ul>
                    </div>
                    
                    <div className='flex flex-col'>
                        <h3 className="font-bold">Non-Functional Features</h3>
                        <ul className="list-disc ml-5 mt-2 space-y-1 text-[#c3c3c3]">
                            <li><strong>Performance:</strong> Fast and scalable for high loads.</li>
                            <li><strong>Security:</strong> Data encryption, HIPAA compliant, user authentication.</li>
                            <li><strong>Usability:</strong> User-friendly, responsive, and WCAG-compliant interface.</li>
                            <li><strong>Scalability:</strong> Ready for growth and user expansion.</li>
                            <li><strong>Maintainability:</strong> Modular architecture for easy updates.</li>
                            <li><strong>Accessibility:</strong> Multilingual and inclusive design. GenAI enables real-time translation.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>

                {/* Potential Pitfalls */}
                <div className='mt-5 mx-5 lg:mx-11 bg-[#2B2B2B] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className='font-bold'>Potential Pitfalls</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1 text-[#c3c3c3]">
                        <li><strong>Seamless Integration:</strong> Ensure smooth connection with hospital systems (EHR, billing, etc.).</li>
                        <li><strong>Data Security & Compliance:</strong> Maintain HIPAA standards and safeguard patient data.</li>
                        <li><strong>User-Friendly for All:</strong> Design for users of all digital literacy levels, especially seniors.</li>
                        <li><strong>Flexible Scheduling:</strong> Handle changes in doctor and patient availability effectively.</li>
                        <li><strong>Adoption & Engagement:</strong> Motivate both staff and patients to use the system consistently.</li>
                    </ul>
                </div>

                <div className='mt-5 mx-5 lg:mx-11 bg-[#373737] rounded-[30px] flex flex-col p-11 text-white'>
                    <div className="">
                        <p className="font-bold">User Flow Diagram</p>
                        <p className="mt-2 text-sm text-[#c3c3c3]">Visual overview of user interactions across the platform.</p>
                        <a href="https://drive.google.com/file/d/1daH5vicfgXuFsvWVSvtOHgqr_IX5nQcS/view?usp=sharing" className="inline-block mt-3 px-4 py-2 bg-[#131313] text-white text-center rounded-[50px] hover:bg-[#1e1e1e] transition" >
                            View User Flow Diagram
                        </a>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold">Sample Designs</p>
                        <p className="mt-2 text-sm text-[#c3c3c3]">Click below to view sample UI/UX screens.</p>
                        <a href="https://drive.google.com/drive/folders/13BYAmGOkhCTuplH0QOr6vuAZydZUVrDI?usp=sharing" className="inline-block mt-3 px-4 py-2 bg-[#131313] text-white text-center rounded-[50px] hover:bg-[#1e1e1e] transition" >
                            View Sample Designs
                        </a>
                    </div>
                </div>
            </div>

            <Divider/>

            {/* Conclusion */}
            <div className='mt-5 mx-5 lg:mx-11 mb-21'>
                <p className='font-bold'>Conclusion</p>
                <p className='mt-2 text-[#c3c3c3]'>
                    This document defines the requirements for a Hospital Appointment Booking System designed to modernize patient scheduling. 
                    By focusing on user-friendly interfaces, automated processes, and integrated telehealth, we aim to deliver a system that significantly improves patient access to care and optimizes hospital resource utilization.
                </p>
            </div>
            
            {/* Button Download PDF */}
            <div className='mb-6 flex justify-center items-center'>
                <a
                    href="https://drive.google.com/file/d/1ppbi7kDVYzC-1qUFHF1aFxvdRK2ZcASd/view?usp=sharing" // Update with your actual file path
                    download
                    className="text-[13px] inline-block px-3 py-3 bg-green-600 text-white text-lg font-medium rounded-xl shadow hover:bg-green-700 transition duration-300"
                >
                    Download Project PDF
                </a>
            </div>

        </>
    )
}

const NuresAssistant = () => {
    return(
        <>
            <div className='flex lg:flex-row md:flex-row flex-col items-center justify-center mt-10 mb-5 mx-11'>

                <img src={'/images/projectImages/Nurse Assistant.png'} className="rounded-[30px] w-[500px] h-auto"/>

                <div>
                    {/* Project Title */}
                    <h3 className='text-center font-bold text-[25px] mt-13 '>AI-Powered Nurse Assistant for Reducing Medical Errors</h3>

                    <div className='lg:mx-11 md:mx-11 mx-0 mt-11 p-5 flex flex-col items-start justify-start gap-1 bg-[#494949]/30 rounded-[30px]'>
                        <p className='font-bold'>Role: <span className='font-normal'>Project Manager</span></p>
                        <p className='font-bold'>Organization: <span className='font-normal'>Self-Initiated Project</span></p>
                        <p className='font-bold'>Timeline: <span className='font-normal'>August 2024 – September 2024</span></p>
                        <p className='font-bold'>Domain: <span className='font-normal'>Healthcare, Artificial Intelligence, Product Management</span></p>
                        <p className='font-bold'>Tools & Technologies: <span className='font-normal'>Jira, Confluence, Figma, Python (for simulation), REST APIs, HIPAA-compliant frameworks</span></p>
                    </div>
                </div>

            </div>

            {/* <Divider/> */}


            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>

                {/* Project Objective */}
                <div className='mt-5 mx-11 bg-[#1F1F1F] rounded-[30px] flex flex-col items-start justify-start p-5'>
                    <p className='font-bold'>Project Objective</p>
                    <p className='mt-2'>
                        To conceptualize, plan, and simulate the implementation of an AI-based assistant aimed at reducing medical errors and improving operational efficiency in hospital settings. 
                        The AI assistant was designed to support nurses by automating routine tasks, providing real-time alerts, and ensuring seamless documentation and shift handovers.
                    </p>
                </div>

                {/* Problem Identified */}
                <div className='mt-5 mx-11 bg-[#2B2B2B] rounded-[30px] flex flex-col items-start justify-start p-5'>
                    <p className='font-bold'>Problem Identified</p>
                    <p className='mt-2'>
                        Medical errors are the 3rd leading cause of death in the US, with over 100,000 annual deaths and $20 billion in costs. 
                        The root causes identified include:
                    </p>
                    <ul className='list-disc ml-5 mt-2'>
                        <li>Missed or delayed medications</li>
                        <li>Manual and error-prone documentation</li>
                        <li>Inefficient shift handovers and monitoring</li>
                        <li>Overworked nursing staff with poor task delegation tools</li>
                    </ul>
                </div>

                {/* Project Scope */}
                {/* <div className='mt-5 mx-11 bg-[#373737] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className='font-bold'>Project Scope</p>
                    <ul className='list-disc ml-5 mt-2'>
                        <li>Design an AI persona to automate and enhance nurse workflows.</li>
                        <li>Map current vs. AI-enhanced workflows to identify efficiency gains.</li>
                        <li>Simulate synthetic data to validate the feasibility and value of AI recommendations.</li>
                        <li>Define implementation and rollout strategy for real-world hospital environments.</li>
                    </ul>
                </div> */}

            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>

                {/* Key Responsibilities */}
                <div className='mt-5 mx-5 bg-[#232323] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className='font-bold'>Key Responsibilities</p>
                    <ul className='list-disc ml-5 mt-2'>
                        <li>Conducted in-depth research on nurse workflows, EHR systems, and patient safety data.</li>
                        <li>Defined the product vision and roadmap for the AI Nurse Assistant.</li>
                        <li>Facilitated cross-functional collaboration between design, engineering, and compliance.</li>
                        <li>Created detailed Figma mockups of the patient dashboard, alert system, and report generator.</li>
                        <li>Developed a phased testing and validation plan with pilot, feedback, and scale-up stages.</li>
                        <li>Designed a risk mitigation framework for compliance, alert fatigue, and system failure.</li>
                    </ul>
                </div>

                {/* End-to-End User Journey (AI-Enhanced) */}
                <div className='mt-5 mx-5 bg-[#313131] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className='font-bold'>End-to-End User Journey (AI-Enhanced)</p>
                    <ol className='list-decimal ml-5 mt-2'>
                        <li className='font-bold'>Admission & Data Collection: <span className='font-normal'>Patient history collected via hospital EHR</span></li>
                        <li className='font-bold'>Automated Monitoring: <span className='font-normal'>AI continuously tracks vitals and medication schedules.</span></li>
                        <li className='font-bold'>Real-Time Alerts: <span className='font-normal'>Notifications sent for abnormal vitals or missed doses.</span></li>
                        <li className='font-bold'>AI Documentation: <span className='font-normal'>Generates structured shift reports and digital logs.</span></li>
                        <li className='font-bold'>Continuous Learning: <span className='font-normal'>AI improves recommendations with each patient interaction.</span></li>
                    </ol>
                </div>

                {/* Project Outcomes */}
                <div className='mt-5 mx-5 bg-[#2B2B2B] rounded-[30px] flex flex-col items-start justify-start p-5'>
                    <p className='font-bold'>Project Outcomes</p>
                    <ul className='list-disc ml-5 mt-2'>
                        <li>Predicted a 40–70% reduction in medication and documentation-related errors.</li>
                        <li>Designed a digital dashboard for real-time patient status and critical alerts.</li>
                        <li>Proposed a HIPAA-compliant AI assistant with seamless EHR API integration.</li>
                        <li>Reduced nurse documentation time by ~50%, improving bandwidth for patient care.</li>
                        <li>Developed sample prompt-response sets to showcase feasibility under synthetic conditions.</li>
                    </ul>
                </div>

            </div>

            
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>

                {/* Testing & Validation Strategy */}
                <div className='mt-5 mx-11 bg-[#1F1F1F] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className='font-bold'>Testing & Validation Strategy</p>
                    <ul className='list-disc ml-5 mt-2'>
                        <li className='font-bold'>Phase 1: <span className='font-normal'>Controlled pilot in one hospital unit with real nurses and simulated patients.</span></li>
                        <li className='font-bold'>Phase 2: <span className='font-normal'>Collect qualitative and quantitative feedback from medical staff.</span></li>
                        <li className='font-bold'>Phase 3: <span className='font-normal'>Integrate with hospital software systems (e.g., Cerner, Epic)</span>.</li>
                        <li className='font-bold'>Phase 4: <span className='font-normal'>Scale across departments and measure longitudinal outcomes.</span></li>
                    </ul>
                </div>

                {/* Metrics for Success */}
                <div className='mt-5 mx-11 bg-[#2B2B2B] rounded-[30px] flex flex-col items-start justify-start p-5 text-white'>
                    <p className='font-bold'>Metrics for Success</p>
                    <ul className='list-disc ml-5 mt-2'>
                        <li>Reduction in medication and vitals-check errors</li>
                        <li>Improvement in response time to critical events</li>
                        <li>Nurse satisfaction and workload reduction scores</li>
                        <li>Time saved per nurse per shift</li>
                        <li>Compliance and security audits passed</li>
                    </ul>
                </div>
                
            </div>


            {/* Risk Mitigation */}
            <div className='mt-5 mx-11 bg-[#1F1F1F] rounded-[30px] flex flex-col items-center justify-center p-5 text-white'>
                <p className='font-bold'>Risk Mitigation</p>
                <div className='mt-5'>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Risk
                                    </TableCell>
                                    <TableCell>
                                        Mitigation
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {
                                    [
                                        ["Alert Fatigue", "Priority-based filtering to minimize non-critical notifications"],
                                        ["Data Privacy", "Ensured GDPR/HIPAA compliance in all data-handling processes"],
                                        ["System Downtime", "Redundant alert systems and manual override mechanisms"],
                                        ["Staff Resistance", "Involved staff in co-design; positioned AI as a support tool"],
                                        ["Integration Complexity", "Used API-first approach for EHR compatibility"],
                                    ].map(([risk, mitigation]) => (
                                        <TableRow hover key={risk}>
                                            <TableCell style={{ color: "white" }}>{risk}</TableCell>
                                            <TableCell style={{ color: "white" }}>{mitigation}</TableCell>
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            

            {/* Wireframes & Mockups */}
            <div className='mt-5 mx-11 bg-[#252525] rounded-[30px] flex flex-col items-center justify-start p-5 text-white'>
                <p className='font-bold'>Wireframes & Mockups</p>
                <div className='flex lg:flex-row flex-col justify-center items-center mt-5 lg:space-x-9 space-y-5 lg:space-y-0'>
                    <Image src={'/images/projectImages/Project Management/Nurse Assistant/Prompt 9.png'} width={200} height={200}/>
                    <Image src={'/images/projectImages/Project Management/Nurse Assistant/Prompt 8.png'} width={200} height={200}/>
                    <Image src={'/images/projectImages/Project Management/Nurse Assistant/Prompt 7.png'} width={200} height={200}/>
                </div>
            </div>

            <Divider/>

            {/* Conclusion */}
            <div className='mt-5 mx-11 mb-21'>
                <p className='font-bold'>Conclusion</p>
                <p className='mt-2'>
                    This project demonstrated my ability to manage complex, cross-disciplinary initiatives in healthcare tech. 
                    It combined product strategy, user research, AI feasibility testing, and rollout planning — aligning closely with modern project management best practices and AI product development cycles.
                </p>
            </div>
            
            {/* Button Download PDF */}
            <div className='mb-6 flex justify-center items-center'>
                <a
                    href="https://docs.google.com/document/d/1h89hygUMsCOadtZ2yzStGG6cCul9EJqz3sez4YEvkPg/edit?usp=sharing" // Update with your actual file path
                    download
                    className="text-[13px] inline-block px-3 py-3 bg-green-600 text-white text-lg font-medium rounded-xl shadow hover:bg-green-700 transition duration-300"
                >
                    Download Project PDF
                </a>
            </div>
        </>
    )
}


export const PMProjectData = [
    {
        id:"PM1",
        name:"hospital-appointment-system",
        content:<SmartHospitalAppointmentSystem/>
    },
    {
        id:"PM2",
        name:"nurse-assistant",
        content:<NuresAssistant/>
    },
    
]