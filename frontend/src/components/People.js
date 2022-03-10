import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Person from "./Person";

const People = ({ user, setUser, setIsAuthenticated, userFriends, people }) => {
  // const [message, setMessage] = useState("");
  // const [errors, setErrors] = useState("");
  // const [people, setPeople] = useState(null);
  // const [people, setPeople] = useState([])
  // React.useEffect(() => {
  //   fetch("/people").then((res) => {
  //     if (res.ok) {
  //       res.json().then(setPeople);
  //     }
  //   });
  // })
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
      <img src="https://www.coredocuments.com/wp-content/uploads/2019/04/happy-people-money-falling.jpg"></img>
      <br></br>
      <div style={{ fontFamily: "Roboto", fontSize: "20px" }}>
        Make Some Friends!
      </div>
      <div className="grid">
        {people
          ? people.map((y, index) => (
              <div
                style={{
                  background: "white",
                  borderRadius: "8px",
                }}
                key={index}
              >
                <p></p>
                <img
                  src={y.img}
                  alt={y.first_name}
                  onClick={(e) => handleNavToPerson(y.id)}
                  style={{ cursor: "pointer" }}
                />
                <h3
                  onClick={(e) => handleNavToPerson(y.id)}
                  style={{ cursor: "pointer" }}
                >
                  {y.first_name}
                </h3>
                <h4>
                  Total cash saved: $
                  {y.person_budget.weekOneGoals +
                    y.person_budget.weekTwoGoals +
                    y.person_budget.weekThreeGoals +
                    y.person_budget.weekFourGoals +
                    y.person_budget.weekFiveGoals +
                    y.person_budget.weekSixGoals}
                </h4>
                <p style={{ maxWidth: "25em" }}>
                  About {y.first_name}: {y.bio}
                </p>
                {/* <button onClick={(e) => handleNavToPerson(y.id)}>
                  View this person
                </button> */}
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
