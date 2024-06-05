import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const Navigate=useNavigate();
  const data = JSON.parse(localStorage.getItem("lists")) || [];
  const Val = {};
 const [detail,setdetail]=useState({})
  const handleonchange = (e) => {
    const { name, value } = e.target;
    Val[name] = value;
  };     
  var count=0;  
  const onsubmit = (e) => {
    data.forEach(item => {
      if(Val.Username===item.Username && Val.Password===item.Password)
        {
          setdetail({
            Username: item.Username,
            Date: item.Date,
            Photo: item.Photo,
            Course: item.Course,
            Email: item.Email,  
            Phone: item.Phone,
          });
          count=1;
        }
    });
    if(count===0)
      {
        alert("Account Does not Exist!")
        Navigate('/signup')
      }
      console.log(count);
    };
  useEffect(() => {
    if (detail.Username) {
      Navigate('/details', { state:detail });
    }
  }, [detail, Navigate]);

  return (
    <div className="container text-center d-flex align-items-center flex-column mb-3" style={{marginTop: "50px", height: "40vh"}}>
      <h1>Login</h1>
      <div className="input-group mb-3" style={{width: "40%", height: "70px", top: "30px"}}>
        <span className="input-group-text" id="basic-addon1">@</span>
        <input 
          type="text" 
          onChange={handleonchange} 
          name="Username" 
          className="form-control" 
          placeholder="Username" 
          aria-label="Username" 
          aria-describedby="basic-addon1" 
        />
      </div>
      <div className="input-group mb-3" style={{width: "40%", height: "70px", top: "30px"}}>
        <input 
          type="password" 
          onChange={handleonchange} 
          className="form-control" 
          name="Password" 
          placeholder="Password" 
          aria-label="Password" 
          aria-describedby="basic-addon1" 
        />
      </div>
      <button 
        type="button" 
        onClick={onsubmit} 
        className="btn btn-success" 
        style={{position: "relative", top: "50px"}}
      >
        Login
      </button>
    </div>
  );
}
