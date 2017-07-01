<template>
  <div id="visualizer-3d">
    <h2 style="color:white">3d visualizer</h2>
  </div>
</template>

<script>
import store from '../store';

var scene, camera, renderer;

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

  mounted () {
    this.initScene();
  },

  methods: {
    initScene () {
      console.log('initializing scene');
      scene = new THREE.Scene();
      // TODO fix width and height
      var WIDTH = window.innerWidth;
      var HEIGHT = window.innerHeight;

      renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize(WIDTH, HEIGHT);
      document.getElementById('visualizer-3d').appendChild(renderer.domElement);
    }
  }
}

</script>

<style scoped>
#visualizer-3d {
  background-color: #000000;
}
</style>
