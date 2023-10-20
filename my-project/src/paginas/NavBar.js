import { Link } from "react-router-dom"
import '../Estilos/NavBar.css'

function NavBar() {
    return (
        <div className="containerNav">
          <div className="container">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Empresa'>Empresa</Link></li>
              <li><Link to='/Contato'>Contato</Link></li>
            </ul>
          </div>
        </div>
    )
}

export default NavBar