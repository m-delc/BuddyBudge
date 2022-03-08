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

// const savings1 = null;

const Budget = ({ user, budget }) => {
  const [weekOneGoals, setweekOneGoals] = useState("");
  const [weekTwoGoals, setweekTwoGoals] = useState("");
  const [weekThreeGoals, setweekThreeGoals] = useState("");
  const [weekFourGoals, setweekFourGoals] = useState("");
  const [weekFiveGoals, setweekFiveGoals] = useState("");
  const [weekSixGoals, setweekSixGoals] = useState("");
  const [goals, setGoals] = useState([]);
  const [toggleSubmitUpdate, setToggleSubmitUpdate] = useState(true);
  const [toggleGraph, setToggleGraph] = useState(true);

  const chartData = [
    {
      name: "Week 1",
      // Savings: savings1 ? savings1 : null,
      Goal: weekOneGoals ? weekOneGoals : null,
    },
    {
      name: "Week 2",
      // Savings: savings1 ? savings1 : null,
      Goal: weekTwoGoals ? weekTwoGoals : null,
    },
    {
      name: "Week 3",
      // Savings: savings1 ? savings1 : null,
      Goal: weekThreeGoals ? weekThreeGoals : null,
    },
    {
      name: "Week 4",
      // Savings: savings1 ? savings1 : null,
      Goal: weekFourGoals ? weekFourGoals : null,
    },
    {
      name: "Week 5",
      // Savings: savings1 ? savings1 : null,
      Goal: weekFiveGoals ? weekFiveGoals : null,
    },
    {
      name: "Week 6",
      // Savings: savings1 ? savings1 : null,
      Goal: weekSixGoals ? weekSixGoals : null,
    },
  ];

  const chartData2 = [
    {
      name: "Week 1",
      // Savings: goals.savings1 ? goals.savings1 : null,
      Goal: goals.weekOneGoals ? goals.weekOneGoals : null,
    },
    {
      name: "Week 2",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekTwoGoals ? goals.weekTwoGoals : null,
    },
    {
      name: "Week 3",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekThreeGoals ? goals.weekThreeGoals : null,
    },
    {
      name: "Week 4",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekFourGoals ? goals.weekFourGoals : null,
    },
    {
      name: "Week 5",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekFiveGoals ? goals.weekFiveGoals : null,
    },
    {
      name: "Week 6",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekSixGoals ? goals.weekSixGoals : null,
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
      user_id: user.id,
    };
    fetch("/budgets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((res) => res.json())
      .then((x) => {
        setGoals(x);
        setToggleGraph(!toggleGraph);
        setweekOneGoals("");
        setweekTwoGoals("");
        setweekThreeGoals("");
        setweekFourGoals("");
        setweekFiveGoals("");
        setweekSixGoals("");
      });
  };

  const handleToggle = () => {
    setToggleSubmitUpdate(!toggleSubmitUpdate);
  };

  const handleFormUpdate = (e) => {
    e.preventdefault();
  };

  return (
    // <div style={{ display: "grid", justifyContent: "center" }}>
    <div className="grid">
      <div>
        {toggleSubmitUpdate ? (
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
            <button type="submit">Submit</button> or
          </form>
        ) : (
          <form onSubmit={handleFormUpdate}>
            <input
              type="number"
              placeholder="Update Week 1"
              value={weekOneGoals}
              onChange={(e) => setweekOneGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 2"
              value={weekTwoGoals}
              onChange={(e) => setweekTwoGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 3"
              value={weekThreeGoals}
              onChange={(e) => setweekThreeGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 4"
              value={weekFourGoals}
              onChange={(e) => setweekFourGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 5"
              value={weekFiveGoals}
              onChange={(e) => setweekFiveGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 6"
              value={weekSixGoals}
              onChange={(e) => setweekSixGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit">Submit</button> or
          </form>
        )}
      </div>
      {toggleGraph ? (
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
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Goal" fill="#82ca9d" />
        </BarChart>
      ) : (
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
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Goal" fill="#82ca9d" />
        </BarChart>
      )}
      <button onClick={handleToggle}>Update</button>
    </div>
  );
};

export default Budget;
