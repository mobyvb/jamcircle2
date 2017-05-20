import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SoundEditor from '@/components/SoundEditor'
import MidiEditor from '@/components/MidiEditor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sound-editor',
      name: 'SoundEditor',
      component: SoundEditor
    },
    {
      path: '/midi-editor',
      name: 'MidiEditor',
      component: MidiEditor
    }
  ]
})
