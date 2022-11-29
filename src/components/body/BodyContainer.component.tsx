import PropTypes from 'prop-types';
import React from 'react';
import FooterComponent from '../footer/Footer.component';
import { BodyBlock, MovieCounter } from './BodyContainer.styled-components';
import MovieCardComponent from './movie-card/MovieCard.component';
import { Movies } from './movie-list';

const BodyContainerComponent = ({onSelectedUpdate}) => {
  const movieElements = Movies.map((movie => 
    (<MovieCardComponent key = {movie.name} movie = {movie} onClick={(m) => onSelectedUpdate(m)}>

    </MovieCardComponent>)
  ));
  return (
    <> 
      <MovieCounter> <b>{movieElements.length}</b> movies found</MovieCounter> 
      <BodyBlock>
        { movieElements }
      </BodyBlock>
      <FooterComponent></FooterComponent>
    </>);
}
export default BodyContainerComponent;

BodyContainerComponent.propTypes = {
  onSelectedUpdate: PropTypes.func,
}