import { getTodayDate } from "../helpers/dateTimeFuncs";


export function getFuelTypes(){
   return fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/FUELINSTHHCUR')
}
    
export function getInterFlows() {
   const today = getTodayDate();
   return fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/halfHourlyInterconnector?settlementDateFrom=' + today + '&settlementDateTo=' + today + '&format=json');
}

