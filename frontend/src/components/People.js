import React from "react";

const People = ({ people }) => {
  return (
    <div
      style={{
        display: "inline-block",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      Make friends and save together
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ display: "grid", gap: "1em" }}>
        {people
          ? people.map((y, index) => (
              <div style={{ background: "white" }} key={index}>
                <img src={y.img} alt={y.first_name} />
                <h3>Name: {y.first_name}</h3>
                <h4>$$$ saved: ${y.savings}</h4>
                <p style={{ maxWidth: "25em" }}>
                  About {y.first_name}: {y.bio}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default People;
