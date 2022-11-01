import React from 'react';
import FooterComponent from '../footer/Footer.component';
import { BodyBlock, MovieCounter } from './BodyContainer.styled-components';
import MovieCardComponent from './movie-card/MovieCard.component';
import { Movies } from './movie-list';

const BodyContainerComponent = () => {
  const movieElements = Movies.map((movie => 
    (<MovieCardComponent key = {movie.name} movie = {movie}></MovieCardComponent>)
  ));
  return (
    <div> 
      <MovieCounter> <b>{movieElements.length}</b> movies found</MovieCounter> 
      <BodyBlock>
        { movieElements }
      </BodyBlock>
      <FooterComponent></FooterComponent>
    </div>);
}
export default BodyContainerComponent;