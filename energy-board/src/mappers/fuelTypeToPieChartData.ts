import { useEffect, useState } from 'react';
import { FuelProfile } from '../models/FuelProfileModel';

export const FuelTypeToPieChartData=(jsonData: Array<FuelProfile>, f2: string) => {


    const pcd = jsonData.map((d:FuelProfile) => 
    {
        // const field1:keyof FuelProfile = f1;

        if (f2=="twentyFourHourUsage") {
            return {
            field1: d.fuelType,
            field2: d.twentyFourHourUsage
            }
        }
        
        else {
        return {
            field1: d.fuelType,
            field2: d.currentUsage
        }
    }
    })
      
  return pcd

}
