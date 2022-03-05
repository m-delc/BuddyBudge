import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const Person = ({ user, userFriends, setUserFriends }) => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const goal = 4555


  const [person, setPerson] = useState([]);
  const { id, first_name, bio, savings, img } = person;
  const params = useParams();
  // const pid = params.id;
  const friendToggle = userFriends.filter((friend) => {
    return friend.person.id == params.id;
  });
  const personFriendID = userFriends.filter((friend) => {
    return params.id == friend.person_id;
  })[0];

  const data2 = [
    {
      name: "Week 1",
      Savings: savings,
      Goal: goal
    }
  ]

  // console.log(person.savings)

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
      <h4>$$$ saved: </h4>
      <p style={{ maxWidth: "25em" }}>
        About {first_name}: {bio}
      </p>
      {/* { !friends ? <CheckBoxOutlineBlankRoundedIcon style={{ cursor: "pointer" }} onClick={(e) => handleAddFriend(id)} /> Send a friend request to {first_name} : <CheckBoxRoundedIcon /> Friends } */}

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

      {/* <button onClick={(e) => handleAddFriend(id)}>Send Friend Request</button> */}
      {/* <button onClick={(e) => handleAddFriend(id)}>Add Friend</button> */}
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={500}
          height={300}
          data={data2}
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
          <Bar dataKey="Savings" fill="#8884d8" />
        </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default Person;
