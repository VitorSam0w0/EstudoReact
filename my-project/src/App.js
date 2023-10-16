
import './App.css';
import OutraLista from './components/Outralista';

function App() {

  const MinhaLista = ['React' , 'Vue' , 'Angular']

  return (
    <div className='container'>
      <div className='form'>
        <OutraLista itens={MinhaLista}/>
        <OutraLista itens={[]}/>
        </div>
      </div>
        )
}

export default App;
