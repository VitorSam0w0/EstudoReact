import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from './paginas/NavBar'
import Home from './paginas/Home'
import Empresa from "./paginas/Empresa";
import Contato from "./paginas/Contato";

function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;