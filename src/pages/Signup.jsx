import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import React, { useState } from "react";



  function Signup() {

    
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
});
  const navigate = useNavigate();
  
  const handleSignIn = async () => {
      try {
  const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
} catch (error) {
        console.log(error);
}
};
  
onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
});
  
  return (

<Container showPassword={showPassword}>
  <BackgroundImage />
<div className="content">
<Header login />
<div className="body flex column a-center j-center">
<div className="text flex column">
<h2>Películas ilimitadas, programas de TV y más.</h2>
<h4>Mira en cualquier lugar. Cancelar en cualquier momento.</h4>
<h6>
¿Listo para mirar? Ingrese su correo electrónico para crear la membresía.
</h6>
</div>
<div className="form">
<input
  type="email"
  placeholder="Email address"
  onChange={(e) =>
  setFormValues({
      ...formValues,
           [e.target.name]: e.target.value,
})
}
  name="email"
  value={formValues.email}
/>
    {showPassword && (
<input
  type="password"
  placeholder="Password"
  onChange={(e) =>
  setFormValues({
    ...formValues,
          [e.target.name]: e.target.value,
})
}
  name="password"
  value={formValues.password}
/>
)}
    {!showPassword && (
<button onClick={() => setShowPassword(true)}>Empezar</button>
)}
</div>
      {showPassword && <button onClick={handleSignIn}>Acceso</button>}
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
background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
.body {
  gap: 1rem;
.text {
  gap: 1rem;
  text-align: center;
  font-size: 2rem;
h1 {
  padding: 0 25rem;
}
}
.form {
  display: grid;
  grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
  width: 60%;
input {
  color: #000000;
  border: none;
  padding: 1.5rem;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  box-shadow: #7A0095 1px 5px 2px;
  border: 1px solid black;
  &:focus {
  outline: none;
}
}
button {
  padding: 0.5rem 1rem;
  background-color: #7A0095;
  border: none;
  border-radius: 0.3rem;
  box-shadow: #fff 1px 5px 2px;
cursor: pointer;
  color: #ffffff;
  font-weight: bolder;
  font-size: 1.05rem;
}
}
button {
  padding: 0.5rem 1rem;
  background-color: #7A0095;
  border: none;
  border-radius: 0.3rem;
  box-shadow: #fff 1px 5px 2px;
cursor: pointer;
  color: #ffffff;
  border-radius: 0.3rem;
  font-weight: bolder;
  font-size: 1.05rem;
}
}
}
`;
  
  export default Signup;