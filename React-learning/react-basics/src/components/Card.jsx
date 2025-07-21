

import React from 'react';


const Card = ({ photo, name, profession, age, city }) => {
  return (
    <div className="card">

      
      <img src={photo} alt={`${name}'s profile`} className="profile-photo" />
      
      <h2 className='text-green-500'>{name}</h2>
      
      <p className='text-blue-500'><strong>Profession:</strong> {profession}</p>
      
      <p><strong>Age:</strong> {age}</p>
      
      <p><strong>City:</strong> {city}</p>
    
    </div>
  );
};

export default Card;
