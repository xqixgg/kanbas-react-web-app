import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };
  return (
    <div className="wd-flex-grow-1">
      <div className="pt-4 ps-4 pe-2">
        <h1>Signin</h1>
        <hr />
      </div>  
      <div className="pt-2 ps-4 pe-2 col-4">
        <input  className="form-control"  value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
        <input className="form-control"  value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
        <button className="btn btn-primary form-control" onClick={signin}> Signin </button>
      </div>
      
    </div>
  );
}
export default Signin;