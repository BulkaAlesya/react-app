import React, { useEffect, useRef, useState } from 'react';
import { ActionMenuItem, Card, CloseIcon, MovieDetails, MovieGenreInfo, MovieInfo, MovieNameInfo, MoviePoster, YearChip } from './MovieCard.styled-components';
import PropTypes from 'prop-types';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import AddDialogComponent from '../dialogs/add-dialog/AddDialog.component';
import ModalWindow from '../../common/modal-window/Modal.component';
import DeleteDialogComponent from '../dialogs/delete-dialog/DeleteDialog.components';

const MovieCardComponent = ({ movie, onClick }) => {

  const [isActionMenuOpened, updateActionMenuVisability] = useState(false);
  const [editDialogOpened, openDialog] = useState(false);
  const [deleteDialogOpened, openDeleteDialog] = useState(false);

  return (
    <Card onClick={()=> onClick(movie)}>
      <MoviePoster poster={movie.poster}>
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
          <MovieNameInfo> {movie.name} </MovieNameInfo>
          <MovieGenreInfo> {movie.genre.join(' & ')} </MovieGenreInfo>
        </MovieInfo>
        <YearChip> {movie.year}</YearChip>
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
