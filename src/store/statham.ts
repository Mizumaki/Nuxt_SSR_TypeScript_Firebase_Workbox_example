import { RootState, Statham, Movie } from "~/types";
import { MutationTree, ActionTree } from "vuex";
import stathamApi from '../api/statham';

export const state = (): Statham => ({
  movies: []
})

export const actions: ActionTree<RootState, RootState> = {
  getMovies({ commit }): any {
    return stathamApi.fetchMovies()
      .then((movies: Movie[]) => {
        commit('setMovieList', movies);
      });
  }
}

export const mutations: MutationTree<Statham> = {
  setMovieList(state: Statham, movies: Movie[]) {
    state.movies = movies;
  }
}
