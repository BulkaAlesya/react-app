import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${(props) => props.heightPX ? (`${props.heightPX}px`) : '600px'};
  transform: translate(-50%, -50%);
  background-color: #1a1a1a;
  padding: 50px;
  border: 2px solid #FFFFFFbd; 
  width: ${(props) => (`${props.widthPercent}%`)};
  `;
Box.propTypes = {
  widthPercent: PropTypes.number,
  heightPX: PropTypes.number,
}
export const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-right: 10px;
  background-color: #1a1a1a;
  color: #FFFFFFbd;
  &:hover {
    cursor: pointer;
  }
`;
export const DialogTitle = styled.div`
  color: #FFFFFFbd;
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 200;
  margin-bottom: 100px;
`;