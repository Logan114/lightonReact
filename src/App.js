import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Jatekter from './components/Jatekter';

function App() {
  const [lista,setlista] = useState([true,true,false,true,false,false,false,false,true])
  function katt(adat){
    const segedlista = [...lista]
    if (adat === false ){
      adat = true
    }
    else{
      adat=false  
    }
    setlista([...segedlista])
  }
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <article>
      <Jatekter  lista={lista} />
      </article>
    </div>
  );
}

export default App;
