// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../utils/fakeAuth";

export default function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fakeLogin(email, password);
    setIsLoggedIn(true);
    navigate("/cars");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email}
          onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password}
          onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
