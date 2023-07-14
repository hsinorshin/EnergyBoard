export interface FuelProfile {
    fuelType: string;
    currentUsage: number;
    currentPercentage: number;
    twentyFourHourUsage: number;
    twentyFourHourPercentage: number;

  }

  export const emptyFuelProfileArray: Array<FuelProfile> = [{
    fuelType: "",
    currentUsage: 0,
    currentPercentage: 0,
    twentyFourHourUsage:0 ,
    twentyFourHourPercentage: 0,

  }
]