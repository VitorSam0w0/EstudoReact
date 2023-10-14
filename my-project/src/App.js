
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form'

function App() {
  return (
    <div>
      <Evento numero = {1}/>
      <Evento numero = {2}/>
      <Evento numero = {3}/>

      <Form/>

    </div>
  );
}

export default App;
