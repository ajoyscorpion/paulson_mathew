"use client"; // This ensures it only runs on the client side

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion } from 'framer-motion'

const projectId = process.env.NEXT_PUBLIC_DIALOGFLOW_PROJECT_ID;
const agentId = process.env.NEXT_PUBLIC_DIALOGFLOW_AGENT_ID;

export default function DialogflowChat() {
  useEffect(() => {
    // Apply global styles dynamically
  const style = document.createElement("style");
  style.innerHTML = `
    df-messenger {
      position: fixed;
      bottom: 30px;
      right: 50px;
      z-index: 999;
      --df-messenger-font-color: #000;
      --df-messenger-font-family: "Google Sans", sans-serif;
      --df-messenger-chat-background: #262626;
      --df-messenger-message-user-background: #d3e3fd;
      --df-messenger-message-bot-background: #fff;
      --df-messenger-chat-border-radius: 15px;
      --df-messenger-focus-color-contrast:#ff0032;
      --df-messenger-titlebar-background: #262626;
      --df-messenger-titlebar-title-align: center;
      --df-messenger-send-icon-color: "#ffffff";
      --df-messenger-send-icon-color-active: "#ffffff";
      --df-messenger-chat-bubble-background:"#ff0032";
      --df-messenger-chat-bubble-icon-color:#ffffff;
      --df-messenger-chat-bubble-icon:/images/AIRag.png;
      --df-messenger-chat-bubble-icon-size:75px;
    }
    
  `;
  document.head.appendChild(style);


  }, []);

  

  return (
    <motion.div

    >
      {/* Load external stylesheet */}
      <Link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"/>

      {/* Load external script using Next.js <Script> */}
      <Script
        src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js" // Ensures script loads only after page hydration
      ></Script>

      
      <df-messenger
        project-id={projectId}
        agent-id={agentId}
        language-code="en"
        max-query-length="-1"
        session-ttl="900"
      >
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            duration:0.7,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <df-messenger-chat-bubble 
            chat-title="Assistant"
            chat-icon="/images/AIRag.png"
          >
            
          </df-messenger-chat-bubble>
        </motion.div>
      </df-messenger>
    </motion.div>
  );
}







// import { useEffect, useState } from "react";
// import Image from "next/image";

// function AIRag() {

//   return (
//     <>
//         <df-messenger
//           project-id="paulson-mathew-website"
//           agent-id="c9846b66-c447-4d7e-8501-add4dc0bad1f"
//           language-code="en"
//           max-query-length="-1"
//             style={{position:"fixed",bottom:"0",right:"0"}}
//           >
//           <df-messenger-chat-bubble
//           chat-title="Paulson Mathew Chatbot">
//           </df-messenger-chat-bubble>
//         </df-messenger>
//     </>
//   );
// }

// export default AIRag;