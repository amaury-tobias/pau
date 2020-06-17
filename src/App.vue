<template>
  <div id="app">
    <div v-if="!isPortrait" class="portrait">
      <div class="portrait-container">
        <p>Por favor coloca el dispositivo en modo retrato</p>
        <p>💛❤🧡💛💚💙💜🤎🖤</p>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    isPortrait: true
  }),
  mounted() {
    this.handleOrientationChange()
    window.addEventListener('orientationchange', this.handleOrientationChange)
  },
  methods: {
    handleOrientationChange() {
      const orientation = window.orientation
      if (Math.abs(Number(orientation)) === 90) this.isPortrait = false
      else this.isPortrait = true
    }
  }
})
</script>

<style>
html {
  background-color: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

body {
  margin: 0;
  height: 100vh;
  widows: 100vw;
  overflow: hidden;
  position: relative;
}
.portrait {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 9999;
  color: #fff;
}
.portrait-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
