import { getTodayDate } from "../helpers/timeFormatter";

export function getFuelTypes(){
   return fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/FUELINSTHHCUR').then((res) => res.json())
   .then((actualData) => {
     console.log("CONGRATULATIONS");
     return actualData;
   })
   .catch((err) => {
     console.log(err.message);
   });
}
    
export function getInterFlows() {
   const today = getTodayDate();
   return fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/halfHourlyInterconnector?settlementDateFrom=' + today + '&settlementDateTo=' + today + '&format=json');
}

