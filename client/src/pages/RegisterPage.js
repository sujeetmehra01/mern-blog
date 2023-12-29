import React, { useState } from "react";

const RegisterPage = () => {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.status === 200) {
        alert("User registered successfully");
        window.location.href = "/login";
      } else {
        alert("Registration failed");
      }
    });
  }
  return (
    <>
      <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => SetUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => SetPassword(ev.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
