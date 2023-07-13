import { FuelProfile } from "../models/FuelProfileModel";
import { getFuelTypes } from "../repository/repository";
import { useEffect, useState } from "react";
import { FuelTypePieChart } from "./PieChart";


export const FuelTypeList = () => {

  
  
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
