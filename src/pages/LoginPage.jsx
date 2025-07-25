import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../utils/fakeAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fakeLogin(email, password); // optional validation
    navigate("/cars"); // or any page you want to land on
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
