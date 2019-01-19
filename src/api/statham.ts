import { Movie } from "~/types";

const movies: Movie[] = [
  { "year": 1998, "title": "Lock, Stock and Two Smoking Barrels" },
  { "year": 2002, "title": "The Transporter" },
  { "year": 2018, "title": "Meg" }
]

export default {
  fetchMovies() {
    return new Promise((resolve, reject) => {
      // 3秒待ってから返す
      setTimeout(() => {
        resolve(movies)
      }, 3000);
    })
  },
}