import './App.css';
import { FuelTypeList } from './components/FuelTypeList';
import { useState } from 'react';
import { getFuelTypes } from './repository/repository';
import { FuelProfile } from './models/FuelProfileModel';
import { FuelTypePieChart } from './components/PieChart';


export default function App() {

  const [displayBoxContents, setDisplayBoxContents] = useState(<p>Welcome to the Elexon EnergyBoard!</p>);

  return (
    <div className="App">
      <h1>Elexon EnergyBoard</h1>

      <div className="sidenav">
        
        <button onClick={() => setDisplayBoxContents(<p>Fuel Generation Pie Chart</p>)}>Fuel Generation</button> <br></br>
        

        <button onClick={() => DisplayFuelTypes}>Fuel Type</button> <br></br>


      </div>

      {displayBoxContents}

    </div>
  );
}

const DisplayFuelTypes =() =>{
  
  const [data, setData] = useState([]);
  
  getFuelTypes()
  .then((res) => res.json())
        .then((actualData) => {
          console.log(actualData);
          setData(actualData)
          console.log(data);
          console.log("CONGRATULATIONS");
        })
        .catch((err) => {
          console.log(err.message);
        });

  
  return (<>
  
  <div className="FuelType">
    <tr>
      <td>Fuel Type</td>
      <td>Current Usage</td>
      <td>Current Percentage</td>
    </tr>

    {data.length>0 && data.map(
      (item: FuelProfile, index) =>(
        
        <tr key={index}>
            <td>{item.fuelType}</td>
            <td>{item.currentUsage}</td>
            <td>{item.currentPercentage}</td>
          </tr>
      )
    )}
      
      {FuelTypePieChart(data)}
    
      
  </div>
    
  </>)
  
}