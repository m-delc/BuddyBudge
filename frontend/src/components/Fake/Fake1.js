import React from 'react'
import {useSelector} from 'react-redux'

// fake routes to prove auth
// fake routes to prove auth
// fake routes to prove auth
// fake routes to prove auth


const Fake1 = () => {
  const user = useSelector(state => state.user.value)
  console.log(user)
  return (
    <div>Fake1</div>
  )
}

export default Fake1