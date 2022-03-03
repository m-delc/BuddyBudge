import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Person = () => {
  const [person, setPerson] = useState([]);
  const { first_name, bio, savings, img } = person;
  const params = useParams();

  useEffect(() => {
    fetch(`/people/${params.id}`)
      .then((res) => res.json())
      .then(setPerson);
  }, []);

  return (
    <div>
      <img src={img} alt={first_name} />
      <h3>Name: {first_name}</h3>
      <h4>$$$ saved: ${savings}</h4>
      <p style={{ maxWidth: "25em" }}>
        About {first_name}: {bio}
      </p>
    </div>
  );
};

export default Person;
