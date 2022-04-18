import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Person = ({ user, userFriends, setUserFriends, people }) => {
  const [person, setPerson] = useState([]);
  const { id, first_name, bio, img } = person;
  const params = useParams();
  const friendToggle = userFriends.filter((friend) => {
    return friend.person_id == params.id;
  });
  const personFriendID = userFriends.filter((friend) => {
    return params.id == friend.person_id;
  })[0];

  // const [people, setPeople] = useState([]);
  const personGoals = people.filter((person) => {
    return person.id == params.id;
  })[0];

  const ccc = personGoals ? personGoals.person_budget : null;

  const chartData = [
    {
      name: "Week 1",
      // Savings: thisPersonsGoals.weekOneGoals,
      Goal: ccc ? ccc.weekOneGoals : null,
    },
    {
      name: "Week 2",
      // Savings: thisPersonsGoals.weekTwoGoals,
      Goal: ccc ? ccc.weekTwoGoals : null,
    },
    {
      name: "Week 3",
      // Savings: thisPersonsGoals.weekThreeGoals,
      Goal: ccc ? ccc.weekThreeGoals : null,
    },
    {
      name: "Week 4",
      // Savings: thisPersonsGoals.weekFourGoals,
      Goal: ccc ? ccc.weekFourGoals : null,
    },
    {
      name: "Week 5",
      // Savings: thisPersonsGoals.weekFiveGoals,
      Goal: ccc ? ccc.weekFiveGoals : null,
    },
    {
      name: "Week 6",
      // Savings: thisPersonsGoals.weekSixGoals,
      Goal: ccc ? ccc.weekSixGoals : null,
    },
  ];
  const totalSavings =
    (ccc ? ccc.weekOneGoals : null) +
    (ccc ? ccc.weekTwoGoals : null) +
    (ccc ? ccc.weekThreeGoals : null) +
    (ccc ? ccc.weekFourGoals : null) +
    (ccc ? ccc.weekFiveGoals : null) +
    (ccc ? ccc.weekSixGoals : null);

  useEffect(() => {
    fetch(`/people/${params.id}`)
      .then((res) => res.json())
      .then((x) => {
        setPerson(x);
      });
  }, []);

  const handleAddFriend = (id) => {
    const newFriend = {
      user_id: user.id,
      person_id: id,
    };
    fetch("/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFriend),
    }).then((res) => {
      if (res.ok) {
        res.json().then((json) => {
          setUserFriends([json, ...userFriends]);
          // navigate(`/friends/${id}`)
          // setMessage(`${json.first_name} added !!!`);
        });
      }
    });
  };

  const handleDeleteFriend = (e) => {
    fetch(`/friends/${personFriendID.id}`, {
      method: "DELETE",
    })
      .then((res) => res)
      .then(() => {
        const updatedFriendsList = userFriends.filter((uf) => {
          return uf.id !== personFriendID.id;
        });
        setUserFriends(updatedFriendsList);
      });
  };

  return (
    <div>
      <img src={img} alt={first_name} />
      <h3>Name: {first_name}</h3>
      <p style={{ maxWidth: "25em" }}>
        Over the past six weeks {first_name} has managed to save a total of $
        {totalSavings} !!!
      </p>

      {friendToggle.length == 0 ? (
        <>
          <CheckBoxOutlineBlankRoundedIcon
            style={{ cursor: "pointer" }}
            onClick={(e) => handleAddFriend(id)}
          />
          <div> Add {first_name} as a friend </div>
        </>
      ) : (
        <>
          <CheckBoxRoundedIcon
            style={{ cursor: "pointer" }}
            onClick={(e) => handleDeleteFriend(id)}
          />

          <div>Friends</div>
        </>
      )}

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
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Goal" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Person;
