import { BarChartData } from "../models/BarChartData";
import { getInterFlows } from "../repository/repository";

export function interFlowsToBarChartData() {
    
    const bcd : BarChartData = {
        categories : [],
        chartTitle : "Interconnector Flows",
        values : []
    } 

    getInterFlows().then((res) => res.json())
                   .then((data) => {console.log(data);
                                  data.data.map((iFlow: { generation: number; interconnectorName: string; }) => {
                                    bcd.categories.push(iFlow.interconnectorName)
                                    bcd.values.push(iFlow.generation)     
                                    })});
                                
    return bcd;
}