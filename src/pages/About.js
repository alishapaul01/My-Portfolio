import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from '../components/Image'
import Skills from "../components/Skills";
const About=()=>{
    return(
        <>
        <Navbar/>
        <Image heading='ABOUT ME' text='I am skilled as a front end developer and looking for opportunities in the same field.'/>
        <Skills/>
        <Footer/>
        </>
    )
}

export default About;