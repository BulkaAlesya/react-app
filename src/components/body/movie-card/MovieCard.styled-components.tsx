import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Card = styled.div`
  width: 315px;
  left: 15%;
  height: 470px;
`;

export const MoviePoster = styled.div`
  width: 315px;
  left: 15%;
  height: 400px;
  background-image:  ${(props) => `url(${props.poster})`};
  background-size: cover;
  background-position: center;
`;
MoviePoster.propTypes = {
  poster: PropTypes.string
}

export const MovieDetails = styled.div`
  width: 315px;
  left: 15%;
  height: 80px;
  display: flex;
  padding-top: 15px;
  justify-content: space-between;

`;

export const MovieInfo = styled.div`
  color: #ffffffc9;
`;

export const MovieNameInfo = styled.div`
  font-size: 20px;
  color: #ffffffc9;
  margin-bottom: 5px;
`;

export const MovieGenreInfo = styled.div`
  font-size: 12px;
  color: #ffffffc9;
`;

export const YearChip = styled.div`
  justify-content: center;
  width: 80px;
  height: 25px;
  border: 3px solid #424242;
  border-radius: 5px;
  color: #ffffffc9;
  display: flex;
`;

