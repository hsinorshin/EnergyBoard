import { BarChartData, emptyBCD, InterFlowsPageData, emptyIFPD } from "../models/InterFlowsPageData";
import { getInterFlows } from "../repository/repository";

export function interFlowsToPageData(period : number) {
    
    return getInterFlows().then((res) => res.json())
                          .then((data) => {
                            console.log(data);

                            period = period < 0 ? data.data[0].settlementPeriod : period;

                            const bcd = structuredClone(emptyBCD);

                            bcd.chartTitle = "Interconnector Flows for Today's Period " + period;

                            data.data.filter((iFlow: { settlementPeriod: any; }) => {return iFlow.settlementPeriod == period;})
                                     .map((iFlow: { generation: number; interconnectorName: string; }) => {
                                                                                                           bcd.categories.push(iFlow.interconnectorName)
                                                                                                           bcd.values.push(iFlow.generation)
                            });

                            const ifbd : InterFlowsPageData = {
                              barChartData : bcd,
                              showPeriod : period,
                              minPeriod : 1,
                              maxPeriod : data.data[0].settlementPeriod
                            }


                            return ifbd;
                            });
}