import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { BodyBlock, MovieCounter } from './BodyContainer.styled-components';
import MovieCardComponent from './movie-card/MovieCard.component';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllMovies } from '../api/reducer';
import { store } from '../api/configureStore';

const BodyContainerComponent = ({onSelectedUpdate}) => {
  const dispatch = useDispatch();
  const [movieElements, updateMovieElements] = useState([]);
  store.subscribe(() => {
    updateMovieElements(
      store.getState().value.map((movie) => (
        <MovieCardComponent key = {movie.id} movie = {movie} onClick={(m) => onSelectedUpdate(m)}>
        </MovieCardComponent>
      )));
  });

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  return (
    <> 
      <MovieCounter> <b>{movieElements.length}</b> movies found</MovieCounter> 
      <BodyBlock>
        { movieElements }
      </BodyBlock>
    </>);
}
export default BodyContainerComponent;

BodyContainerComponent.propTypes = {
  onSelectedUpdate: PropTypes.func,
}
