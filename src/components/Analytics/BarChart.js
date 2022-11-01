import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  LineElement,
  PointElement,
  Filler,
  Tooltip
);

const BarChart = ({ dayArr, dynamoData }) => {
  const [revArr, setRevArr] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOpt, setChartOpt] = useState({});

  useEffect(
    () => {
      const calRev = () => {
        let arr = [0, 0, 0, 0, 0, 0, 0];
        // console.log(dynamoData);
        dynamoData?.map((obj) => {
          const day = new Date(obj.Time).getDay();

          // console.log("mis ", day);
          const timeStr = obj.Time.substring(0, 12);
          // console.log(timeStr);
          const start = new Date(timeStr + obj.payload.Start); //timeStr + obj.payload.Start;
          const end = new Date(timeStr + obj.payload.End); //timeStr + obj.payload.End;
          // console.log(start);
          var res = Math.abs(end - start) / 1000;
          // console.log(res);
          var mins =
            (Math.floor(res / 3600) % 24) * 60 + (Math.floor(res / 60) % 60);
          // console.log(mins);
          var cost = Math.round(mins * 0.5);
          // console.log(cost);
          arr[day] = cost;
          setRevArr(arr);
          // console.log(arr);
        });
      };
      calRev();

      setChartData({
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            label: "Cars parked",
            data: dayArr,
            borderColor: "rgb(46,100,235)",
            backgroundColor: "	rgba(0, 0, 0,0.4)",
          },
          {
            label: "revenue ",
            data: revArr,
            borderColor: "rgb(46,100,235)",
            backgroundColor: "	rgba(0, 0, 0,0.8)",
          },
        ],
      });

      setChartOpt({
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Car parking times",
          },
        },
      });
    },
    revArr,
    dayArr
  );

  return (
    <MDBContainer>
      <Bar data={chartData} options={chartOpt} />;
    </MDBContainer>
  );
};

export default BarChart;
