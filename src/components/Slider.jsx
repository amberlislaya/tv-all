import styled from "styled-components";
import CardSlider from "./CardSlider";
import React from "react";




 function Slider({ movies }) {

  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };


  return (

<Container>
    <CardSlider data={getMoviesFromRange(0, 10)} title="Tendencias" />
    <CardSlider data={getMoviesFromRange(10, 20)} title="Nuevos lanzamientos" />
    <CardSlider data={getMoviesFromRange(20, 30)} title="Películas taquilleras"/>
    <CardSlider data={getMoviesFromRange(30, 40)} title="Popular en Amberlis"/>
    <CardSlider data={getMoviesFromRange(40, 50)} title="Películas de Acción" />
    <CardSlider data={getMoviesFromRange(50, 60)} title="Épicas" />
</Container>
);
}

const Container = styled.div``;

export default Slider;