"use client"
import React, { useEffect, useState } from 'react';
import { Chart } from 'tw-elements';

const BarChartFriends: React.FC = () => {
    let barChart:any = null;
    const [likes, setLikes] = useState({
        pop: 1,  
      });
    
      const fetchData = async () => {
        // Perform the POST request to submit the comment
        // You need to replace the placeholder URL with your actual server endpoint
        const username = localStorage.getItem("username");
        try {
          const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/user/get_like_friends?user_name=${username}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log("data: ", data);
    
            setLikes(data);
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

    const BarChartCreate = (likeData:any) => {
        const labels = Object.keys(likeData);
        console.log("asdasd" + labels);
        const dataValues = Object.values(likeData);
        const dataBarHorizontal = {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Number of Tracks",
                  data: dataValues,
                },
              ],
            },
          };
          
          const optionsBarHorizontal = {
            options: {
              indexAxis: "y",
              scales: {
                x: {
                  stacked: true,
                  grid: {
                    display: true,
                    borderDash: [2],
                    zeroLineColor: "rgba(0,0,0,0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                  ticks: {
                    color: "rgba(0,0,0, 0.5)",
                  },
                },
                y: {
                  stacked: true,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: "rgba(0,0,0, 0.5)",
                  },
                },
              },
            },
          };
    
        if (!barChart) {
            barChart = new Chart(
                document.getElementById("bar-chart-horizontal"),
                dataBarHorizontal,
                optionsBarHorizontal
              );
      
          }
          else{
            barChart.destroy;
      
          }
      }

  return (
    <div className="mx-auto w-11/12 overflow-hidden md:w-3/5">
      <canvas id="bar-chart-horizontal"></canvas>
    </div>
  );
};

export default BarChartFriends
