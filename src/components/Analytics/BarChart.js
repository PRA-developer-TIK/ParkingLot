import React, { useState, useEffect } from 'react'
import { MDBContainer } from 'mdb-react-ui-kit';
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

import {Bar} from "react-chartjs-2";


ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    LineElement,
    PointElement, Filler,Tooltip

)



const BarChart = () => {

    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOpt, setChartOpt] = useState({});
    
    useEffect(() => {
        setChartData({
            labels: ["Morning", "Evening", "Afternoon"],
            datasets: [{
                label: "Car parking times",
                data: [12, 34, 44],
                borderColor: "rgb(53,162,235)",
                backgroundColor: "rgba(53,162,235,0.4)"
            }]

        });

        setChartOpt({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Car parking times"
                }
            }
        })
        
    },[]);

    return (
        <MDBContainer>
            <Bar data={chartData} options={chartOpt } />
        </MDBContainer>
        
      
  )
}

export default BarChart