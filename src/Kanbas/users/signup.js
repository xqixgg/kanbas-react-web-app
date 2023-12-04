import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="wd-flex-grow-1">
      <div className="pt-4 ps-4 pe-2">
        <h1>Signup</h1>
        <hr/>
      </div>  
      {error && <div>{error}</div>}
      <div className="pt-2 ps-4 pe-2 col-4">
      <input className="form-control"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input  className="form-control"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button  className="form-control btn btn-primary" onClick={signup}>
        Signup
      </button>
      </div>
      
    </div>
  );
}
export default Signup;