import React, { useRef, useState } from 'react';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { DropdownIcon, DropdownItem, DropdownItemsContainer, SearchDropdownButton } from './Dropdown.styled-components';
import { DropdownConfigItem } from './DropdownItemConfig';
import PropTypes from 'prop-types';
import useClickOutside from '../hooks/useclickOutside';
import { SortingConfigItem } from './SortingConfigItems';

const DropdownComponent = ({itemsList, selected, changeSelected}) => {
  const [isOpened, updateVisibility] = useState(false);
  const ref = useRef();
  const onDropdowmItemClick = (i: DropdownConfigItem) => {
    changeSelected(i);
    updateVisibility(false);
  };
  useClickOutside(ref, () => updateVisibility(false));

  const itemElements = itemsList.map((i:DropdownConfigItem) => (
    <DropdownItem key={i.id} onClick={() => onDropdowmItemClick((i))}>
      {i.itemTitle}
    </DropdownItem>
  ));
  return (<div>
    <SearchDropdownButton onClick={()=>{updateVisibility(!isOpened)}}>
      {selected && selected.itemTitle}
      </SearchDropdownButton>
    <DropdownIcon icon={faSortDown}></DropdownIcon>
    { isOpened && < DropdownItemsContainer ref={ref}>
      {itemElements}
    </DropdownItemsContainer>
}
  </div>)
}
DropdownComponent.propTypes = {
  itemsList: PropTypes.array,
  selected: PropTypes.instanceOf(DropdownConfigItem),
  changeSelected: PropTypes.func.isRequired
}

DropdownComponent.defaultProps = {
  itemsList: SortingConfigItem.asList()
}


export default React.memo(DropdownComponent);