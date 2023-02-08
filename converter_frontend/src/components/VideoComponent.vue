<template>
  <div class="container">
    <h1>HLS Videos</h1>
    <video-player :options="videoOptions" />
  </div>
</template>

<script  lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import VideoPlayer from '@/components/VideoPlayer.vue';
// import Requests from '../services/request'
export default defineComponent({
  name: 'VideoComponent',
  components: {
    VideoPlayer
  },
  setup() {
    // const src = ref('')
    const videoOptions = ref({
      autoplay: true,
      controls: true,
      width: '300px',
      height: '250px',
      sources: [
        {
          src: 'https://res.cloudinary.com/kahmyl/video/upload/v1675793600/bjork-all-is-full-of-love_xvzndj.ts',
          type: 'video/ts'
        }
      ]
    })
    onBeforeMount(() => {
      
    })
    return { videoOptions };
  }
})
</script>

<style lang="scss">
.container {
  margin: 5rem;

  h1 {
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 50px;
  }
}
</style>




