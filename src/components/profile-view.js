import React, {useState} from 'react';

const ProfileView = (props) => {

  const [job, updateJob] = useState('');

  const handelJob = (event) => {
    // console.log(event.target.value);
    updateJob(event.target.value);

    props.handleInput(event.target.value);
  }

  return (
    <div>
      <h2>Profile View Functional Component</h2>
      <h1>{props.name}</h1>

      <label>Enter User Job Desc</label>
      <input type="text" placeholder="Enter user job desc..." onChange={handelJob}/>
      <span>{job}</span>
    </div>
  );
};

export default ProfileView;