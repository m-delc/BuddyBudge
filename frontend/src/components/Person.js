import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

const Person = ({ user, userFriends, people, setUserFriends }) => {
  const [person, setPerson] = useState([]);
  const [friends, setFriends] = useState(false);
  // const [people, setPeople] = useState(null);
  const { id, first_name, bio, savings, img } = person;
  const [userExistingFriends, setUserExistingFriends] = useState([]);
  const [isFriendsYet, setIsFriendsYet] = useState(false);
  const [test1, settest1] = useState([]);
  const navigate = useNavigate();

  //  setUserExistingFriends(userFriends)

  const params = useParams();
  const pid = params.id;
  // console.log(pid);

  const x = userFriends.filter((friend) => {
    return friend.person.id == pid;
  });

  // const toggle = () => {
  //   if (x.length == 0) {
  //     return settrueorfalse(true)
  //   }
  // }

  // console.log(x);
  // console.log(userFriends);

  const test = userFriends.map((uf) => {
    return uf.id
  })

  console.log(test)

  // useEffect(() => {
  //   fetch("/friends").then((res) => {
  //     if (res.ok) {
  //       res.json().then(setUserExistingFriends);
  //     }
  //   });
  // }, []);

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
          // console.log(json);
          setUserFriends([json, ...userFriends]);
          // navigate(`/friends/${id}`)

          // setMessage(`${json.first_name} added !!!`);
        });
      }
    });
  };

  const handleDeleteFriend = (e) => {
    console.log(id)
    fetch(`/friends/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
      const updatedFriendsList = userFriends.filter(uf => {return uf.id !== id})
      setUserFriends(updatedFriendsList)
    })
  }

  return (
    <div>
      <img src={img} alt={first_name} />
      <h3>Name: {first_name}</h3>
      <h4>$$$ saved: ${savings}</h4>
      <p style={{ maxWidth: "25em" }}>
        About {first_name}: {bio}
      </p>
      {/* { !friends ? <CheckBoxOutlineBlankRoundedIcon style={{ cursor: "pointer" }} onClick={(e) => handleAddFriend(id)} /> Send a friend request to {first_name} : <CheckBoxRoundedIcon /> Friends } */}

      {x.length == 0 ? (
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
