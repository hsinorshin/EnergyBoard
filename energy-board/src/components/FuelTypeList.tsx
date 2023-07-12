import { getFuelTypes } from "../repository/repository";
import { useEffect, useState } from "react";


export const FuelTypeList = () => {
  interface FuelProfile {
    fuelType: string;
    currentUsage: number;
    currentPercentage: number;

  }

  const [data, setData] = useState([]);
 

 const handleClick = () =>{
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

  }

  return (<>
  <button className='button' onClick={handleClick}>
          Fuel Types
        </button>
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
      
  </div>
    
  </>)
  
}

