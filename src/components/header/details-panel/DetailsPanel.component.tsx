import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';

import { Movie } from '../../body/movie-list';
import { LogoTitle } from '../logo/NetflixLogo.component';
import './DetailsPanel.css';
import { DetailsNameLabel, MovieDetailsPoster, RateCircle, SearchIcon } from './DetailsPanel.styled-component';

const DetailsPanel = ({ selected, goBack }) => {
  const conversMinutesToHours = (minutes: number): string => `${Math.floor(minutes/60)}h${minutes%60}min`;
  return (
    <div className="details-panel">
      <LogoTitle></LogoTitle>
      <SearchIcon icon={faSearch} onClick={() => goBack(null)}> </SearchIcon>
      <div className="details-panel-content">
        <MovieDetailsPoster poster={selected.poster_path}></MovieDetailsPoster>
        <div className="details-right-column">
          <div className="details-header">
            <DetailsNameLabel>
              <div>{selected.title}</div>
              <div className="genre-list"> {selected.genres.join(' & ')} </div>
              </DetailsNameLabel>
            <RateCircle> <span>{selected.vote_average} </span></RateCircle>
          </div>
          <div className="subtitle-panel">
            <span>{selected.release_date.split('-')[0]}</span>
            <span>{conversMinutesToHours(selected.runtime)}</span>
          </div>
          <div className="description-panel">
            {selected.overview}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPanel;

DetailsPanel.propTypes = {
  selected: PropTypes.instanceOf(Movie),
  goBack: PropTypes.func,
}