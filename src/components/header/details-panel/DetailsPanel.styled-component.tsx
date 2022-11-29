import styled from 'styled-components';
import { MoviePoster } from '../../body/movie-card/MovieCard.styled-components';
import PropTypes from 'prop-types';
import { HeaderLabel } from '../header.styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MovieDetailsPoster = styled(MoviePoster)`
  width: 240px;
  margin-top: 15px;
  height: 320px;
`;
MovieDetailsPoster.propTypes = {
  poster: PropTypes.string
}

export const RateCircle = styled.div`
  width: 50px; 
  height: 50px;
  border: solid 2px #ffffff96;
  border-radius: 25px;
  justify-content: center;
  display: flex;
  & span {
    margin-top: 15%;
    font-size: 24px;
    color:  #ffffff96;
  }
`;

export const DetailsNameLabel = styled(HeaderLabel)`
  position: static;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  word-wrap: normal;
  font-size: 25px;
  margin-right: 20px;
  font-weight: 400;
  margin-top: 15px;
  & .genre-list {
    font-size: 10px;
    font-weight: 200;
  }
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  color: #f65261;
  position: absolute;
  right: 3%;
  font-size: 20px;
  top: 15px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

`;

