import { useEffect, useState } from 'react';
import { FuelProfile } from '../models/FuelProfileModel';

export const FuelTypeToPieChartData=(jsonData: Array<FuelProfile>) => {


    const pcd = jsonData.map((d:FuelProfile) => 
    {
        return {
            field1: d.fuelType,
            field2: d.currentUsage
        }
    })
      
  return pcd

}
