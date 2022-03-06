import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const savings1 = null;

const Dashboard = ({ user, budget }) => {
  // console.log(budget[0].weekOneGoals)

  // data for Goals Chart
  // data for Goals Chart
  // data for Goals Chart
  const goalsChartData = [
    {
      name: "Week 1",
      Savings: savings1 ? savings1 : null,
      Goal: budget[0] ? budget[0].weekOneGoals : null,
    },
    {
      name: "Week 2",
      Savings: savings1 ? savings1 : null,
      Goal: budget[0] ? budget[0].weekTwoGoals : null,
    },
    {
      name: "Week 3",
      Savings: savings1 ? savings1 : null,
      Goal: budget[0] ? budget[0].weekThreeGoals : null,
    },
    {
      name: "Week 4",
      Savings: savings1 ? savings1 : null,
      Goal: budget[0] ? budget[0].weekFourGoals : null,
    },
    {
      name: "Week 5",
      Savings: savings1 ? savings1 : null,
      Goal: budget[0] ? budget[0].weekFiveGoals : null,
    },
    {
      name: "Week 6",
      Savings: savings1 ? savings1 : null,
      Goal: budget[0] ? budget[0].weekSixGoals : null,
    },
  ];
  // data for Friends Chart
  // data for Friends Chart
  // data for Friends Chart
  const friendsChartData = [

  ]

  

  return (
    <div
      style={{ background: "darkgrey", display: "grid", justifyContent: "center" }}
    >
      <h4 style={{ textAlign: "center" }}>Your Goals</h4>
      <BarChart
        width={500}
        height={300}
        data={goalsChartData}
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
        <LineChart
          width={500}
          height={300}
          // data={friendsChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
    </div>
  );
};

export default Dashboard;
