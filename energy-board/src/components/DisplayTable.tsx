import { FuelProfile } from "../models/FuelProfileModel";

export const FuelTypeDisplayTable=(data:Array<FuelProfile>) => {

    return <>
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

    </>
}

