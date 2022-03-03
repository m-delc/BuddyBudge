import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

const Person = ({ user }) => {
  const [person, setPerson] = useState([]);
  const [friends, setFriends] = useState(false);
  // const [people, setPeople] = useState(null);
  const { id, first_name, bio, savings, img } = person;
  const [userExistingFriends, setUserExistingFriends] = useState([]);
  const [isFriendsYet, setIsFriendsYet] = useState(false);

  const params = useParams();
  const pid = params.id;
  // console.log(pid);

  useEffect(() => {
    fetch("/friends").then((res) => {
      if (res.ok) {
        res.json().then(setUserExistingFriends);
      }
    });
  }, []);

  console.log(userExistingFriends);

  useEffect(() => {
    fetch(`/people/${params.id}`)
      .then((res) => res.json())
      .then((x) => {
        const friendsYet = userExistingFriends.map((uef) => {
          // const g = uef.person.id;
          // console.log(`Friend ID: ${uef.person.id}`);
          // console.log(uef.id);
          if (uef.person.id === params.id) {
            return true;
          } else {
            return false;
          }
        });
        // console.log(x);
        setIsFriendsYet(friendsYet);
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
          // console.log(json);
          setFriends(true);
          // setMessage(`${json.first_name} added !!!`);
        });
      }
    });
  };

  return (
    <div>
      <img src={img} alt={first_name} />
      <h3>Name: {first_name}</h3>
      <h4>$$$ saved: ${savings}</h4>
      <p style={{ maxWidth: "25em" }}>
        About {first_name}: {bio}
      </p>
      {/* { !friends ? <CheckBoxOutlineBlankRoundedIcon style={{ cursor: "pointer" }} onClick={(e) => handleAddFriend(id)} /> Send a friend request to {first_name} : <CheckBoxRoundedIcon /> Friends } */}

      {!isFriendsYet ? (
        <>
          <CheckBoxOutlineBlankRoundedIcon
            style={{ cursor: "pointer" }}
            onClick={(e) => handleAddFriend(id)}
          />
          <div> Add {first_name} as a friend </div>
        </>
      ) : (
        <>
          <CheckBoxRoundedIcon />
          <div>Friends</div>
        </>
      )}

      {/* {
        !friends ? (
          <CheckBoxOutlineBlankRoundedIcon />Test
        )
      } */}

      {/* <button onClick={(e) => handleAddFriend(id)}>Send Friend Request</button> */}
      {/* <button onClick={(e) => handleAddFriend(id)}>Add Friend</button> */}
    </div>
  );
};

export default Person;
