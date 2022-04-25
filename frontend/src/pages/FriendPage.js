import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userFriendsAtom } from "../States";

const FriendPage = () => {
  const [userFriends, setUserFriends] = useAtom(userFriendsAtom);
  const navigate = useNavigate();
  const handleNav = (id) => {
    navigate(`/findpeople/${id}`);
  };

  useEffect(() => {
    fetch("/friends").then((res) => {
      if (res.ok) {
        res.json().then(setUserFriends);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: "20px",
          display: "Flex",
          justifyContent: "center",
        }}
      >
        Your Friends
      </div>
      {userFriends
        ? userFriends.map((friend, index) => (
            <div
              style={{
                background: "inherit",
                justifyContent: "center",
                textAlign: "center",
                margin: "10px",
              }}
              key={index}
            >
              <h3>{friend.person.first_name}</h3>
              <p></p>
              <p></p>

              <img
                style={{ cursor: "pointer" }}
                src={friend.person.img}
                onClick={(e) => handleNav(friend.person.id)}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default FriendPage;
