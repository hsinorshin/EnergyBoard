import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { BarChartData } from "../models/BarChartData";
import {CategoryScale} from 'chart.js';

Chart.register(CategoryScale);

export function BarChart(props: {bcd : BarChartData}) {
    const data = {
      labels: props.bcd.categories,
      datasets: [
        {
          title: props.bcd.chartTitle,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: props.bcd.values,
        },
      ],
    };
    return (
      <div>
        <Bar data={data} />
      </div>
    );
};