import {FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs, FaReact}from 'react-icons/fa';
import { SiFirebase} from "react-icons/si";
import './Skills.css'
const Skills=()=>{
    return (<>
    <h1 className='heading'>Skills</h1>
    <h4 className='content'>These are the technologies I have worked with</h4>
    <div className='icons'>
        <FaGithub size={60} style={{color:'white'}}/>
        <FaCss3 size={60} style={{color:'blue'}}/>
        <FaHtml5 size={60} style={{color:'orange'}}/>
        <FaJs size={60} style={{color:'yellow'}}/>
        <FaReact size={60} style={{color:'skyblue'}}/>
        <FaBootstrap size={60} style={{color:'white', backgroundColor:'purple'}}/>
        <SiFirebase size={60} style={{color:'orange'}}/>
        </div>
         </>
    )
}
export default Skills;