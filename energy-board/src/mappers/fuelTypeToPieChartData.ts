import { useEffect, useState } from 'react';
import { FuelProfile } from '../models/FuelProfileModel';

export const FuelTypeToPieChartData=(fuelTypeData : Promise<Response>) => {
    const [data, setData] = useState([]);

    fuelTypeData
    .then((res) => res.json())
          .then((actualData) => {
            setData(actualData)
            console.log("CONGRATULATIONS");
          })
          .catch((err) => {
            console.log(err.message);
          });

    const pcd = data.map((d:FuelProfile) => 
    {
        return {
            field1: d.fuelType,
            field2: d.currentUsage
        }
    })
      
  return pcd

}
