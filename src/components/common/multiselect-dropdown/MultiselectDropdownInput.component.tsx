import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownOption from './MultiselectDropdownOption.component';
import './MultiselectDropdownInput.css';
import useClickOutside from '../hooks/useclickOutside';

export const InputTitle = styled.div`
  color: #f65261;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  margin: 10px 0;
`;

const DropdownInput = styled.div`
  background-color: #424242;
  opacity: 0.7;
  color: white;
  height: 40px;
  display: flex;
  margin-bottom: 10px;
  width: ${(props) => (`${props.widthPercent}%`)};
  &:hover {
    cursor: pointer;
  }
`;
DropdownInput.propTypes = {
  widthPercent: PropTypes.number
}

const DropdownValue = styled.span`
  height: 40px;
  flex: 2;
  margin: 10px;
  font-family: 'Quicksand', sans-serif;
  color: #ffffff96;
`;
export const DropdownIcon = styled(FontAwesomeIcon)`
  color: #f65261;
  font-size: 30px;
  flex: 0.2;
  &:hover {
    cursor: pointer;
  }
`;

const MultiselectDropdownComponent = ({value, title, placeholder, widthPercent, optionsList }) => {
  const [isOpened, updateVisibility] = useState(false);
  const [items, updateItems] = useState(optionsList);
  const [selectedItemsList, updateSelectedList] = useState(value);
  const ref = useRef();

  useClickOutside(ref, () => updateVisibility(false));
  const onSelectedLictChanged = (value) => {
    if (selectedItemsList.find(i => i === value)) {
      updateSelectedList(selectedItemsList.filter(i => i !== value));
    } else {
      updateSelectedList([...selectedItemsList, value]);

    }
    updateItems(items.map(i => i.value === value ? ({...i, selected: !i.selected}) : i));
  };
  const itemsElements = items.map((i) => (
    <DropdownOption
      value={i.value} 
      title={i.itemTitle} 
      isChecked={selectedItemsList.find((itm) => itm === i.value)} 
      onClick = {(v) => onSelectedLictChanged(v)}>
    </DropdownOption>
  ));
  return (
    <>
      <InputTitle> {title} </InputTitle>
      <DropdownInput onClick= {()=> updateVisibility(!isOpened)} widthPercent={widthPercent}>
        <DropdownValue> {selectedItemsList.join(', ').toString() || placeholder } </DropdownValue>
        <DropdownIcon icon={faSortDown}></DropdownIcon>
      </DropdownInput>
      <div ref={ref} className="dropdown-collapse-panel">
        {
          isOpened && itemsElements
        }
      </div>
    </>
  );
}
export default MultiselectDropdownComponent;

MultiselectDropdownComponent.propTypes = {
  value: PropTypes.array,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  widthPercent: PropTypes.number,
  optionsList: PropTypes.array,
}
MultiselectDropdownComponent.defaultProps = {
  value: [],
}
