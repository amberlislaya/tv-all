import logo from "../assets/AMBERLIS-logos_white.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";






export default function Header(props) {
  
  const navigate = useNavigate();


  return (
<StyledHeader className="flex a-center j-between">
<div className="logo">
<img src={logo} alt="logo" />
</div>
<button onClick={() => navigate(props.login ? "/login" : "/signup")}>
    {props.login ? "Log In" : "Sign In"}
</button>
</StyledHeader>
);
}


const StyledHeader = styled.header`
  padding: 0 4rem;
.logo {
img {
  height: 9rem;
}
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
`;