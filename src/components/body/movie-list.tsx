export interface Movie {
  name: string;
  genre: string[];
  year: string;
  poster: string;
}
export const Movies: Movie[] = [
  { 
    name: 'Pulp Fiction',
    genre: ['action', 'adventure'],
    year: '2004',
    poster: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-cover-i1288.jpg',
  },
  { 
    name: 'Bohemian Rhapsody',
    genre: ['crime', 'biography', 'music'],
    year: '2018',
    poster: 'https://upload.wikimedia.org/wikipedia/be-x-old/2/2e/Bohemian_Rhapsody_poster.png',
  }, { 
    name: 'Kill Bill: vol 2',
    genre: ['oscar winning movie'],
    year: '1994',
    poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS34YtP5L1Du1keGmJXEJVG3ap_KnWdyPwrPkqLnjZ2PK2g_WsO',
  },
];