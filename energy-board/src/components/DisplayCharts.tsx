import { useEffect, useState } from "react";
import { DropDown } from "./DropDown"
import { FuelProfile, emptyFuelProfileArray } from "../models/FuelProfileModel";
import { getFuelTypes } from "../repository/repository";
import { PieApp } from "./PieChart";
import { FuelTypeToPieChartData } from "../mappers/fuelTypeToPieChartData";
import { FuelTypeDisplayTable } from "./DisplayTable";

interface Props {
    filters : string[][];
    data : Array<FuelProfile>;

}

export const DisplayCharts =({filters, data} : Props) => {
    const [displayPeriod, setDisplayPeriod] = useState("30 mins");


    return(
        <>
        
        <DropDown setPeriodFunction={setDisplayPeriod} valuelist={["30 mins", "24 hours"]}/>
        
        <PieApp pcd={FuelTypeToPieChartData(data, displayPeriod == "30mins"? "currentUsage" : "twentyFourHourUsage")} period={displayPeriod} chartTitle="Fuel Usage by GW"/>
        <FuelTypeDisplayTable dtd={data} period={displayPeriod}/>
                


        </>
    )
}