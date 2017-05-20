<template>
  <div id="app">
    <sidebar></sidebar>
    <visualizer v-if="currentPage == VISUALIZER_PAGE"></visualizer>
    <midi-editor v-else-if="currentPage == MIDI_EDITOR_PAGE"></midi-editor>
    <sound-editor v-else-if="currentPage == SOUND_EDITOR_PAGE"></sound-editor>
    <home v-else></home>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Visualizer from './components/Visualizer.vue';
import MidiEditor from './components/MidiEditor.vue';
import SoundEditor from './components/SoundEditor.vue';
import Home from './components/Home.vue';

import store from './store';

export default {
  components: {
    Sidebar,
    Visualizer,
    MidiEditor,
    SoundEditor,
    Home
  },

  computed: {
    currentPage () {
      return store.state.currentPage;
    },
  },

  data () {
    return {
      VISUALIZER_PAGE: store.state.VISUALIZER_PAGE,
      MIDI_EDITOR_PAGE: store.state.MIDI_EDITOR_PAGE,
      SOUND_EDITOR_PAGE: store.state.SOUND_EDITOR_PAGE
    };
  }
}

</script>

<style>
</style>
