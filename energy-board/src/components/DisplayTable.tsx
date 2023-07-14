import { FuelProfile } from "../models/FuelProfileModel";

interface Props {dtd : Array<FuelProfile> }

export const FuelTypeDisplayTable=({dtd} : Props) => {

    return <>
    <div>
        <table className="tableWrapper">
            <tbody>
                <tr className="tableTopRow">
        <td>Fuel Type</td>
        <td>Current Usage/GW</td>
        <td>Current Percentage</td>
      </tr>
      {dtd.length>0 && dtd.map(
        (item: FuelProfile, index) =>(
          
          <tr className="tableBody" key={index}>
              <td>{item.fuelType}</td>
              <td>{item.currentUsage/1000}</td>
              <td>{item.currentPercentage}</td>
            </tr>
        )
      )}
            </tbody>
        </table>
      
      
        
    </div>

    </>
}

