import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const savings1 = null;

const Dashboard = ({ user, budget }) => {
  // console.log(budget[0].weekOneGoals)

  const chartData2 = [
    {
      name: "Week 1",
      Savings: savings1 ? savings1 : null,
      Goal: budget ? budget[0].weekOneGoals : null,
    },
    {
      name: "Week 2",
      Savings: savings1 ? savings1 : null,
      Goal: budget ? budget[0].weekTwoGoals : null,
    },
    {
      name: "Week 3",
      Savings: savings1 ? savings1 : null,
      Goal: budget ? budget[0].weekThreeGoals : null,
    },
    {
      name: "Week 4",
      Savings: savings1 ? savings1 : null,
      Goal: budget ? budget[0].weekFourGoals : null,
    },
    {
      name: "Week 5",
      Savings: savings1 ? savings1 : null,
      Goal: budget ? budget[0].weekFiveGoals : null,
    },
    {
      name: "Week 6",
      Savings: savings1 ? savings1 : null,
      Goal: budget ? budget[0].weekSixGoals : null,
    },
  ];

  return (
    <div
      style={{ background: "white", display: "grid", justifyContent: "center" }}
    >
      <h4 style={{ textAlign: "center" }}>Your Goals</h4>
      <BarChart
        width={500}
        height={300}
        data={chartData2}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={30}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="Goal" fill="#8884d8" />
        {/* <Bar dataKey="Savings" fill="#8884d8" /> /> */}
      </BarChart>
    </div>
  );
};

export default Dashboard;
