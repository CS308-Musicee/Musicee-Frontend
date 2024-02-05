"use client"
import React, { useEffect, useState } from 'react';
import { Chart } from 'tw-elements';

const DoughnutChartFriends: React.FC = () => {
    let doughnutChart:any = null;
    const [likes, setLikes] = useState({
        guzelkus: [],  
      });
    
      const fetchData = async () => {
        // Perform the POST request to submit the comment
        // You need to replace the placeholder URL with your actual server endpoint
        const username = localStorage.getItem("username");
        try {
          const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/user/get_common_likes_friends?user_name=${username}`, {
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
          doughnutChartCreate(wantedData);
        };
          fetchDataAndCreateChart();
      }, []);

    const doughnutChartCreate = (commonData: Record<string, number[][]>) => {
        const labels = Object.keys(commonData);
        const dataValues = Object.values(commonData) as number[][][];
        console.log("okey okeyyyyy" + dataValues);
        const lengthsArray = dataValues.map(innerArray => innerArray.length);

        const dataDoughnut = {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Common Likes',
                  data: lengthsArray,
                  backgroundColor: [
                    'rgba(63, 81, 181, 0.5)',
                    'rgba(77, 182, 172, 0.5)',
                    'rgba(66, 133, 244, 0.5)',
                    'rgba(156, 39, 176, 0.5)',
                    'rgba(233, 30, 99, 0.5)',
                    'rgba(66, 73, 244, 0.4)',
                    'rgba(66, 133, 244, 0.2)',
                  ],
                },
              ],
            },
          };
    
        if (!doughnutChart) {
            doughnutChart = new Chart(document.getElementById("doughnut-chart"), dataDoughnut);

        }
        else {
            doughnutChart.destroy;

        }
    }

    return (
        <div className="mx-auto w-11/12 overflow-hidden md:w-3/5">
            <canvas id="doughnut-chart"></canvas>
        </div>
    );
};

export default DoughnutChartFriends
