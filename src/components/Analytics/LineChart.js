import React, { useState, useEffect } from "react";
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

import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdb-react-ui-kit";

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

const LineChart = ({ dynamoData }) => {
  const [revArr, setRevArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const calRev = () => {
      let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      // console.log(dynamoData);
      dynamoData?.map((obj) => {
        const month = new Date(obj.Time).getMonth();
        console.log("mis ", month);
        const timeStr = obj.Time.substring(0, 12);
        const start = new Date(timeStr + obj.payload.Start); //timeStr + obj.payload.Start;
        const end = new Date(timeStr + obj.payload.End); //timeStr + obj.payload.End;
        // console.log(start);
        var res = Math.abs(end - start) / 1000;
        // console.log(res);
        var mins =
          (Math.floor(res / 3600) % 24) * 60 + (Math.floor(res / 60) % 60);
        console.log(mins);
        var cost = Math.round(mins * 0.5);
        console.log(cost);
        arr[month] = cost;
        setRevArr(arr);
        console.log(arr);
      });
    };
    calRev();
    setData({
      labels: [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Revenue Earned in Rs.",
          data: revArr,
          backgroundColor: "yellow",
          borderColor: "red",
          tension: 0.1,
          fill: false,
          pointStyle: "rect",
          pointBorderColor: "blue",
          pointBackgroundColor: "#fff",
          showLine: true,
        },
      ],
    });
  }, revArr);

  return (
    <MDBContainer>
      <Line data={data} />
    </MDBContainer>
  );
};

export default LineChart;
