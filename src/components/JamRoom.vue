<template>
  <div id="jam-room">
    <h1>Jam Room</h1>
    <visualizer-3d></visualizer-3d>
  </div>
</template>

<script>
import Visualizer3D from './Visualizer3D.vue';

export default {
  components: {
    'visualizer-3d': Visualizer3D
  }
}
</script>

<style scoped>
#jam-room {
  height: 100%;
  overflow: hidden;
}
</style>
