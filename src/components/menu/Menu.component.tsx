import React, { useCallback, useState } from 'react';
import DropdownComponent from '../common/dropdown/Dropdown.component';
import { MenuConfigItem } from './MenuConfigItem';
import { ConfigurationPanel, MenuContainer, MenuPageItem, MenuPagePanel, Separator } from './Menu.styled-components';
import { SortingConfigItem } from '../common/dropdown/SortingConfigItems';

interface MenuPage extends MenuConfigItem {
  isActive: boolean;
}
let items: MenuPage[] = MenuConfigItem.asList().map((mc, i) => ({...mc, isActive: !i}));

const MenuComponent = () => {

  const [list, updateList] = useState(items);
  const [selectedSortingType, updateDropdownSelected] = useState(SortingConfigItem.asList()[2]);

  const onActivePageChanged = (index: number) => {
    let newlist = list.map((itm, i) => ({...itm, isActive: i === index}));
    updateList(newlist);
  };
  const onDropdownClick = useCallback((t) => {
    updateDropdownSelected(t)
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