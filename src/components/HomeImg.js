import { Link } from 'react-router-dom';
import HomeImage from '../assets/HomeImage.jpg';
import './HomeImg.css'

const HomeImg=()=>{
    return (
        <div className='home'>
            <div className='mask'>
                <img className='home-img' src={HomeImage} alt='homeimg'/>
            </div>
        <div className='content'>
            <p>Hi, My Name is</p>
            <h2>ALisha Paul</h2>
            <h3>I am a Front-end Developer</h3>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
        </div>
        </div>
    )
}
export default HomeImg;