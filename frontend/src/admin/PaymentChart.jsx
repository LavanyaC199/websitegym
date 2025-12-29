// import { useEffect, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// /* REGISTER CHART.JS (MUST BE ONCE) */
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend
// );

// export default function PaymentChart() {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   // ✅ Dummy data (working & visible)
//   useEffect(() => {
//     setChartData({
//       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//       datasets: [
//         {
//           label: "Payments (₹)",
//           data: [12000, 18000, 15000, 22000, 26000, 30000],
//           backgroundColor: "rgba(34,197,94,0.85)",
//           borderRadius: 14,
//           barThickness: 40,
//         },
//       ],
//     });
//   }, []);

//   return (
//     <div className="chart-card">
//       <h3>💳 Monthly Payments</h3>

//       {/* HEIGHT IS REQUIRED FOR CHART.JS */}
//       <div style={{ height: "350px" }}>
//         <Bar
//           data={chartData}
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,

//             plugins: {
//               legend: {
//                 position: "top",
//                 labels: {
//                   color: "#ffffff",
//                   font: {
//                     size: 14,
//                     weight: "bold",
//                   },
//                 },
//               },
//               tooltip: {
//                 backgroundColor: "#111827",
//                 titleColor: "#22c55e",
//                 bodyColor: "#ffffff",
//                 borderColor: "#22c55e",
//                 borderWidth: 1,
//               },
//             },

//             scales: {
//               x: {
//                 ticks: {
//                   color: "#ffffff",
//                   font: { weight: "bold" },
//                 },
//                 grid: {
//                   display: false,
//                 },
//               },
//               y: {
//                 ticks: {
//                   color: "#ffffff",
//                   font: { weight: "bold" },
//                 },
//                 grid: {
//                   color: "rgba(255,255,255,0.15)",
//                 },
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

/* REGISTER CHART.JS */
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function PaymentChart() {
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);

  useEffect(() => {
    // Monthly bar chart data
    setBarData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Monthly Payments (₹)",
          data: [12000, 18000, 15000, 22000, 26000, 30000],
          backgroundColor: "rgba(34,197,94,0.85)",
          borderRadius: 12,
          barThickness: 40,
        },
      ],
    });

    // Pie chart data (distribution)
    setPieData({
      labels: ["Membership", "Personal Training", "Diet Plan"],
      datasets: [
        {
          data: [55, 30, 15],
          backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b"],
          borderWidth: 2,
        },
      ],
    });
  }, []);

  if (!barData || !pieData) {
    return <p style={{ color: "white" }}>Loading charts...</p>;
  }

  return (
    <div className="chart-card">
      <h3>💳 Payment Analytics</h3>

      {/* BAR CHART */}
      <div style={{ height: "340px", marginBottom: "40px" }}>
        <Bar
          data={barData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: "#c22626ff",
                  font: { weight: "bold" },
                },
              },
            },
            scales: {
              x: {
                ticks: { color: "#e41616ff" },
                grid: { display: false },
              },
              y: {
                ticks: { color: "#be0f0fff" },
                grid: { color: "rgba(141, 47, 10, 0.15)" },
              },
            },
          }}
        />
      </div>

      {/* PIE CHART */}
      <div style={{ height: "280px" }}>
        <Pie
          data={pieData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  color: "#b92020ff",
                  font: { weight: "bold" },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
