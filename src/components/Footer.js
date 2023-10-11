import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone}from 'react-icons/fa';
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer=()=>{
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                     <h4><FaHome size={20} style={{color:'white', marginRight:'2rem'}}/>
                     New Delhi, India</h4> 
                    </div>
                    <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'white', marginRight:'2rem'}}/>
                    8750203155
                    </h4>
                    </div>
                    <div className='mail'>
                    <h4><FaMailBulk size={20} style={{color:'white', marginRight:'2rem'}}/>
                    paulalisha32@gmail.com
                    </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Accounts: </h4>
                    <div className='social'>
                        <NavLink to='https://github.com/alishapaul01'>
                            <FaGithub size={40} style={{color:'white', marginRight:'2rem'}}/>
                        </NavLink>
                        <NavLink to='https://www.linkedin.com/in/alisha-paul-067585179'>
                    <FaLinkedin size={40} style={{color:'white', marginRight:'2rem'}}/>
                    </NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Footer;