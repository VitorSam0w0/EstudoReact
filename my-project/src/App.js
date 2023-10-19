import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './paginas/NavBar'
import Home from './paginas/Home'
import Empresa from "./paginas/Empresa";
import Contato from "./paginas/Contato";
import Footer from "./paginas/Footer";
import './Estilos/cssGeral.css'

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Empresa" element={<Empresa/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App;