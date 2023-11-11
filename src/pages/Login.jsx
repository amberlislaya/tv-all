import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase-config";
import logo from "../assets/AMBERLIS-logos_black.png";
import { useNavigate } from "react-router-dom";
import background from "../assets/avatar2.jpg";
import Header from "../components/Header";
import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });



  return (

<Container>
      <BackgroundImage />
<div className="content">
    <Header />
<div className="form-container flex column a-center j-center">
<div className="form flex column a-center j-center">
<div className="title">
    <h3>Acceso</h3>
</div>
<div className="container flex column">
<input
  type="text"
  placeholder="Email"
  onChange={(e) => setEmail(e.target.value)}
  value={email}
/>
<input
  type="password"
  placeholder="Password"
  onChange={(e) => setPassword(e.target.value)}
  value={password}
/>
<button onClick={handleLogin}>Ingrese a su cuenta</button>
</div>
</div>
</div>
</div>
</Container>
);
}

const Container = styled.div`
  position: relative;
.content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  grid-template-rows: 15vh 85vh;
.form-container {
  gap: 2rem;
  height: 85vh;
.form {
  padding: 2rem;
  background-color: #000000b0;
  width: 25vw;
  gap: 2rem;
  color: #fff;
  box-shadow: #fff 1px 5px 2px;
.container {
  gap: 2rem;
input {
  padding: 0.5rem 1rem;
  width: 15rem;
}
button {
  padding: 0.5rem 1rem;
  background-color: #7A0095;
  box-shadow: #fff 1px 5px 2px;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;
}
}
}
}
}
`;


export default Login;