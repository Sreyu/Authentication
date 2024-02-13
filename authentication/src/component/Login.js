import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function myFunction() {
    let passwordInput = document.getElementById("pass");
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  }

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/", {
        email,
        password,
      });

      if (response.data === "exist") {
        navigate("/home", { state: { id: email } });
      } else if (response.data === "notexist") {
        alert("User has not signed up or wrong details entered");
      } else {
        alert("Unexpected response from the server");
      }
    } catch (error) {
      alert("Error: Wrong details");
      console.error(error);
    }
    
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="password"
          id="pass"
        />
        <input type="submit" onClick={submit} className="submit" />
        <div>
        <input type="checkbox" onClick={myFunction} className="checkbox" id="pass"/>
        <label style={{marginLeft:'5px'}} id="same">Show Password</label>
        </div>
      </form>
     <p className="paragraph"></p>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
