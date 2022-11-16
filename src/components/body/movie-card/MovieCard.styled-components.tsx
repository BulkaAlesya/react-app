import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  display: flex;
  justify-content: end;

  & div.close-icon-wrapper {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin: 10px;
    position: relative;
    left: 10%;
    background-color: #1a1a1a;
  }
  & svg {
    margin: 4px 11px;
  }
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

export const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 10px;
  background-color: #1a1a1a;
  color: #FFFFFFbd;
  &:hover {
    cursor: pointer;
  }
`;
export const ActionMenuItem = styled.div`
  font-size: 15px;
  width: 100px;
  height: 30px;
  background-color: #1a1a1a;
  position: relative;
  color: #FFFFFFbd;
  top: -45px;
  padding-left: 5px;
  &:hover {
    cursor: pointer;
    background-color: #f65261;
  }
`;


