import { RootState } from "~/types";
import { MutationTree } from "vuex";

export const state = (): RootState => ({
  counter: 0
})

export const mutations: MutationTree<RootState> = {
  increment(state: RootState): void {
    state.counter++
  }
}