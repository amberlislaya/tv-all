import { fetchDataByGenre } from "../store";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import React from "react";


export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();


  return (

<Select
  className="flex"
  onChange={(e) => {
  dispatch(
    fetchDataByGenre({
      genres,
      genre: e.target.value,
      type,
})
);
}}
>
  {genres.map((genre) => {
        return (
<option value={genre.id} key={genre.id}>
      {genre.name}
</option>
);
})}
</Select>
);
}

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: #7A0095;
  color: white;
`;