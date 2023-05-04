import "../styles/TrainingStatistics.css";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { options, Data, emptyData } from "../lib/trainingStatistics";
import { fetchTrainingStatistics } from "../lib/io";

export function TrainingStatistics() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const [data, setData] = useState<Data>(emptyData);

  useEffect(() => {
    fetchTrainingStatistics(setData);
  }, []);

  return (
    <div id="statistics_container">
      <Bar
        style={{
          backgroundColor: "#a5a5ff",
          paddingBottom: "5vh",
          paddingLeft: "10vw",
        }}
        options={options}
        data={data}
      />
    </div>
  );
}
