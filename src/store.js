import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    VISUALIZER_PAGE: 0,
    MIDI_EDITOR_PAGE: 1,
    SOUND_EDITOR_PAGE: 2,
    currentPage: -1
  },

  mutations: {
    INCREMENT (state) {
      state.counter ++
    },

    GO_TO_PAGE (state, args) {
      console.log('changing state page from ' + state.currentPage + ' to ' + args.page);
      state.currentPage = args.page;
    }
  }
})

export default store
