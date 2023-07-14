import { FuelProfile } from "../models/FuelProfileModel";

interface Props {dtd : Array<FuelProfile>; period: string;}

export const FuelTypeDisplayTable=({dtd, period} : Props) => {

    return <>
    <div>
        <table className="tableWrapper">
            <tbody>
                <tr className="tableTopRow">
        <td>Fuel Type</td>
        <td>Past {period} Usage/GW</td>
        <td>Past {period} Percentage</td>
      </tr>
      {dtd.length>0 && dtd.map(
        (item: FuelProfile, index) =>(
          
          <tr className="tableBody" key={index}>
              <td>{item.fuelType}</td>
              
              <td>{period=="30 mins"? item.currentUsage/1000 : item.twentyFourHourUsage/1000}</td>
              <td>{period=="24 hours"?item.currentPercentage: item.twentyFourHourPercentage}</td>
            </tr>
        )
      )}
            </tbody>
        </table>
      
      
        
    </div>

    </>
}

