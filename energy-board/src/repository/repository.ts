



    export function getFuelTypes(){
    return fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/FUELINSTHHCUR')
    
   
}
    
export function getInterFlowsTypes(){
    fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/halfHourlyInterconnector?settlementDateFrom=2023-07-11&settlementDateTo=2023-07-11&settlementPeriod=1&format=json')
    .then((res) => res.json())
            .then((data) => {
            console.log(data);
            })
            .catch((err) => {
            console.log(err.message);
            });
    }