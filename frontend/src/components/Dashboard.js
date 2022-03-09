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

const Dashboard = ({ user, budget, personBudget }) => {
  // data for Goals Chart
  // data for Goals Chart
  // data for Goals Chart
  const goalsChartData = [
    {
      name: "Week 1",
      Goal: user ? user.budget.weekOneGoals : null,
    },
    {
      name: "Week 2",
      Goal: user ? user.budget.weekTwoGoals : null,
    },
    {
      name: "Week 3",
      Goal: user ? user.budget.weekThreeGoals : null,
    },
    {
      name: "Week 4",
      Goal: user ? user.budget.weekFourGoals : null,
    },
    {
      name: "Week 5",
      Goal: user ? user.budget.weekFiveGoals : null,
    },
    {
      name: "Week 6",
      Goal: user ? user.budget.weekSixGoals : null,
    },
  ];

  // data for Friends Chart
  // data for Friends Chart
  // data for Friends Chart
  const friendsChartData = [
    {
      name: "Week 1",
      Person1: personBudget[0] ? personBudget[0].weekOneGoals : null,
      Person2: personBudget[1] ? personBudget[1].weekOneGoals : null,
      Person3: personBudget[2] ? personBudget[2].weekOneGoals : null,
    },
    {
      name: "Week 2",
      Person1: personBudget[0] ? personBudget[0].weekTwoGoals : null,
      Person2: personBudget[1] ? personBudget[1].weekTwoGoals : null,
      Person3: personBudget[2] ? personBudget[2].weekTwoGoals : null,
    },
    {
      name: "Week 3",
      Person1: personBudget[0] ? personBudget[0].weekThreeGoals : null,
      Person2: personBudget[1] ? personBudget[1].weekThreeGoals : null,
      Person3: personBudget[2] ? personBudget[2].weekThreeGoals : null,
    },
    {
      name: "Week 4",
      Person1: personBudget[0] ? personBudget[0].weekFourGoals : null,
      Person2: personBudget[1] ? personBudget[1].weekFourGoals : null,
      Person3: personBudget[2] ? personBudget[2].weekFourGoals : null,
    },
    {
      name: "Week 5",
      Person1: personBudget[0] ? personBudget[0].weekFiveGoals : null,
      Person2: personBudget[1] ? personBudget[1].weekFiveGoals : null,
      Person3: personBudget[2] ? personBudget[2].weekFiveGoals : null,
    },
    {
      name: "Week 6",
      Person1: personBudget[0] ? personBudget[0].weekSixGoals : null,
      Person2: personBudget[1] ? personBudget[1].weekSixGoals : null,
      Person3: personBudget[2] ? personBudget[2].weekSixGoals : null,
    },
  ];

  return (
    <div
      style={{
        background: "grey",
        display: "grid",
        justifyContent: "center",
      }}
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
      </BarChart>
      <LineChart
        width={500}
        height={300}
        data={friendsChartData}
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
          dataKey="Person2"
          stroke="#8884d8"
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="Person1"
          stroke="#82ca9d"
          strokeDasharray="3 4 5 2"
        />{" "}
        <Line
          type="monotone"
          dataKey="Person3"
          stroke="#e21c7f"
          strokeDasharray="3 4 5 2"
        />
      </LineChart>
    </div>
  );
};

export default Dashboard;
