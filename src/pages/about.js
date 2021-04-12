import React, { useState } from 'react';

const AboutPage = () => {

  const [name, updateName] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    updateName(event.target.value)
  }

  return (
    <div>
      <h1>About page - Stateless or Functional Component</h1>
      <label>Enter Username : </label>
      <input type="text" placeholder="Enter user name.." onChange={handleChange}/>
      <h1>The user name is {name}</h1>
    </div>
  );
};

export default AboutPage;