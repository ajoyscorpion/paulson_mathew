import React from 'react'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Image from 'next/image';
import Paper from '@mui/material/Paper';

const Divider = () => (
    <div className='mt-5 flex justify-center items-center'>
        <div className='w-[800px] h-[1px] bg-white opacity-40'></div>
    </div>
)

function page() {
  return (
    <div className='flex justify-center items-center  mt-45'>
        <Paper className='w-[1000px] h-auto' style={{backgroundColor:"#191919",color:"white",borderRadius:"50px"}} elevation={24}>
            {/* Project Title */}
            <h3 className='text-center font-bold text-[25px] mt-13 underline'>AI-Powered Nurse Assistant for Reducing Medical Errors</h3>

            <div className='mx-11 mt-11'>
                <p className='font-bold'>Role: <span className='font-normal'>Project Manager</span></p>
                <p className='font-bold'>Organization: <span className='font-normal'>Ema Unlimited Inc.</span></p>
                <p className='font-bold'>Timeline: <span className='font-normal'>August 2024 – September 2024</span></p>
                <p className='font-bold'>Domain: <span className='font-normal'>Healthcare, Artificial Intelligence, Product Management</span></p>
                <p className='font-bold'>Tools & Technologies: <span className='font-normal'>Jira, Confluence, Figma, Python (for simulation), REST APIs, HIPAA-compliant frameworks</span></p>
            </div>

            <Divider/>

            {/* Project Objective */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>Project Objective</p>
                <p className='mt-2'>
                    To conceptualize, plan, and simulate the implementation of an AI-based assistant aimed at reducing medical errors and improving operational efficiency in hospital settings. 
                    The AI assistant was designed to support nurses by automating routine tasks, providing real-time alerts, and ensuring seamless documentation and shift handovers.
                </p>
            </div>

            <Divider/>

            {/* Problem Identified */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>Problem Identified</p>
                <p className='mt-2'>
                    Medical errors are the 3rd leading cause of death in the US, with over 100,000 annual deaths and $20 billion in costs. 
                    The root causes identified include:
                </p>
                <ul className='list-disc ml-11 mt-2'>
                    <li>Missed or delayed medications</li>
                    <li>Manual and error-prone documentation</li>
                    <li>Inefficient shift handovers and monitoring</li>
                    <li>Overworked nursing staff with poor task delegation tools</li>
                </ul>
            </div>

            <Divider/>

            {/* Project Scope */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>Project Scope</p>
                <ul className='list-disc ml-11 mt-2'>
                    <li>Design an AI persona (Ema Nurse Assistant) to automate and enhance nurse workflows.</li>
                    <li>Map current vs. AI-enhanced workflows to identify efficiency gains.</li>
                    <li>Simulate synthetic data to validate the feasibility and value of AI recommendations.</li>
                    <li>Define implementation and rollout strategy for real-world hospital environments.</li>
                </ul>
            </div>

            <Divider/>

            {/* Key Responsibilities */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>Key Responsibilities</p>
                <ul className='list-disc ml-11 mt-2'>
                    <li>Conducted in-depth research on nurse workflows, EHR systems, and patient safety data.</li>
                    <li>Defined the product vision and roadmap for the AI Nurse Assistant.</li>
                    <li>Facilitated cross-functional collaboration between design, engineering, and compliance.</li>
                    <li>Created detailed Figma mockups of the patient dashboard, alert system, and report generator.</li>
                    <li>Developed a phased testing and validation plan with pilot, feedback, and scale-up stages.</li>
                    <li>Designed a risk mitigation framework for compliance, alert fatigue, and system failure.</li>
                </ul>
            </div>

            <Divider/>

            {/* End-to-End User Journey (AI-Enhanced) */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>End-to-End User Journey (AI-Enhanced)</p>
                <ol className='list-decimal ml-11 mt-2'>
                    <li className='font-bold'>Admission & Data Collection: <span className='font-normal'>Patient history collected via hospital EHR</span></li>
                    <li className='font-bold'>Automated Monitoring: <span className='font-normal'>AI continuously tracks vitals and medication schedules.</span></li>
                    <li className='font-bold'>Real-Time Alerts: <span className='font-normal'>Notifications sent for abnormal vitals or missed doses.</span></li>
                    <li className='font-bold'>AI Documentation: <span className='font-normal'>Generates structured shift reports and digital logs.</span></li>
                    <li className='font-bold'>Continuous Learning: <span className='font-normal'>AI improves recommendations with each patient interaction.</span></li>
                </ol>
            </div>

            <Divider/>

            {/* Project Outcomes */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>Project Outcomes</p>
                <ul className='list-disc ml-11 mt-2'>
                    <li>Predicted a 40–70% reduction in medication and documentation-related errors.</li>
                    <li>Designed a digital dashboard for real-time patient status and critical alerts.</li>
                    <li>Proposed a HIPAA-compliant AI assistant with seamless EHR API integration.</li>
                    <li>Reduced nurse documentation time by ~50%, improving bandwidth for patient care.</li>
                    <li>Developed sample prompt-response sets to showcase feasibility under synthetic conditions.</li>
                </ul>
            </div>

            <Divider/>

            {/* Testing & Validation Strategy */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>Testing & Validation Strategy</p>
                <ul className='list-disc ml-11 mt-2'>
                    <li className='font-bold'>Phase 1: <span className='font-normal'>Controlled pilot in one hospital unit with real nurses and simulated patients.</span></li>
                    <li className='font-bold'>Phase 2: <span className='font-normal'>Collect qualitative and quantitative feedback from medical staff.</span></li>
                    <li className='font-bold'>Phase 3: <span className='font-normal'>Integrate with hospital software systems (e.g., Cerner, Epic)</span>.</li>
                    <li className='font-bold'>Phase 4: <span className='font-normal'>Scale across departments and measure longitudinal outcomes.</span></li>
                </ul>
            </div>

            <Divider/>

            {/* Wireframes & Mockups */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>Wireframes & Mockups</p>
                <div className='flex justify-center items-center mt-5 space-x-9'>
                    <Image src={'/images/projectImages/Project Management/Nurse Assistant/Prompt 9.png'} width={200} height={200}/>
                    <Image src={'/images/projectImages/Project Management/Nurse Assistant/Prompt 8.png'} width={200} height={200}/>
                    <Image src={'/images/projectImages/Project Management/Nurse Assistant/Prompt 7.png'} width={200} height={200}/>
                </div>
            </div>


            <Divider/>

            {/* Metrics for Success */}
            <div className='mt-5 mx-11'>
                <p className='font-bold'>Metrics for Success</p>
                <ul className='list-disc ml-11 mt-2'>
                    <li>Reduction in medication and vitals-check errors</li>
                    <li>Improvement in response time to critical events</li>
                    <li>Nurse satisfaction and workload reduction scores</li>
                    <li>Time saved per nurse per shift</li>
                    <li>Compliance and security audits passed</li>
                </ul>
            </div>

            <Divider/>

            {/* Risk Mitigation */}
            <div className='mt-5 mx-11'>
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
                                <TableRow hover>  
                                    <TableCell style={{color:"white"}}>
                                        Alert Fatigue
                                    </TableCell>
                                    <TableCell style={{color:"white"}}>
                                        Priority-based filtering to minimize non-critical notifications
                                    </TableCell>
                                </TableRow>
                                <TableRow hover>  
                                    <TableCell style={{color:"white"}}>
                                        Data Privacy
                                    </TableCell>
                                    <TableCell style={{color:"white"}}>
                                        Ensured GDPR/HIPAA compliance in all data-handling processes
                                    </TableCell>
                                </TableRow>
                                <TableRow hover>  
                                    <TableCell style={{color:"white"}}>
                                        System Downtime
                                    </TableCell>
                                    <TableCell style={{color:"white"}}>
                                        Implemented redundant alert mechanisms and manual override
                                    </TableCell>
                                </TableRow>
                                <TableRow hover>  
                                    <TableCell style={{color:"white"}}>
                                        Staff Resistance
                                    </TableCell>
                                    <TableCell style={{color:"white"}}>
                                        Positioned AI as a support tool, not a replacement; involved staff in co-design
                                    </TableCell>
                                </TableRow>
                                <TableRow hover>  
                                    <TableCell style={{color:"white"}}>
                                        Integration Complexity
                                    </TableCell>
                                    <TableCell style={{color:"white"}}>
                                        Developed API-first approach for flexible EHR compatibility
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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
                    href="/project-details.pdf" // Update with your actual file path
                    download
                    className="text-[13px] inline-block px-3 py-3 bg-green-600 text-white text-lg font-medium rounded-xl shadow hover:bg-green-700 transition duration-300"
                >
                    Download Project PDF
                </a>
            </div>

        </Paper>

        
    </div>
  )
}

export default page



// #212121
// 232323