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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices, sem in fermentum mattis, neque tortor tempor libero, id cursus ex mauris nec justo. Vivamus lacinia, ante et tristique tempor, elit ex placerat justo, vitae pellentesque odio risus id felis. Sed convallis risus congue convallis suscipit. Curabitur a cursus est. Nullam vestibulum sollicitudin nisl, vitae rhoncus justo fringilla id. Ut non lacus augue. Duis nec augue eu justo vehicula posuere. Nunc sed leo turpis. Aliquam et semper urna. Sed sollicitudin elit ut tincidunt convallis. Aliquam erat volutpat. Vivamus hendrerit felis aliquam sem placerat, sit amet iaculis mauris iaculis. Sed eget velit ornare, mattis felis bibendum, interdum odio. Nulla sit amet laoreet augue, et malesuada erat. Quisque consequat commodo ligula id pellentesque.',
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
    description: 'Sed scelerisque magna sapien. Praesent metus sapien, pharetra eu augue at, viverra elementum mi. Nam commodo metus eget ligula auctor, sit amet pellentesque nunc tempus. Praesent consectetur tristique rhoncus. Donec quis ex elementum, aliquam justo ut, sollicitudin nunc. Phasellus sed mauris quam. Maecenas porta ligula ut metus imperdiet, vel fermentum erat gravida. Vivamus ante ipsum, vehicula a lobortis nec, eleifend non libero. Nam dapibus eu massa non ornare. Mauris ex velit, auctor non enim eu, lobortis sagittis ipsum. In ac volutpat ex. Nam luctus ligula et mauris euismod, sed aliquet ex venenatis.',
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
    description: 'Nullam placerat sit amet massa et facilisis. Praesent finibus sodales elit. Nam nec mauris tempor, scelerisque ex eu, venenatis urna. Nunc eget vestibulum libero. Ut nec quam eu quam tempus varius ac at nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin tincidunt mauris nec nunc vehicula ultrices.',
  },
];