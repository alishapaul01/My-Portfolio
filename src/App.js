import { Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
import './index.css'
const App =()=>{
 return(
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/project' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </>
 )
}

export default App;