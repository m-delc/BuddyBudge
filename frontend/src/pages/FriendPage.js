import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const FriendPage = ({ userFriends }) => {
  const navigate = useNavigate();
  const handleNav = (id) => {
    navigate(`/people/${id}`);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {userFriends
        ? userFriends.map((friend, index) => (
            <div style={{background: "white", justifyContent: "center", textAlign: "center"}} key={index}>
              <h3 >{friend.person.first_name}</h3>
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
