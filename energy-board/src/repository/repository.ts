import { useState } from "react";



    export function getFuelTypes(){
    return fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/FUELINSTHHCUR')
    
   
}
    
export function getInterFlows() {
   return fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/halfHourlyInterconnector?settlementDateFrom=2023-07-11&settlementDateTo=2023-07-11&settlementPeriod=1&format=json');

   /*const [data, setData] = useState([]);
   fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/FUELINSTHHCURhttps://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/halfHourlyInterconnector?settlementDateFrom=2023-07-11&settlementDateTo=2023-07-11&settlementPeriod=1&format=json')
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => {console.log(err.message);});
   return data;*/
}

