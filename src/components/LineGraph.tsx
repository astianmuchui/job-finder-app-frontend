"use client"
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const LineGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Job Applications",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgba(74, 29, 150, 1)",
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            align: "end",

            labels: {
                usePointStyle: true,
                pointStyle: 'circle'
            }
          }

        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} id="myChart" />;
};

export default LineGraph;
