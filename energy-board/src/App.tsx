import './App.css';
import { useEffect, useState } from 'react';
import { getInterFlows } from './repository/repository';
import { interFlowsToBarChartData } from './mappers/interFlowsToBarChartData';
import { BarChart } from './components/BarChart';
import { FuelTypeList } from './components/FuelTypeList';

export default function App() {
  const [displayBoxContents, setDisplayBoxContents] = useState(<p>Welcome to the Elexon EnergyBoard!</p>);

  //const [interConnectorFlowData, setICFData] = useState();

  //useEffect(() => {(getInterFlows) =>
  //                 setInterFlowData()}, []);

  return (
    <div className="App">
      <h1>Elexon EnergyBoard</h1>

      <div className="sidenav">
        
        <button onClick={() => setDisplayBoxContents(<p>Fuel Generation Pie Chart</p>)}>Fuel Generation</button> <br></br>
        

        <button onClick={() => FuelTypeList}>Fuel Type ** </button> <br></br>

        

        {/* <FuelTypeList/> */}

        <button onClick={() => setDisplayBoxContents(<BarChart bcd={interFlowsToBarChartData(getInterFlows())}/>)}>Interconnector Flows</button> <br></br>

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
