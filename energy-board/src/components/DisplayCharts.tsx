import { useEffect, useState } from "react";
import { DropDown } from "./DropDown"
import { FuelProfile, emptyFuelProfileArray } from "../models/FuelProfileModel";
import { getFuelTypes } from "../repository/repository";
import { PieApp } from "./PieChart";
import { FuelTypeToPieChartData } from "../mappers/fuelTypeToPieChartData";
import { FuelTypeDisplayTable } from "./DisplayTable";
import { CheckList } from "./CheckList";

interface Props {
    filters : string[][];
    data : Array<FuelProfile>;

}

export const DisplayCharts =({filters, data} : Props) => {
    const [displayPeriod, setDisplayPeriod] = useState("30 mins");
    const [displayCharts, setDisplayCharts] = useState(["Table"])

    return(
        <>
        
        <div className="filter">
        <DropDown setPeriodFunction={setDisplayPeriod} valuelist={["30 mins", "24 hours"]}/>
        
        <div className="ChartCheckList">
        <CheckList setChartsFunction={setDisplayCharts} checkList={["Pie Chart", "Table", "Bar Chart"]}/>
        </div>
        </div>
        <span>



        {displayCharts.includes("Pie Chart") &&
            <PieApp pcd={FuelTypeToPieChartData(data, displayPeriod == "30mins"? "currentUsage" : "twentyFourHourUsage")} period={displayPeriod} chartTitle="Fuel Usage by GW"/>
        }  

        {displayCharts.includes("Table") &&
            <FuelTypeDisplayTable dtd={data} period={displayPeriod}/>
        }

        {displayCharts.includes("Bar Chart")&&
        <p>bar chart display</p>
        }
        
        
        </span>        


        </>
    )
}