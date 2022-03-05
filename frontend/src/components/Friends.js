import React from "react";
import FriendPage from "../pages/FriendPage";


const Friends = ({ userFriends, people, user }) => {
  // console.log(userFriends.person_id);
  // console.log(people);

  // const g = userFriends ? userFriends[1].id : null
  // console.log(g)

  // const friends = people.filter((p) => {
  //   return p.id == userFriends.person_id;
  // });

  // console.log(friends);

  // const x = userFriends.map(friend =>{
  //   return friend.person_id
  // })

  // console.log(x)

  // const y = people.filter(p => {
  //   return p.id == x.id
  // })

  // console.log(user.friends)

  // const x = userFriends.map(friend =>{
  //     return friend.person_id
  // })

  // console.log(people.person_id)

  // why doesn't this work????????
  // why doesn't this work????????
  // why doesn't this work????????
  // why doesn't this work????????
  // const x = userFriends.filter(friend =>{
  //   return friend
  // })

  // console.log(x)
  // i have no idae how to compare people.id with userFriends.id
  // i have no idae how to compare people.id with userFriends.id
  // i have no idae how to compare people.id with userFriends.id
  // i have no idae how to compare people.id with userFriends.id

// const looptest = () => {

//   for(let i = 0; i < userFriends.length; i++) {
//     return userFriends[i].person_id
//   }
// }

// const filtertest = people.filter(person =>{
//   return person.id == 
// })
console.log(userFriends)

  return (
    <div>
      <FriendPage userFriends={userFriends} />
    </div>
  );
};

export default Friends;
