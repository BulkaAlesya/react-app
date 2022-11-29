import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMoviesByGenre, fetchSotredMovies } from '../api/reducer';
import DropdownComponent from '../common/dropdown/Dropdown.component';
import { SortingConfigItem } from '../common/dropdown/SortingConfigItems';
import { ConfigurationPanel, MenuContainer, MenuPageItem, MenuPagePanel, Separator } from './Menu.styled-components';
import { MenuConfigItem } from './MenuConfigItem';

interface MenuPage extends MenuConfigItem {
  isActive: boolean;
}
let items: MenuPage[] = MenuConfigItem.asList().map((mc, i) => ({...mc, isActive: !i}));

const MenuComponent = () => {

  const dispatch = useDispatch();

  const [list, updateList] = useState(items);
  const [selectedSortingType, updateDropdownSelected] = useState(SortingConfigItem.asList()[2]);

  const onActivePageChanged = (index: number) => {
    let newlist = list.map((itm, i) => ({...itm, isActive: i === index}));
    updateList(newlist);
    dispatch(fetchMoviesByGenre(newlist.find(l => l.isActive)?.value))
  };
  const onDropdownClick = useCallback((t) => {
    updateDropdownSelected(t);
    dispatch(fetchSotredMovies(t.value));
  }, [selectedSortingType]);

  const itemList = list.map((menuItem, i) => (
    <MenuPageItem 
      key={menuItem.id} 
      active={menuItem.isActive} 
      onClick={() => onActivePageChanged(i)}>{menuItem.pageName} 
    </MenuPageItem>
  ));
  return (
    <>
      <MenuContainer>
        <MenuPagePanel>
        { itemList}
        </MenuPagePanel>
        <ConfigurationPanel>
          <span> Sort By </span>
          <DropdownComponent
            selected={selectedSortingType}
            changeSelected={onDropdownClick}
            ></DropdownComponent>
        </ConfigurationPanel>
      </MenuContainer>
      <Separator></Separator>
    </>
  );
};
export default MenuComponent;