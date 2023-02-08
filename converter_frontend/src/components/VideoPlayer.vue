<template>
    <div id="app">
        <video ref="videoPlayerContent" class="video-js"></video>
    </div>
</template>

<script lang="ts">
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'VideoPlayer',
    props: ['options'],
    setup(props) {
        const videoPlayerContent = ref<Element | string>()
        const player = ref<any>(null)

        onMounted(() => {
            player.value = videoPlayerContent.value && videojs(videoPlayerContent.value, props.options, () => {
                player.value.log('onPlayerReady');
            });
        })
        onBeforeUnmount(() => {
            if (player.value) {
                player.value.dispose();
            }
        })
        return { videoPlayerContent, player }
    },
});
</script>