// components/PieChart.tsx
"use client"
import { DESTRUCTION } from 'dns';
import { useEffect, useState } from 'react';
import { Chart } from 'tw-elements';







const PieChart: React.FC = () => {
  let myChart:any = null;
  const [artists, setArtists] = useState({
    JustinTimberlake: 1,
    EdSheeran: 1,
    Coldplay: 1,
    ArianaGrande: 1
  });

  const fetchData = async () => {
    // Perform the POST request to submit the comment
    // You need to replace the placeholder URL with your actual server endpoint
    const username = localStorage.getItem("username");
    try {
      const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/user/get_like_artist?user_name=${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("data: ", data);

        setArtists(prevChartData => {
          console.log('Received data:', data);
          console.log('Previous chartData:', prevChartData);
          return data; // Set the new state
        });

      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };
  useEffect(() => {
    const fetchDataAndCreateChart = async () => {
      await fetchData(); // Wait for the data to be fetched
      PieChartCreate();
    };
    fetchDataAndCreateChart();
  }, []);


  const PieChartCreate = ()=>{
    const labels = Object.keys(artists);
    console.log("asdasd" + labels);
    const dataValues = Object.values(artists);
    const dataPie = {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Traffic',
            data: dataValues,
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

    if (!myChart) {
      myChart = new Chart(document.getElementById('pie-chart'), dataPie);

    }
    else{
      myChart.destroy;

    }
    
  }

  return (
    <div className="mx-auto w-11/12 overflow-hidden md:w-3/5">
      <canvas id="pie-chart"></canvas>
    </div>
  );
};

export default PieChart;
