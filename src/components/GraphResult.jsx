import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphResult = ({ job_data }) => {
  
  // Extract the required data from job_data
  const oopScores = job_data.map(job => parseInt(job.oop, 10));
  const dsScores = job_data.map(job => parseInt(job.ds, 10));
  const gkScores = job_data.map(job => parseInt(job.gk, 10));
  
  // Sum the values for each category
  const totalOopScore = oopScores.reduce((a, b) => a + b, 0);
  const totalDsScore = dsScores.reduce((a, b) => a + b, 0);
  const totalGkScore = gkScores.reduce((a, b) => a + b, 0);

  const data = {
    labels: ["OOP", "DTS", "GK"],
    datasets: [
      {
        label: "Test View",
        data: [totalOopScore, totalDsScore, totalGkScore],
        backgroundColor: ["red", "yellow", "green"],
        barThickness: 50,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="result-graph">
      <Bar data={data} options={options} className="chart-bar" />
    </div>
  );
};

export default GraphResult;
