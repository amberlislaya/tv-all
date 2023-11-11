import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListedMovies from "./pages/UserListedMovies";
import Footer from './components/Footer';
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Amberlis from "./pages/Amberlis";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import React from "react";


export default function App() {

  return (

<BrowserRouter>
  <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/movies" element={<MoviePage />} />
      <Route exact path="/new" element={<Player />} />
      <Route exact path="/mylist" element={<UserListedMovies />} />
      <Route exact path="/" element={<Amberlis />} />
  </Routes>
  <Footer/> 
</BrowserRouter>
);
}
