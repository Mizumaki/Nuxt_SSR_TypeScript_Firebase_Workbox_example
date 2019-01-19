<template>
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.index">
      {{ movie.year }} - {{ movie.title }}
    </li>
  </ul>
</template>

<script>
import {mapState} from 'vuex';

export default {
  asyncData({ store, route }) {
    // アクションから Promise が返されます
    return store.dispatch('statham/getMovies');
  },

  computed: {
    ...mapState({
      movies: state => state.statham.movies,
    })
  }
}
</script>