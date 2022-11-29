import { Movie } from '../../body/movie-list';
import { DropdownConfigItem } from '../dropdown/DropdownItemConfig';

export class GenreItem extends DropdownConfigItem {

  constructor(    
    readonly id: number,
    readonly itemTitle: string,
    readonly value?: string,) {
      super(id, itemTitle, value);
    }
  
  static getListOfItems(movies: Movie[]): GenreItem[] {
    const allGenresStrings = movies.map(m => m.genres).flat()
    const filteredGenres = allGenresStrings.filter((m, i) => allGenresStrings.indexOf(m) === i);
    return filteredGenres.map((g, i) => (new GenreItem(i, `${g.charAt(0).toUpperCase()}${g.slice(1)}`, g)));
  }
}