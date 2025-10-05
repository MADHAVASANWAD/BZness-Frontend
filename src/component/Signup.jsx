import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Signin.css";
import Navbar from "./Navbar";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [uname, setName] = useState("");
  const navigate = useNavigate();


  const inputname = (u) => {
    setName(() => {
      return u.target.value;
    });
  };
  const inputUsername = (u) => {
    setUsername(() => {
      return u.target.value;
    });
  };

  const inputPassword = (p) => {
    setPassword(() => {
      return p.target.value;
    });
  };

  const Handlesubmit = () => {

  };

  return (
     <>
    <Navbar/>
    <div className="signin-container">
      <div className="signin-form">
        <h3>Sign Up</h3>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="Name"
          value={uname}
          onChange={inputname}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={inputUsername}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={inputPassword}
        />
        <button onClick={Handlesubmit}>Submit</button>
         <button onClick={() => navigate(-1)}>back</button>
      </div>
    </div>
    </>
  );

}

export default Signup;