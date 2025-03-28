
export const metadata = {
  title: 'Paulson Mathew',
  description: 'Portfolio of Paulson Mathew',
}

import styles from './global.css'
import Navbar from './component/navbar/navbar'
import Footer from './component/Footer/footer'
import SideBar from './component/SideBar/SideBar'
import { Docker } from './component/Docker'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import HomeIcon from '@mui/icons-material/Home';
import AIRag from './component/AIRag'
import DialogflowChat from './component/AIRag';

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Itim&display=swap" rel="stylesheet"></link>
      </head>
      <body className={styles.body}>
        <Navbar/>
        
        <DialogflowChat></DialogflowChat>
        {children}
        <Footer/>
        <Docker items={
          [
            { title: 'Home', href: '/', icon: <HomeIcon style={{color:"white"}}/> }, 
            { title: 'About', href:'/#about',icon: <PersonSharpIcon style={{color:"white"}}/>,id:'about' },
            {title:"Projects",href:'/Projects',icon:<AssignmentSharpIcon style={{color:"white"}}/>}]} 
        />
        <SideBar/> 
      </body>
    </html>
  )
}
