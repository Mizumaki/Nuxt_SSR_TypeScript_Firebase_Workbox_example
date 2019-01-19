export * from './state';

export interface Statham {
  movies: Movie[];
}

export interface Movie {
  year: number;
  title: string;
}
