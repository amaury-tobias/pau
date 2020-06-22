<template>
  <div class="home">
    <router-link to="music">
      <div>
        <img alt="Yellow Love" src="../assets/logo.png" />
        <p>MUSIC</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
img {
  transition: all 0.3s;
  border-radius: 2rem;
  width: 20%;
  object-fit: contain;
}
img:hover {
  width: 25%;
}
a {
  display: block;
  text-decoration: none;
  color: #ffff80;
  font-weight: 800;
  margin-top: 1rem;
}
a:focus {
  outline: none;
}
</style>
