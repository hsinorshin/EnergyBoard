import './App.css';
import { useEffect, useState } from 'react';
import { interFlowsToBarChartData } from './mappers/interFlowsToBarChartData';
import { BarChart } from './components/BarChart';
import { FuelTypeList } from './components/FuelTypeList';
import elexonLogo from "./assets/elexonLogo.png";
import { getCurrentTime } from './helpers/timeFormatter';

export default function App() {
  const [displayBoxContents, setDisplayBoxContents] = useState(homeDisplay);
  const [lastUpdated, setLastUpdated] = useState(getCurrentTime());
  const [interFlowBCD, setInterFlowBCD] = useState(interFlowsToBarChartData());

  useEffect(() => { const interval = setInterval(() => {setInterFlowBCD(interFlowsToBarChartData()); setLastUpdated(getCurrentTime());}, 300000);
                    return () => clearInterval(interval);  
                  }, []);

  return (
    <div className="App">

      <div className="displayBox">
        <h1>⚡🔋 Elexon EnergyBoard 🔋⚡</h1>
        
        {displayBoxContents}

        <p>Last Updated: {lastUpdated}</p>
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
                       <img src={elexonLogo} alt="Elexon Logo" width="700" height="400"></img> 
                    </h3> 
