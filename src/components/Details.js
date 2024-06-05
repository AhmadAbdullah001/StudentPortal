  import React from 'react';
  import { useLocation } from 'react-router-dom';

  export default function Detail() {
    const location = useLocation();
    const detail = location.state || {};

    console.log(detail);

    return (
      <div className="container" style={{display:'flex',alignItems:'center',flexDirection:"column"}}>
        <h1 className="text-center my-3"><u>Detail</u></h1>
        <h3 id="Username" className='my-3'>Username: {detail.Username}</h3>
        <h3 id="Date" className='my-3'>DOB: {detail.Date}</h3>
        <h3 id="Phone"className='my-3'>Phone: {detail.Phone}</h3>
        <h3 id="Email"className='my-3'>Email: {detail.Email}</h3>
        <h3 id="Course"className='my-3'>Course: {detail.Course == null ? "B.Tech" : detail.Course}</h3>
      </div>
    );
  }
