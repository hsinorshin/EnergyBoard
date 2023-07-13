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