import React, { useState } from "react";
import "../css/budget.css";
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
// const test = 500

const Budget = () => {
  const [weekOneGoals, setweekOneGoals] = useState("");
  const [weekTwoGoals, setweekTwoGoals] = useState("");
  const [weekThreeGoals, setweekThreeGoals] = useState("");
  const [weekFourGoals, setweekFourGoals] = useState("");
  const [weekFiveGoals, setweekFiveGoals] = useState("");
  const [weekSixGoals, setweekSixGoals] = useState("");
  // console.log(weekTwoGoals);

  const chartData = [
    {
      name: "Week 1",
      Savings: savings1 ? savings1 : null,
      Goal: weekOneGoals ? weekOneGoals : null,
    },
    {
      name: "Week 2",
      Savings: savings1 ? savings1 : null,
      Goal: weekTwoGoals ? weekTwoGoals : null,
    },
    {
      name: "Week 3",
      Savings: savings1 ? savings1 : null,
      Goal: weekThreeGoals ? weekThreeGoals : null,
    },
    {
      name: "Week 4",
      Savings: savings1 ? savings1 : null,
      Goal: weekFourGoals ? weekFourGoals : null,
    },
    {
      name: "Week 5",
      Savings: savings1 ? savings1 : null,
      Goal: weekFiveGoals ? weekFiveGoals : null,
    },
    {
      name: "Week 6",
      Savings: savings1 ? savings1 : null,
      Goal: weekSixGoals ? weekSixGoals : null,
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      weekOneGoals: weekOneGoals,
      weekTwoGoals: weekTwoGoals,
      weekThreeGoals: weekThreeGoals,
      weekFourGoals: weekFourGoals,
      weekFiveGoals: weekFiveGoals,
      weekSixGoals: weekSixGoals,
    };
  };
  return (
    // <div style={{ display: "grid", justifyContent: "center" }}>
    <div className="grid">
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="number"
            placeholder="Week 1"
            value={weekOneGoals}
            onChange={(e) => setweekOneGoals(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="number"
            placeholder="Week 2"
            value={weekTwoGoals}
            onChange={(e) => setweekTwoGoals(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="number"
            placeholder="Week 3"
            value={weekThreeGoals}
            onChange={(e) => setweekThreeGoals(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="number"
            placeholder="Week 4"
            value={weekFourGoals}
            onChange={(e) => setweekFourGoals(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="number"
            placeholder="Week 5"
            value={weekFiveGoals}
            onChange={(e) => setweekFiveGoals(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="number"
            placeholder="Week 6"
            value={weekSixGoals}
            onChange={(e) => setweekSixGoals(e.target.value)}
          />
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
      <BarChart
        width={500}
        height={300}
        data={chartData}
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
        <Bar dataKey="Goal" fill="#82ca9d" />
        {/* <Bar dataKey="Savings" fill="#8884d8" /> /> */}
      </BarChart>
    </div>
  );
};

export default Budget;
