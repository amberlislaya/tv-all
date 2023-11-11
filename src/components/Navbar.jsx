import { firebaseAuth } from "../utils/firebase-config";
import logo from "../assets/AMBERLIS-logos_white.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";





export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);



const links = [
    { name: "Inicio", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Películass", link: "/movies" },
    { name: "Favoritos", link: "/mylist" },
];

  return (

<Container>
  <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
<div className="left flex a-center">
<div className="brand flex a-center j-center">
<img src={logo} alt="Logo" />
</div>
<ul className="links flex">
    {links.map(({ name, link }) => {
      return (
<li key={name}>
    <Link to={link}>{name}</Link>
</li>
);
})}
</ul>
</div>
<div className="right flex a-center">
<div className={`search ${showSearch ? "show-search" : ""}`}>
<button
  onFocus={() => setShowSearch(true)}
  onBlur={() => {
      if (!inputHover) {
  setShowSearch(false);
}
}}
>
    <FaSearch />
</button>
<input
  type="text"
  placeholder="Search"
  onMouseEnter={() => setInputHover(true)}
  onMouseLeave={() => setInputHover(false)}
  onBlur={() => {
  setShowSearch(false);
  setInputHover(false);
}}
/>
</div>
<button onClick={() => signOut(firebaseAuth)}>
    <FaPowerOff />
</button>
</div>
 </nav>
</Container>
);
}



const Container = styled.div`
.scrolled {
  background-color: #130117;
}
nav {
  position: sticky;
  top: 0;
  height: 5.5rem;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 0 2rem;
  align-items: center;
  transition: 0.3s ease-in-out;
.left {
  gap: 2rem;
.brand {
img {
  height: 6rem;
  margin-bottom: 1rem;
  
}
}
.links {
  list-style-type: none;
  transition: 0.3s ease-in-out;
  gap: 2rem;
li {
a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
}
}
}
}
.right {
  gap: 1rem;
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
  outline: none;
}
svg {
  color: #f34242;
  font-size: 1.2rem;
}
}
.search {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  padding-left: 0.5rem;
button {
  background-color: transparent;
  border: none;
  &:focus {
  outline: none;
}
svg {
  color: #ffffff;
  font-size: 1.2rem;
}
}
input {
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  border: none;
  color: #ffffff;
  &:focus {
  outline: none;
}
}
}
.show-search {
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);
input {
  width: 100%;
  opacity: 1;
  visibility: visible;
  padding: 0.3rem;
}
}
}
}
`;
