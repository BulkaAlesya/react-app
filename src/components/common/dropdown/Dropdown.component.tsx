import React, { useState } from 'react';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { DropdownIcon, DropdownItem, DropdownItemsContainer, SearchDropdownButton } from './Dropdown.styled-components';
import { DropdownConfigItem } from './DropdownItemConfig';
import PropTypes from 'prop-types';

const DropdownComponent = ({itemsList, selected, changeSelected}) => {
  const [isOpnened, updateVisability] = useState(false);

  const onDropdowmItemClick = (i: DropdownConfigItem) => {
    changeSelected(i);
    updateVisability(false);
  };

  const itemElements = itemsList.map((i:DropdownConfigItem) => (
    <DropdownItem key={i.id} onClick={() => onDropdowmItemClick((i))}>
      {i.itemTitle}
    </DropdownItem>
  ));
  return (<div>
    <SearchDropdownButton onClick={()=>{updateVisability(!isOpnened)}}>
      {selected && selected.itemTitle}
      </SearchDropdownButton>
    <DropdownIcon icon={faSortDown}></DropdownIcon>
    <DropdownItemsContainer isOpen={isOpnened}>
      {itemElements}
    </DropdownItemsContainer>
  </div>)
}
DropdownComponent.propTypes = {
  itemsList: PropTypes.array,
  selected: PropTypes.instanceOf(DropdownConfigItem),
  changeSelected: PropTypes.func.isRequired
}


export default DropdownComponent;