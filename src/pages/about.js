import React, { useState , useEffect} from 'react';

import ProfileView from '../components/profile-view';

const AboutPage = () => {

  const [username, updateUsername] = useState('');
  const [job, updateJob] = useState('');

  const [register, updateForm] = useState({
    username : '', password : '', gender: '', address: '', city : ''
  });  

  const handleForm = (event) => {
    console.log(event.target.value)
    var updatedValue = {...register, [event.target.name] : event.target.value}
    updateForm(updatedValue);
  }

  const onUpdate = () => {
    console.log(register)
  }

  const handleUsername = (event) =>{
    updateUsername(event.target.value)
  }

  // componentDidMount
  useEffect(() => {
    console.log('This is a Effect Method')
    //alert('Trigger API')
  }, []);

  const onReceiveJob = (value) => {
    updateJob(value);
  }

  return (
    <div>
      <h1>About page - Stateless or Functional Component</h1>
      <h2>{job}</h2>
      <label>Enter Username : </label>
      <input type="text" placeholder="Enter user name.." name="username" onChange={handleUsername} />
      {username}
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
      <div>
        <ProfileView name={username} handleInput={onReceiveJob}></ProfileView>
      </div>
    </div>
  );
};

export default AboutPage;