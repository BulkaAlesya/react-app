export class Movie {
    id: string = ''; 
    name: string = '';
    genre: string[] = [];
    year: string = '';
    date: Date = new Date();;
    rating: string = '';
    url: string = '';
    poster: string = '';
    runtime: string = '';
    description: string = '';
}
export const Movies: Movie[] = [
  { 
    id: '1',
    name: 'Pulp Fiction',
    genre: ['action', 'adventure'],
    year: '2004',
    date: new Date(),
    url: '',
    rating: '7',
    runtime: '220',
    poster: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-cover-i1288.jpg',
    description: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-cover-i1288.jpg',
  },
  { 
    id: '2',
    name: 'Bohemian Rhapsody',
    genre: ['comedy'],
    year: '2018',
    date: new Date(),
    url: '',
    rating: '8.3',
    runtime: '217',
    poster: 'https://upload.wikimedia.org/wikipedia/be-x-old/2/2e/Bohemian_Rhapsody_poster.png',
    description: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-cover-i1288.jpg',
  }, 
  { 
    id: '3',
    name: 'Kill Bill: vol 2',
    genre: ['comedy', 'documentary'],
    year: '1994',
    date: new Date(),
    url: '',
    rating: '9',
    runtime: '156',
    poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS34YtP5L1Du1keGmJXEJVG3ap_KnWdyPwrPkqLnjZ2PK2g_WsO',
    description: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-cover-i1288.jpg',
  },
];