import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const People = ({ user, setUser, setIsAuthenticated, userFriends, people }) => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [friends, setFriends] = useState([]);
  // const [people, setPeople] = useState(null);
  const navigate = useNavigate();
  const handleNavToPerson = (id) => {
    navigate(`/people/${id}`);
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
                <h4>
                  Total cash saved: $
                  {y.savings1 +
                    y.savings2 +
                    y.savings3 +
                    y.savings4 +
                    y.savings5 +
                    y.savings6}
                </h4>
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
