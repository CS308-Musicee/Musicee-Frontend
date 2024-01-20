// components/PieChart.tsx
"use client"
import { DESTRUCTION } from 'dns';
import { useEffect } from 'react';
import { Chart } from 'tw-elements';

const PieChart: React.FC = () => {
    console.log("enenen");

  useEffect(() => {
    const dataPie = {
      type: 'pie',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '],
        datasets: [
          {
            label: 'Traffic',
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
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

    const myChart = new Chart(document.getElementById('pie-chart'), dataPie);
    // var graph = Chart.getChart("pie-chart");
    // if (graph) {
    //   graph.destroy;
    // }
    
    
  }, []);

  return (
    <div className="mx-auto w-11/12 overflow-hidden md:w-3/5">
      <canvas id="pie-chart"></canvas>
    </div>
  );
};

export default PieChart;
