import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart(categories : string[], chartTitle : string, values : number[]) {
    const data = {
      labels: categories,
      datasets: [
        {
          title: chartTitle,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: values,
        },
      ],
    };
    return (
      <div>
        <Bar data={data} />
      </div>
    );
};