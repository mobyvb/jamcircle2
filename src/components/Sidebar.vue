<template>
  <div id="sidebar">
    <p>Sidebar</p>
    <li v-if="currentPage != VISUALIZER_PAGE">
      <button @click.prevent="navigateToVisualizer">Jam!</button>
    </li>
    <li v-if="currentPage != MIDI_EDITOR_PAGE">
      <button @click.prevent="navigateToMidiEditor">Midi Editor</button>
    </li>
    <li v-if="currentPage != SOUND_EDITOR_PAGE">
      <button @click.prevent="navigateToSoundEditor">Sound Editor</button>
    </li>
  </div>
</template>

<script>
import store from '../store';

export default {

  computed: {
    currentPage () {
      return store.state.currentPage;
    }
  },

  data () {
    return {
      VISUALIZER_PAGE: store.state.VISUALIZER_PAGE,
      MIDI_EDITOR_PAGE: store.state.MIDI_EDITOR_PAGE,
      SOUND_EDITOR_PAGE: store.state.SOUND_EDITOR_PAGE
    };
  },

  methods: {
    navigateToVisualizer () {
      console.log('going to visualizer page, ' + this.VISUALIZER_PAGE);
      store.commit('GO_TO_PAGE', {page: this.VISUALIZER_PAGE});
    },

    navigateToMidiEditor () {
      store.commit('GO_TO_PAGE', {page: this.MIDI_EDITOR_PAGE});
    },

    navigateToSoundEditor () {
      store.commit('GO_TO_PAGE', {page: this.SOUND_EDITOR_PAGE});
    }
  }
}

</script>

<style>
</style>
