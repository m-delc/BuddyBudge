import React from "react";

const About = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="https://d.newsweek.com/en/full/1874686/man-woman-holding-cash.webp?w=790&f=cd34f55722d6ed958a28b4620fb961fa"></img>
      </div>
          <br></br>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            maxWidth: "65%",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontFamily: "Roboto",
          }}
        >
          Do you want to save money? Do you like meeting new people? BuddyBudge
          combines those two things to help you save money. Your new friends
          will be saving cash, and so should you! Don't get left behind - Signup
          today to compete, make some friends, and save!
        </div>
      </div>
    </>
  );
};

export default About;
