import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import './Modal.css';
import { Box, CloseIcon, DialogTitle} from './Modal.styled-components';

const ModalWindow = ({opened, onClose, width, height, child, title}) => (
  <Modal
    open={opened}
    onClose={onClose}>
    <Box
      widthPercent={width}
      heightPX={height}>
        <div className="dialog-header">
          <DialogTitle> {title} </DialogTitle>
          <CloseIcon icon={faXmarkCircle} onClick={onClose}></CloseIcon></div>
      {child}
    </Box>
  </Modal>
)
export default ModalWindow;

ModalWindow.propTypes = {
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  child: PropTypes.element,
  title: PropTypes.string
}
ModalWindow.defaulfProps = {
  title: ''
}