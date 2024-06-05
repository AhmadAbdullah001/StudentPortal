import { useNavigate } from "react-router-dom";
export default function Landing() {
    const navigate=useNavigate();
    const handlelogin=()=>{
   navigate('/Login');
    }
    const handleSignup=()=>{
   navigate('/signup');
    }
  return (
    <>
      <h1 className="text-center">
        <u>Student Portal</u>
      </h1>
      <div
        className="container d-flex justify-content-evenly"
        style={{ width: "40vh" }}
      >
        <button
        onClick={handlelogin}
          type="button"
          className="btn btn-outline-success"
          style={{ marginTop: "1vh", width: "max-content", marginRight: "10px" }}
        >
          Login
        </button>
        <h1 style={{ marginTop: "1vh" }}>/</h1>
        <button
                onClick={handleSignup}
          type="button"
          className="btn btn-outline-success"
          style={{ marginTop: "1vh", width: "max-content", marginLeft: "10px" }}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
