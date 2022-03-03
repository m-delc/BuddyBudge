import React, { useState } from "react";

const People = ({ people, user, setUser, setIsAuthenticated }) => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [friends, setFriends] = useState([])

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
          console.log(json)
          // setFriends(...json);
            setMessage(`${json.first_name} added !!!`);
        });
      }
    });
  };

  // console.log(friends)

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      Make friends and save together
      <div className="grid">
        {people
          ? people.map((y, index) => (
              <div style={{ background: "white" }} key={index}>
                <p></p>
                <img src={y.img} alt={y.first_name} />
                <h3>Name: {y.first_name}</h3>
                <h4>$$$ saved: ${y.savings}</h4>
                <p style={{ maxWidth: "25em" }}>
                  About {y.first_name}: {y.bio}
                </p>
                <button onClick={(e) => handleAddFriend(y.id)}>
                  Add Friend
                </button>
                {/* {errors ? errors : null}
                {message ? message : null} */}
                <p></p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default People;
