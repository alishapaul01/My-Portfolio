import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Image from '../components/Image';
import Work from '../components/Work';
const Projects=()=>{
    return(
        <div>
        <Navbar/>
        <Image heading='PROJECTS' text='Have a look at my recent projects'/>
        <Work/>
        <Footer/>
        </div>
    )
}

export default Projects;