import './App.css';
import { useEffect, useState } from 'react';
import { BarChart } from './components/BarChart';
import elexonLogo from "./assets/energyTypes.png";
import { emptyBCD, emptyIFPD } from './models/InterFlowsPageData';
import { PieApp } from './components/PieChart';
import { FuelTypeToPieChartData } from './mappers/fuelTypeToPieChartData';
import { getFuelTypes } from './repository/repository';
import { emptyFuelProfileArray } from './models/FuelProfileModel';
import { FuelTypeDisplayTable } from './components/DisplayTable';
import { DropDown } from './components/DropDown';
import { DisplayCharts } from './components/DisplayCharts';
import { getCurrentTime, getTimeToNextUpdate, updateInterval } from './helpers/dateTimeFuncs';
import { InterFlowPage } from './components/InterFlowPage';
import { interFlowsToPageData } from './mappers/interFlowsToPageData';

export default function App() {
  const [displayBoxContents, setDisplayBoxContents] = useState(homeDisplay);

  const [lastUpdated, setLastUpdated] = useState(getCurrentTime());
  const [timeToNextUpdate, setTimeToNextUpdate] = useState(getTimeToNextUpdate(lastUpdated));

  const [fuelTypePCD, setFuelTypePCD] = useState(emptyFuelProfileArray);

  

  useEffect(() => { reloadData();
                    const interval = setInterval(() => {reloadData();}, updateInterval);
                    return () => clearInterval(interval);  
                  }, []);

  useEffect(() => {const timer = setTimeout(() => {setTimeToNextUpdate(getTimeToNextUpdate(lastUpdated));}, 1000);});

  function reloadData() {
    getFuelTypes().then(pcd =>setFuelTypePCD(pcd));
    setLastUpdated(getCurrentTime());
  }

  return (
    <div className="App">

      <div className="displayBox">
        <h1>⚡🔋 Elexon EnergyBoard 🔋⚡</h1> 
        
        {displayBoxContents} <br></br>
      </div>

      <div className='footer'> 
          Last Updated: {lastUpdated} &emsp; &emsp;  &emsp; &emsp;  &emsp; 
          Time to Next Update: {timeToNextUpdate} &emsp; &emsp;  &emsp; &emsp;  &emsp; 
          <button onClick={reloadData}>Manual Update</button>
      </div>

      <div className="sidenav">
        <button className="sidenavbtn" onClick={() => setDisplayBoxContents(homeDisplay)}>Home</button> <br></br>
        
        <button className="sidenavbtn" onClick={() => setDisplayBoxContents(<InterFlowPage/>)}>Interconnector Flows</button> <br></br>

        <button className="sidenavbtn" onClick={() => setDisplayBoxContents(<><DisplayCharts filters={[[]]} data={fuelTypePCD}/></>)}> Display Charts </button> <br></br>
      </div>
    </div>
  ); 
}

const homeDisplay = <h3>Welcome to the Elexon EnergyBoard! <br></br> <br></br> 
                       <img src={elexonLogo} alt="Elexon Logo" width="1000" height="500"></img> 
                    </h3> 
