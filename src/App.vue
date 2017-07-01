<template>
  <div id="app">
    <sidebar></sidebar>
    <home v-if="currentPage == HOME_PAGE"></home>
    <jam-room v-else-if="currentPage == JAM_ROOM_PAGE"></jam-room>
    <midi-editor v-else-if="currentPage == MIDI_EDITOR_PAGE"></midi-editor>
    <sound-editor v-else-if="currentPage == SOUND_EDITOR_PAGE"></sound-editor>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import JamRoom from './components/JamRoom.vue';
import MidiEditor from './components/MidiEditor.vue';
import SoundEditor from './components/SoundEditor.vue';
import Home from './components/Home.vue';

import store from './store';

export default {
  components: {
    Home,
    Sidebar,
    JamRoom,
    MidiEditor,
    SoundEditor
  },

  computed: {
    currentPage () {
      return store.state.currentPage;
    },
  },

  data () {
    return {
      HOME_PAGE: store.state.HOME_PAGE,
      JAM_ROOM_PAGE: store.state.JAM_ROOM_PAGE,
      MIDI_EDITOR_PAGE: store.state.MIDI_EDITOR_PAGE,
      SOUND_EDITOR_PAGE: store.state.SOUND_EDITOR_PAGE
    };
  }
}

</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  width: 100%;
}

h1, h2 {
  font-weight: normal;
  text-align: center;
}

#app {
  font-family: Myriad, Helvetica, Arial, sans-serif;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
