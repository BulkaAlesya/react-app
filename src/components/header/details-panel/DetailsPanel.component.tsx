import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from '../../body/movie-list';
import './DetailsPanel.css';
import { DetailsNameLabel, MovieDetailsPoster, RateCircle } from './DetailsPanel.styled-component';
import { LogoTitle } from '../logo/NetflixLogo.component';
import { AddButton } from '../header.styled-components';

const DetailsPanel = ({ selected }) => {

  const conversMinutesToHours = (minutes: number): string => `${Math.floor(minutes/60)}h${minutes%60}min`;
  return (
    <div className="details-panel">
      <LogoTitle></LogoTitle>
      <AddButton> + add movie </AddButton>
      <div className="details-panel-content">
        <MovieDetailsPoster poster={selected.poster}></MovieDetailsPoster>
        <div className="details-right-column">
          <div className="details-header">
            <DetailsNameLabel>
              <div>{selected.name}</div>
              <div className="genre-list"> {selected.genre.join(' & ')} </div>
              </DetailsNameLabel>
            <RateCircle> <span>{selected.rating} </span></RateCircle>
          </div>
          <div className="subtitle-panel">
            <span>{selected.year}</span>
            <span>{conversMinutesToHours(selected.runtime)}</span>
          </div>
          <div className="description-panel">
            {selected.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPanel;

DetailsPanel.propTypes = {
  selected: PropTypes.instanceOf(Movie),
}