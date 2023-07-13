export interface FuelProfile {
    fuelType: string;
    currentUsage: number;
    currentPercentage: number;

  }

  export const emptyFuelProfileArray: Array<FuelProfile> = [{
    fuelType: "",
    currentUsage: 0,
    currentPercentage: 0,
  }
]