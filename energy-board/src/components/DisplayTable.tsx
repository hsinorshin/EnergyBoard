import { FuelProfile } from "../models/FuelProfileModel";

interface Props {dtd : Array<FuelProfile> }

export const FuelTypeDisplayTable=({dtd} : Props) => {

    return <>
    <div className="FuelType">
        <table>
            <tbody>
                <tr>
        <td>Fuel Type</td>
        <td>Current Usage/MW</td>
        <td>Current Percentage</td>
      </tr>
  
      {dtd.length>0 && dtd.map(
        (item: FuelProfile, index) =>(
          
          <tr key={index}>
              <td>{item.fuelType}</td>
              <td>{item.currentUsage}</td>
              <td>{item.currentPercentage}</td>
            </tr>
        )
      )}
            </tbody>
        </table>
      
      
        
    </div>

    </>
}

