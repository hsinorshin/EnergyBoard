import './App.css';
import { useEffect, useState } from 'react';
import { interFlowsToBarChartData } from './mappers/interFlowsToBarChartData';
import { BarChart } from './components/BarChart';
import { FuelTypeList } from './components/FuelTypeList';

export default function App() {
  const [displayBoxContents, setDisplayBoxContents] = useState(<p>Welcome to the Elexon EnergyBoard!</p>);

  const interFlowBCD = interFlowsToBarChartData();

  return (
    <div className="App">
      <h1>Elexon EnergyBoard</h1>

      <div className="sidenav">
        
                
        <button onClick={() => setDisplayBoxContents(<BarChart bcd={interFlowBCD}/>)}>Interconnector Flows</button> <br></br>

        <button onClick={() => FuelTypeList}>Fuel Type ** </button> <br></br>        

        {/* <FuelTypeList/> */}

      </div>

      <div>
        {displayBoxContents}
      </div>


    </div>
  );
}

function GetFuelType(){
  return null;
}
