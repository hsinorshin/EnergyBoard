import { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";
import { FuelProfile } from "../models/FuelProfileModel";
import { PieChartData } from "../models/PieChartData";


interface Props {pcd : Array<PieChartData>; chartTitle: string}

export const PieApp = ({ pcd, chartTitle}: Props)=> {
    // let chartDatas:Array<object> = [];
    // datas.map((data) => 
    // 
    //     let chartData ={
    //         name: data.field1, value: data.field2
    //     }
        
    //     chartDatas.push(chartData)
    // });    

    return (
        <> 
        <div className="pieChart">
        <span>
            
            {chartTitle}
        </span>
        <PieChart width={700} height={700} >
        <Pie data={pcd} dataKey="field2" outerRadius={250} fill="#d0bdf4"  cx="50%"
        cy="50%" legendType="circle" paddingAngle={1} minAngle={7} label={(entry) => entry.field1}/>
    </PieChart>
    </div>
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




