import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const People = ({ user, setUser, setIsAuthenticated, userFriends, people }) => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [friends, setFriends] = useState([]);
  // const [people, setPeople] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("/people").then((res) => {
  //     if (res.ok) {
  //       res.json().then(setPeople);
  //     }
  //   });
  // }, []);

  const handleNavToPerson = (id) => {
    navigate(`/people/${id}`);
  };

  console.log(people)

  // const isFriend = userFriends.filter(friend => {
  //   return friend.id == people.id
  //   }
  // )

  // const peoplemap = people.map(p => { 
  //   p.id}
  // )

  // console.log(isFriend)

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
                <h4>$$$ saved: ${y.savings1}</h4>
                <p style={{ maxWidth: "25em" }}>
                  About {y.first_name}: {y.bio}
                </p>
                <button onClick={(e) => handleNavToPerson(y.id)}>
                  View this person
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
