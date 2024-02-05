"use client"
import React, { useEffect, useState } from 'react';
import { Chart } from 'tw-elements';

const RadarChartGenre: React.FC = () => {
    let barChart:any = null;
    const [genres, setGenres] = useState({
        pop: 1,  
      });
    
      const fetchData = async () => {
        // Perform the POST request to submit the comment
        // You need to replace the placeholder URL with your actual server endpoint
        const username = localStorage.getItem("username");
        try {
          const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/user/get_like_genre?user_name=${username}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log("data: ", data);
    
            setGenres(data);
            return data;
    
          } else {
            console.error('Failed to fetch data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    
      };
      useEffect(() => {
        const fetchDataAndCreateChart = async () => {
          const wantedData= await fetchData(); // Wait for the data to be fetched
          BarChartCreate(wantedData);
        };
          fetchDataAndCreateChart();
      }, []);

    const BarChartCreate = (genresData:any) => {
        const labels = Object.keys(genresData);
        console.log("asdasd" + labels);
        const dataValues = Object.values(genresData);
        const dataBar = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Number of Tracks',
                        data: dataValues,
                    },
              ],
            },
            options: {
                scales: {
                  y: {
                    beginAtZero: true,
                    stepSize: 1, // Set the step size to 1 to show only integer values
                    precision: 0, // Set precision to 0 to show only whole numbers
                  },
                },
              },
          };
    
        if (!barChart) {
            barChart = new Chart(document.getElementById('bar-chart'), dataBar);
      
          }
          else{
            barChart.destroy;
      
          }
      }

  return (
    <div className="mx-auto w-11/12 overflow-hidden md:w-3/5">
      <canvas id="bar-chart"></canvas>
    </div>
  );
};

export default RadarChartGenre
