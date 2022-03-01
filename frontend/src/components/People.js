import React, { useState } from "react";

const People = ({ people, user, setUser, setIsAuthenticated }) => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  //   console.log(people);

  const handleAddFriend = (id) => {
    // console.log(id);
    const newFriend = {
      user_id: user.id,
      person_id: id,
    };
    console.log(newFriend);
    fetch(`/friends/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFriend),
    }).then((res) => {
      //   console.log(res);
      if (res.ok) {
        res.json().then((json) => {
          setUser(json);
          setIsAuthenticated(true);
          //   setMessage(`${json.first_name} added !!!`);
        });
      }
    });
  };

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
