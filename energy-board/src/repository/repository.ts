



    export function getFuelTypes(){
    fetch('https://data.dev.elexon.co.uk/bmrs/api/v1/generation/outturn/summary?startTime=2023-07-11T11%3A00%3A00Z&endTime=2023-07-11T11%3A05%3A00Z&includeNegativeGeneration=true&format=json')
    .then((res) => res.json())
         .then((data) => {
            console.log(data);
            console.log("CONGRATULATIONS");
         })
         .catch((err) => {
            console.log(err.message);
         });
   
}
    
  