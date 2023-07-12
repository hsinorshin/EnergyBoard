import './App.css';
import { FuelTypeList } from './components/FuelTypeList';
import { useState } from 'react';


export default function App() {
  const [displayBoxContents, setDisplayBoxContents] = useState(<p>Welcome to the Elexon EnergyBoard!</p>);

  return (
    <div className="App">
      <h1>Elexon EnergyBoard</h1>

      <div className="sidenav">
        
        <FuelTypeList/> <br></br>
        
        <button onClick={() => setDisplayBoxContents(<p>Interconnector Flows BarChart</p>)}>Interconnector Flows</button>

      </div>

      {displayBoxContents}

    </div>
  );
}
