import { DropdownConfigItem } from "../dropdown/DropdownItemConfig";

export class GenreItem extends DropdownConfigItem {
  static Crime: GenreItem = new GenreItem(1, 'Crime', 'crime', false);
  static Documentary: GenreItem = new GenreItem(2, 'Documentary', 'documentary', false);
  static Horror: GenreItem = new GenreItem(3, 'Horror', 'horror', false);
  static Comedy: GenreItem = new GenreItem(4, 'Comedy', 'comedy', false);

  constructor(    
    readonly id: number,
    readonly itemTitle: string,
    readonly value?: string,
    select?: boolean) {
      super(id, itemTitle, value);
    }
  
  static asList(): GenreItem[] {
    return Object.keys(GenreItem)
      .map((key) => GenreItem[key]);
  }
}