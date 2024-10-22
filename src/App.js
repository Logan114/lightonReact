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
  {/* <video controls autoplay loop>
    <source src= "/fumo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video> */}
      </article>
    </div>
  );
}

export default App;
