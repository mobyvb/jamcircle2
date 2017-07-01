<template>
  <div id="sidebar" :open="isOpen">
    <div id="toggle-sidebar" @click.prevent="toggleSidebar"></div>
    <div class="button-list" v-if="isOpen">
      <li>
        <button :disabled="currentPage == HOME_PAGE"
          @click.prevent="navigateToHome">Home</button>
      </li>
      <li>
        <button :disabled="currentPage == JAM_ROOM_PAGE"
          @click.prevent="navigateToJamRoom">Jam!</button>
      </li>
      <li>
        <button :disabled="currentPage == MIDI_EDITOR_PAGE"
          @click.prevent="navigateToMidiEditor">Midi Editor</button>
      </li>
      <li>
        <button :disabled="currentPage == SOUND_EDITOR_PAGE"
          @click.prevent="navigateToSoundEditor">Sound Editor</button>
      </li>
    </div>
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
      HOME_PAGE: store.state.HOME_PAGE,
      JAM_ROOM_PAGE: store.state.JAM_ROOM_PAGE,
      MIDI_EDITOR_PAGE: store.state.MIDI_EDITOR_PAGE,
      SOUND_EDITOR_PAGE: store.state.SOUND_EDITOR_PAGE,
      isOpen: true
    };
  },

  methods: {
    navigateToHome () {
      store.commit('GO_TO_PAGE', {page: this.HOME_PAGE});
    },

    navigateToJamRoom () {
      store.commit('GO_TO_PAGE', {page: this.JAM_ROOM_PAGE});
    },

    navigateToMidiEditor () {
      store.commit('GO_TO_PAGE', {page: this.MIDI_EDITOR_PAGE});
    },

    navigateToSoundEditor () {
      store.commit('GO_TO_PAGE', {page: this.SOUND_EDITOR_PAGE});
    },

    toggleSidebar () {
      this.isOpen = !this.isOpen;
    }
  }
}

</script>

<style>
#sidebar {
  padding: 25px;
  float: left;
  height: 100%;
  position: relative;
  width: 0px;
  border-right: 1px solid black;
}

#sidebar[open] {
  width: auto;
  padding-top: 75px;
}

#toggle-sidebar {
  position: absolute;
  top: 10px;
  right: 10px;
  border-left: 20px solid black;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  height: 0;
  width: 0;

}

#sidebar[open] #toggle-sidebar {
  border-left: none;
  border-right: 20px solid black;
}

.button-list {
  list-style: none;
}

.button-list button {
  border: 1px solid black;
  height: 25px;
  width: 100px;
  margin: 5px;
  border-radius: 2px;
  /*background-color: seashell*/
}

.button-list button[disabled] {
  /*background-color: ghostwhite;*/
}

</style>
