import './App.css';
import { useEffect, useState } from 'react';
import { interFlowsToBarChartData } from './mappers/interFlowsToBarChartData';
import { BarChart } from './components/BarChart';
import { FuelTypeList } from './components/FuelTypeList';
import image from "./assets/elexonLogo.png";

export default function App() {
  const [displayBoxContents, setDisplayBoxContents] = useState(homeDisplay);

  const interFlowBCD = interFlowsToBarChartData();

  return (
    <div className="App">

      <div className="displayBox">
        <h1>Elexon EnergyBoard</h1>
        
        {displayBoxContents}
      </div>

      <div className="sidenav">
        <button className="sidenavbtn" onClick={() => setDisplayBoxContents(homeDisplay)}>Home</button> <br></br>
        
        <button className="sidenavbtn" onClick={() => setDisplayBoxContents(<BarChart bcd={interFlowBCD}/>)}>Interconnector Flows</button> <br></br>

        <button className="sidenavbtn" onClick={() => FuelTypeList}>Fuel Type ** </button> <br></br>        

        {/* <FuelTypeList/> */}

      </div>

    </div>
  );
}

const homeDisplay = <h3>Welcome to the Elexon EnergyBoard! <br></br>  
                       <img src={image} alt="Elexon Logo" width="700" height="400"></img> 
                    </h3> 
