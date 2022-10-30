import Navmain from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import React, { useState, useEffect } from "react";
// import Chart from "./components/Analytics/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//AWS
import * as AWS from "aws-sdk";
import BarChart from "./components/Analytics/BarChart";
import LineChart from "./components/Analytics/LineChart";

function App() {
  const [dynamoData, setDynamoData] = useState({});
  const [slotData, setSlotData] = useState([false, false, false, false]);
  const [dayArr, setDayArr] = useState([0, 0, 0, 0, 0, 0, 0]);
  useEffect(() => {
    const onRead = () => {
      // var dynamodb = new AWS.DynamoDB();
      var docClient = new AWS.DynamoDB.DocumentClient();

      let params = {
        TableName: "Parked_Data",
      };

      docClient.scan(params, function (err, data) {
        if (err) {
          console.log("err is ", err);
        } else {
          setDynamoData(data);
          let arr = [0, 0, 0, 0, 0, 0, 0];
          data.Items.map((obj) => {
            let day = new Date(obj.payload.Time).getDay();
            // console.log(day);
            arr[day] += 1;
          });
          setDayArr(arr);
          console.log(arr);

          // console.log(data);
        }
      });

      let params2 = {
        TableName: "Slot_Status",
      };

      docClient.scan(params2, function (err, data) {
        if (err) {
          console.log("err is ", err);
        } else {
          let obj = data.Items[0].payload;
          let arr = [false, false, false, false];
          for (const [key, value] of Object.entries(obj)) {
            if (key === "Id") continue;
            arr[Number(key[key.length - 1]) - 1] = value;
          }
          console.log(arr);
          setSlotData(arr);
          // console.log(arr);
          // console.log(obj);
        }
      });
    };

    onRead();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navmain />
        <Routes>
          <Route path="/" element={<Home slot={slotData} />} />
          <Route path="weekDay" element={<BarChart dayArr={dayArr} />} />
          <Route
            path="revenue"
            element={<LineChart dynamoData={dynamoData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
