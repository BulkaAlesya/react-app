import { DropdownConfigItem } from "./DropdownItemConfig";

export class SortingConfigItem extends DropdownConfigItem {
  static ReleaseDateItem: DropdownConfigItem = new DropdownConfigItem(1, 'Release Date');
  static RatingItem: DropdownConfigItem = new DropdownConfigItem(2, 'Rating');
  static NameItem: DropdownConfigItem = new DropdownConfigItem(3, 'Film Name');
  
  static asList(): SortingConfigItem[] {
    return Object.keys(SortingConfigItem)
      .map((key) => SortingConfigItem[key]);
  }
}