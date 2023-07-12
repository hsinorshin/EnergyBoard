import './App.css';
import { FuelTypeList } from './components/FuelTypeList';
import { useState } from 'react';


export default function App() {
  const [displayBoxContents, setDisplayBoxContents] = useState(<p>Welcome to the Elexon EnergyBoard!</p>);

  return (
    <div className="App">
      <h1>Elexon EnergyBoard</h1>

      <div className="sidenav">
        
        <button onClick={() => setDisplayBoxContents(<p>Fuel Generation Pie Chart</p>)}>Fuel Generation</button> <br></br>
        

        <FuelTypeList/>


        <a href="#">Fuel Types</a>
      </div>

      {displayBoxContents}

    </div>
  );
}
