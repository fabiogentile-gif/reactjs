type MoviesType = {
  id: number;
  title: string;
  year: number;
  poster: string;
  genre: string;
  watched: boolean;
  favorite: boolean;
};
export type { MoviesType };


let Movies: MoviesType[] = [
  {
    id: 1,
    title: "The Grand Budapest Hotel",
    year: 2014,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    genre: "Comedy",
    watched: true,
    favorite: true,
  },
  {
    id: 2,
    title: "La La Land",
    year: 2016,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    genre: "Romance",
    watched: false,
    favorite: false,
  },
  {
    id: 3,
    title: "In the Mood for Love",
    year: 2000,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
    genre: "Drama",
    watched: true,
    favorite: false,
  },
  {
    id: 4,
    title: "Moonlight",
    year: 2016,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80&sat=-40",
    genre: "Drama",
    watched: false,
    favorite: false,
  },
];

export { Movies };