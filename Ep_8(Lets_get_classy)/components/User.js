import React, { useState } from 'react';

function User({name,location,contact}) {
  const [count] = useState(0);
  const [count2] = useState(2);

  return (
    <div className='user-card'>
        <h1>count : {count}</h1>
        <h1>count : {count2}</h1>
        <h2>name :</h2><span>{name}</span>
        <h2>location :</h2><span>{location}</span>
        <h2>contact :</h2><span>{contact}</span>
    </div>
  )
}

export default User