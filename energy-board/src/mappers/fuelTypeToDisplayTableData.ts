/*NOT CURRENTLY BEING USED */


import { useEffect, useState } from 'react';
import { FuelProfile } from '../models/FuelProfileModel';

export const FuelTypeToDisplayTableData=(fuelTypeData : Promise<Response>) => {
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

    return data
    
}