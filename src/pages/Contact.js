
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Image from '../components/Image';
import Navbar from '../components/Navbar'
const Contact=()=>{
    return(
        <div>
        <Navbar/>
        <Image heading='CONTACT' text='Lets Connect : Submit the Form below or email at paulalisha32@gmail.com'/>
        <ContactForm/>
        <Footer/>
        </div>
    )
}

export default Contact;