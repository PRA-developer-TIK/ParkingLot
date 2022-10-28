import Navmain from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import React,{useState,useEffect} from "react";
// import Chart from "./components/Analytics/Chart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//AWS
import * as AWS from 'aws-sdk';
import BarChart from "./components/Analytics/BarChart";
import LineChart from "./components/Analytics/LineChart";




function App() {
  const [dynamoData, setDynamoData] = useState([]);

    useEffect(()=>{

       const onRead = () => {
  

      // var dynamodb = new AWS.DynamoDB();
      var docClient = new AWS.DynamoDB.DocumentClient();

       
        let params = {
            TableName: "Parked_Data"
        };

        docClient.scan(params, function(err, data) {
        if (err) {
            console.log("err is ",err);
        } else {
        
          console.log(data);
        }
    });
};

onRead();

},[]);

  
  return (
  
    <>
      
      <BrowserRouter>
                <Navmain/>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="weekDay" element={<BarChart />} />
          <Route  path="revenue" element={<LineChart />}  />
        </Routes>

    </BrowserRouter>
    </>


      
    
    );
}
export default App;


