import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./paginas/Home";
import Empresa from "./paginas/Empresa";
import Contato from "./paginas/Contato";
import NavBar from "./paginas/NavBar";

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/empresa">
            <Empresa/>
          </Route>
          <Route path="/contato">
            <Contato/>
          </Route>
        </Switch>
      </Router>
      </div>
          )
}


export default App;
