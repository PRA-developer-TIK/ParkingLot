import React,{useState,useEffect}  from 'react'
import {
    Chart as ChartJs,
    CategoryScale,LinearScale,
    BarElement,
    Title,
    Legend,
    LineElement,
    PointElement, Filler,
    Tooltip

} from "chart.js";

import {Line} from "react-chartjs-2";
import { MDBContainer } from 'mdb-react-ui-kit';


ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    LineElement,
    PointElement, Filler,Tooltip
)


const LineChart = () => {

    const [data, setData]= useState({
    labels:[],
    datasets:[]
      });
    
    useEffect(() => {
        setData({
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Car dataset",
                    data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                    backgroundColor: 'yellow',
                    borderColor: 'red',
                    tension: 0.1,
                    fill: false,
                    pointStyle: 'rect',
                    pointBorderColor: 'blue',
                    pointBackgroundColor: '#fff',
                    showLine: true,
        
                }
            ]
        });
      
    }, []);

    return (
      <MDBContainer>
            <Line data={data} />
      </MDBContainer>
    
  )
}

export default LineChart