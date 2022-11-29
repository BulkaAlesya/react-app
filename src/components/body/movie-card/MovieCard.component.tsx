import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ModalWindow from '../../common/modal-window/Modal.component';
import AddDialogComponent from '../dialogs/add-dialog/AddDialog.component';
import DeleteDialogComponent from '../dialogs/delete-dialog/DeleteDialog.components';
import { ActionMenuItem, Card, CloseIcon, MovieDetails, MovieGenreInfo, MovieInfo, MovieNameInfo, MoviePoster, YearChip } from './MovieCard.styled-components';

const MovieCardComponent = ({ movie, onClick }) => {

  const [isActionMenuOpened, updateActionMenuVisability] = useState(false);
  const [editDialogOpened, openDialog] = useState(false);
  const [deleteDialogOpened, openDeleteDialog] = useState(false);
  return (
    <Card onClick={()=> onClick(movie)}>
      <MoviePoster poster={movie.poster_path}>
        <div >
          <div id={movie.id} className="close-icon-wrapper" onClick = {() => updateActionMenuVisability(true)}><CloseIcon icon={faEllipsisV}></CloseIcon></div>
          {
            isActionMenuOpened &&
            <>
              <ActionMenuItem onClick = {() => { updateActionMenuVisability(false); openDialog(true);}}>Edit</ActionMenuItem>
              <ActionMenuItem onClick = {() => { updateActionMenuVisability(false); openDeleteDialog(true);}} >Delete </ActionMenuItem>
            </>
          }
        </div>
      </MoviePoster>
      <MovieDetails>
        <MovieInfo>
          <MovieNameInfo> {movie.title} </MovieNameInfo>
          <MovieGenreInfo> {movie.genres.join(' & ')} </MovieGenreInfo>
        </MovieInfo>
        <YearChip> {movie.release_date.split('-')[0]}</YearChip>
      </MovieDetails>
      <ModalWindow
        opened = {editDialogOpened}
        onClose = {() => openDialog(false)}
        width = {50}
        title="Edit movie"
        child = {<AddDialogComponent movie={movie} />}
    />

    <ModalWindow
      opened = {deleteDialogOpened}
      onClose = {() => openDeleteDialog(false)}
      width = {30}
      height = {200}
      title="Delete movie"
      child = {<DeleteDialogComponent movie={movie} />}
    />    
    </Card>);
}
export default MovieCardComponent;

MovieCardComponent.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}
