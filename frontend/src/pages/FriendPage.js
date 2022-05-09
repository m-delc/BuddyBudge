import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userFriendsAtom, userAtom } from "../States";
import { v4 } from "uuid";


const FriendPage = () => {
  const [userFriends, setUserFriends] = useAtom(userFriendsAtom);
  const [user] = useAtom(userAtom);
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
        {user ? `${user.first_name}'s Friends` : null}
      </div>
      {userFriends
        ? userFriends.map((friend) => (
            <div
              style={{
                background: "inherit",
                justifyContent: "center",
                textAlign: "center",
                margin: "10px",
              }}
              key={v4}
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
