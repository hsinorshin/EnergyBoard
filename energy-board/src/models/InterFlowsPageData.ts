export interface BarChartData {
    categories : string[], 
    chartTitle : string, 
    values : number[]
}

export const emptyBCD : BarChartData = {
    categories : [],
    chartTitle : "",
    values : [],
}

export interface InterFlowsPageData {
    barChartData : BarChartData,
    showPeriod : number,
    minPeriod : number,
    maxPeriod : number
}

export const emptyIFPD : InterFlowsPageData = {
    barChartData : structuredClone(emptyBCD),
    showPeriod : 0,
    minPeriod : 0,
    maxPeriod : 0
}


