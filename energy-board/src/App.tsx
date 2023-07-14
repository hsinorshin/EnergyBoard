import './App.css';
import { useEffect, useState } from 'react';
import { interFlowsToBarChartData } from './mappers/interFlowsToBarChartData';
import { BarChart } from './components/BarChart';
import elexonLogo from "./assets/energyTypes.png";
import { getCurrentTime } from './helpers/timeFormatter';
import { emptyBCD } from './models/BarChartData';
import { PieApp } from './components/PieChart';
import { FuelTypeToPieChartData } from './mappers/fuelTypeToPieChartData';
import { getFuelTypes } from './repository/repository';
import { emptyFuelProfileArray } from './models/FuelProfileModel';
import { FuelTypeDisplayTable } from './components/DisplayTable';

export default function App() {
  const [displayBoxContents, setDisplayBoxContents] = useState(homeDisplay);
  const [lastUpdated, setLastUpdated] = useState(getCurrentTime());
  const [interFlowBCD, setInterFlowBCD] = useState(structuredClone(emptyBCD));
  const [fuelTypePCD, setFuelTypePCD] = useState(emptyFuelProfileArray);
  

  useEffect(() => { interFlowsToBarChartData().then(bcd => setInterFlowBCD(bcd));
                    const interval = setInterval(() => {interFlowsToBarChartData().then(bcd => setInterFlowBCD(bcd)); setLastUpdated(getCurrentTime());}, 300000);
                    return () => clearInterval(interval);  
                  }, []);
  useEffect(()=> {getFuelTypes().then(pcd =>setFuelTypePCD(pcd));
                  const interval= setInterval(() => {getFuelTypes().then(pcd => setFuelTypePCD(pcd)); setLastUpdated(getCurrentTime());}, 300000);
  }, []);

  return (
    <div className="App">

      <div className="displayBox">
        <h1>⚡🔋 Elexon EnergyBoard 🔋⚡</h1> 
        
        {displayBoxContents} <br></br>

        
        <p>Last Updated: {lastUpdated}</p>
      </div>

      <div className="sidenav">
        <button className="sidenavbtn" onClick={() => setDisplayBoxContents(homeDisplay)}>Home</button> <br></br>
        
        <button className="sidenavbtn" onClick={() => setDisplayBoxContents(<BarChart bcd={interFlowBCD}/>)}>Interconnector Flows</button> <br></br>

        <button className="sidenavbtn" onClick={() => setDisplayBoxContents(<><label htmlFor="displayperiod">Usage Period : </label>
  <select name="displayperiod" id="displayperiod">
    <option value="30min">Now</option>
    <option value="24hours">24hours</option>
  </select>,<PieApp pcd={FuelTypeToPieChartData(fuelTypePCD)} chartTitle="Fuel Usage by GW"/>, <FuelTypeDisplayTable dtd={fuelTypePCD}/></>)}>Fuel Type</button> <br></br>        
      </div>
    </div>
  );
}

const homeDisplay = <h3>Welcome to the Elexon EnergyBoard! <br></br> <br></br> 
                       <img src={elexonLogo} alt="Elexon Logo" width="700" height="400"></img> 
                    </h3> 
