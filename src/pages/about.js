import React, { useState } from 'react';

const AboutPage = () => {

  const [name, updateName] = useState('karthick');

  const [register, updateForm] = useState({
    username : '', password : '', gender: '', address: '', city : ''
  });  

  const handleChange = (event) => {
    updateName(event.target.value)
  }

  const handleForm = (event) => {
    console.log(event.target.value)
    var updatedValue = {...register, [event.target.name] : event.target.value}
    updateForm(updatedValue);
  }

  const onUpdate = () => {
    console.log(register)
  }

  return (
    <div>
      <h1>About page - Stateless or Functional Component</h1>
      <label>Enter Username : </label>
      <input type="text" placeholder="Enter user name.." name="username" onChange={handleForm} />
      <br></br>
      <label>Enter Password :</label>
      <input type="password" placeholder="Enter a passowrd.." name="password" onChange={handleForm}/>
      <br></br>
      <label>Select Gender : </label>
      <input type="radio" value="male" onChange={handleForm} name="gender"/>Male
      <input type="radio" value="female" onChange={handleForm} name="gender"/>Female
      <input type="radio" value="others" onChange={handleForm} name="gender"/>Others
      <br></br>
      <label>Enter Address :</label>
      <textarea placeholder="Enter your address.." name="address" onChange={handleForm}></textarea>
      <br></br>
      <select onChange={handleForm} name="city" defaultValue={register.city}>
        <option disabled value="">Select your city</option>
        <option value="Ch">Chennai</option>
        <option value="Mdu">Madurai</option>
        <option value="Cbe">Coimbatore</option>
        <option value="Thy">Trichy</option>
      </select>
      <br></br>
      <button onClick={() => onUpdate()}>Update Value</button>
      <h1>The user name is {name}</h1>
    </div>
  );
};

export default AboutPage;