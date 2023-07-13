import { BarChartData } from "../models/BarChartData";

export function interFlowsToBarChartData(interFlowData : Promise<Response>) {
    
    const bcd : BarChartData = {
        categories : [],
        chartTitle : "Interconnector Flows",
        values : []
    } 

    interFlowData.then((res) => res.json())
                 .then((data) => {console.log(data);
                                  data.data.map((iFlow: { generation: number; interconnectorName: string; }) => {
                                    bcd.categories.push(iFlow.interconnectorName)
                                    bcd.values.push(iFlow.generation)     
                                    })});
                                
    return bcd;
}