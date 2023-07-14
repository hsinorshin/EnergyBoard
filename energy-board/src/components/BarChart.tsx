import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { BarChartData } from "../models/InterFlowsPageData";
import 'chart.js/auto'

export function BarChart(props: {bcd : BarChartData}) {
    const backgroundColouring = props.bcd.values.map(val => val >= 0 ? "rgb(0, 153, 0)" : "rgb(255, 0, 0)")

    const data = {
      labels: props.bcd.categories,
      datasets: [
        {
          backgroundColor: backgroundColouring,
          borderColor: "rgb(255, 99, 132)",
          data: props.bcd.values,
        },
      ],
    };

    return (
      <div>
        <Bar data={data}
             options={{plugins:{
                                title:{ display:true, text:props.bcd.chartTitle,  font:{size:24}},
                                legend:{ display : false}
                               }}}
                          
        />
      </div>
    );
};

