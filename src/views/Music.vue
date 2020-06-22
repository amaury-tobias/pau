<template>
  <div style="height: 100%;">
    <particles-bg
      :key="particles + 1"
      ref="particles"
      type="circle"
      :num="6"
      bg
    />

    <vue-particles
      :key="particles"
      shape-type="circle"
      :line-linked="false"
      :hover-effect="false"
      click-mode="push"
      :particle-size="3"
      style="
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        top: 0px;
        left: 0px;
      "
    />

    <pau-player :tracks="tracks" />
    <!-- <transition-group :name="transitionName">
      <div
        v-show="$index === currentTrackIndex"
        class="page_image"
        :style="{ backgroundImage: `url(${track.bg})` }"
        v-for="(track, $index) in tracks"
        :key="track.name"
      ></div>
    </transition-group> -->
  </div>
</template>

<script>
import { ParticlesBg } from 'particles-bg-vue'
import PauPlayer from '@/components/PauPlayer.vue'

export default {
  components: { ParticlesBg, PauPlayer },
  data: () => ({
    particles: 0,
    tracks: [
      {
        color: '#dedede',
        name: 'Next To You',
        artist: 'Ken Arai',
        cover: '/img/covers/1.jpg',
        source:
          'https://raw.githubusercontent.com/amaury-tobias/pau/master/public/songs/NextToYou.mp3',
        bg: '/img/f1.png',
      },
      {
        color: '#fcc277',
        name: 'Everybody Knows',
        artist: 'Leonard Cohen',
        cover: '/img/covers/2.jpg',
        source:
          'https://raw.githubusercontent.com/amaury-tobias/pau/master/public/songs/AURORA-IWentTooFar.mp3',
        bg: '/img/f2.png',
      },
      {
        name: 'Extreme Ways',
        artist: 'Moby',
        cover: '/img/covers/3.jpg',
        source: '/songs/NextToYou.mp3',
        bg: '/img/f5.png',
      },
      {
        color: '#0000ff',
        name: 'Butterflies',
        artist: 'Sia',
        cover: '/img/covers/4.jpg',
        source: '/songs/NextToYou.mp3',
      },
      {
        color: '#0000ff',
        name: 'The Final Victory',
        artist: 'Haggard',
        cover: '/img/covers/5.jpg',
        source: '/songs/NextToYou.mp3',
      },
      {
        color: '#0000ff',
        name: 'Genius ft. Sia, Diplo, Labrinth',
        artist: 'LSD',
        cover: '/img/covers/6.jpg',
        source: '/songs/NextToYou.mp3',
      },
      {
        color: '#0000ff',
        name: 'The Comeback Kid',
        artist: 'Lindi Ortega',
        cover: '/img/covers/7.jpg',
        source: '/songs/NextToYou.mp3',
      },
      {
        color: '#0000ff',
        name: 'Overdose',
        artist: 'Grandson',
        cover: '/img/covers/8.jpg',
        source: '/songs/NextToYou.mp3',
      },
      {
        color: '#0000ff',
        name: "Rag'n'Bone Man",
        artist: 'Human',
        cover: '/img/covers/9.jpg',
        source: '/songs/NextToYou.mp3',
      },
    ],
  }),
}
</script>

<style>
.page_image {
  z-index: -2;
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
