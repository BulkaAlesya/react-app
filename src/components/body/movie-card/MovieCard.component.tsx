import React from 'react';
import { Card, MovieDetails, MovieGenreInfo, MovieInfo, MovieNameInfo, MoviePoster, YearChip } from './MovieCard.styled-components';
import PropTypes from 'prop-types';

const MovieCardComponent = ({ movie }) => {
  return (
    <Card>
      <MoviePoster poster={movie.poster}></MoviePoster>
      <MovieDetails>
        <MovieInfo>
          <MovieNameInfo> {movie.name} </MovieNameInfo>
          <MovieGenreInfo> {movie.genre.join(' & ')} </MovieGenreInfo>
        </MovieInfo>
        <YearChip> {movie.year}</YearChip>
      </MovieDetails>
    </Card>);
}
export default MovieCardComponent;

MovieCardComponent.propTypes = {
  movie: PropTypes.object.isRequired
}