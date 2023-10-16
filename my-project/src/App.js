
import './App.css';
import SeuNome from './components/SeuNome';
import { useState } from 'react';

function App() {

  const [name , setName] = useState()

  return (
    <div className='container'>
      <div className='form'>
      <SeuNome name={name} setName={setName}/>
        </div>
      </div>
        )
}


export default App;
