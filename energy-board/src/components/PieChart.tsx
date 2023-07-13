import { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";
import { FuelProfile } from "../models/FuelProfileModel";

interface PieChartData {
    field1: string;
    field2: number; 

}

const PieApp = (datas: Array<PieChartData>)=> {
    // let chartDatas:Array<object> = [];
    // datas.map((data) => 
    // {
    //     let chartData ={
    //         name: data.field1, value: data.field2
    //     }
        
    //     chartDatas.push(chartData)
    // });    


    return (
        <> 
        hi
        <PieChart width={700} height={700}>
        <Pie data={datas} dataKey="field2" outerRadius={250} fill="blue" />
    </PieChart>
    hey
    </>
       
    )

}

export const FuelTypePieChart = (datas: Array<FuelProfile>) => {
    //var pieDatas: Array<PieChartData> = [];

    const pieDatas = datas.map((data) => 
    {
        return {
            field1: data.fuelType,
            field2: data.currentUsage
        }
    })

    return PieApp(pieDatas)


}




