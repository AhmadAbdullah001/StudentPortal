import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import React from 'react';

export default function Signup() {
  const navigate = useNavigate();
var Val={};
  const onchange = (e) => {
    const { name } = e.target;
    Val[name]=e.target.value;
  };
  
    const nav = () => {
      // Retrieve existing data from local storage and ensure it's an array
      let existingData = JSON.parse(localStorage.getItem('lists'));
      if (!Array.isArray(existingData)) {
        existingData = [];
      }
  
      // Add new data to existing data
      existingData.push(Val);
  
      // Save updated data back to local storage
      localStorage.setItem('lists', JSON.stringify(existingData));
  
      // Reset Val object
      Val = {};
  
      // Navigate to the details page
      navigate('/login');
      alert("SignUp Successful!!")
    };
  return (
    <div className="container text-center d-flex align-items-center flex-column mb-3" style={{ marginTop: "50px", height: "max-content"}}>
      <h1>Signup</h1>
      <div className="input-group mb-3" style={{ width: "40%", height: "70px", top: "30px" }}>
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" id="Username" name="Username" onChange={onchange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3" style={{ width: "40%", height: "70px", top: "30px" }}>
        <input type="password" id="Password" name="Password" onChange={onchange} className="form-control" placeholder="Password" />
      </div>
      <div className="input-group mb-3" style={{ width: "40%", height: "50px", top: "30px" }}>
      <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "black", color: "white" }}>Date of Birth</span>
        <input type="date" id="Date" name="Date" onChange={onchange} className="form-control" />
      </div>
      <div className="input-group mb-3" style={{ width: "40%", height: "max-content", top: "30px", display: "flex", alignItems: "center" }}>
        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "black", color: "white" }}>Email</span>
        <input type="email" id="Email" name="Email" onChange={onchange} className="form-control" placeholder="" />
      </div>
      <div className="input-group mb-3" style={{ width: "40%", height: "max-content", top: "30px", display: "flex", alignItems: "center" }}>
        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "black", color: "white" }}>Phone</span>
        <input type="number" id="Phone" name="Phone" onChange={onchange} className="form-control" placeholder="" />
      </div>
      <div className="input-group mb-3" style={{ width: "40%", height: "max-content", top: "30px", display: "flex", alignItems: "center" }}>
        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "black", color: "white" }}>Submit Your Profile Photo</span>
        <input type="file" id="Photo" name="Photo" onChange={onchange} className="form-control" placeholder="" />
      </div>
      <div className="input-group mb-3" style={{ width: "40%", display: "flex", alignItems: "center", top: "30px" }}>
        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "black", color: "white", width: "208px" }}>Choose Your Course</span>
        <select onChange={onchange} id="Course" name="Course" style={{ height: "35px" }}>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="LLB">LLB</option>
          <option value="B.Pharma">B.Pharma</option>
          <option value="M.Pharma">M.Pharma</option>
        </select>
      </div>
      <button type="button" className="btn btn-success" style={{ position: "relative", top: "50px" }} onClick={nav}>Signup</button>
    </div>
  );
}
