import { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";
import { FuelProfile } from "../models/FuelProfileModel";
import { PieChartData } from "../models/PieChartData";


interface Props {pcd : Array<PieChartData> }

export const PieApp = ({ pcd }: Props)=> {
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
        <PieChart width={700} height={700}>
        <Pie data={pcd} dataKey="field2" outerRadius={250} fill="blue" />
    </PieChart>
    </>
       
    )

}

// export const FuelTypePieChart = (datas: Array<FuelProfile>) => {
//     //var pieDatas: Array<PieChartData> = [];

//     const pieDatas = datas.map((data) => 
//     {
//         return {
//             field1: data.fuelType,
//             field2: data.currentUsage
//         }
//     })

//     return PieApp(pieDatas)


// }




