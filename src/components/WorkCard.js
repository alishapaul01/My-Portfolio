import './WorkCard.css';
import {NavLink } from 'react-router-dom';
const WorkCard=(props)=>{
    return <div className='project-card'>
            <img src={props.imgsrc} alt='E-commerce'/>
            <h2 className='project-title'>{props.title}</h2>
                <div className='project-btns'>
                    <NavLink to={props.view} className='btn'>View</NavLink>
                    <NavLink to={props.source} className='btn'>CODE</NavLink>
                </div>
        </div>
    
 }
 export default WorkCard;