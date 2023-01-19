import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' //as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export function BarChart() {
    const [news,setNews] = useState();
    const [labels,setLabels] = useState([]);
    

    useEffect(()=>{
        fetch("http://192.168.1.50:4040/news")
        .then((res)=>res.json())
        .then((data)=>{
            setNews(data.news)
            const lbs= [];
            data.news.map((a)=>{
                if(!lbs.includes(a.category)){
                    lbs.push(a.category)
                }
            })

            setLabels(lbs);
            const count = {}

            for (const e of data.news) {
                if (count[e.category]){
                    count[e.category] +=1
                } else {
                    count[e.category] = 1
                }
            }
            setNews(Object.values(count))
        })
    },[])
    const data = {
        labels,
        datasets : [
            {label: "number of news",data:news,backgroundColor:"rgba(255,99,132,0.5)"}
        ]
    }


  return <Bar options={options} data={data} />;
}