import { BarChartData, emptyBCD } from "../models/BarChartData";
import { getInterFlows } from "../repository/repository";

export function interFlowsToBarChartData() {
    
    return getInterFlows().then((res) => res.json())
                          .then((data) => {
                            console.log(data);

                            const lastPeriod = data.data[0].settlementPeriod;

                            const bcd = structuredClone(emptyBCD);

                            bcd.chartTitle = "Interconnector Flows for Today's Period " + lastPeriod;

                            data.data.filter((iFlow: { settlementPeriod: any; }) => {return iFlow.settlementPeriod == lastPeriod;})
                                     .map((iFlow: { generation: number; interconnectorName: string; }) => {
                                                                                                           bcd.categories.push(iFlow.interconnectorName)
                                                                                                           bcd.values.push(iFlow.generation)
                            });

                            return bcd;
                            });
}