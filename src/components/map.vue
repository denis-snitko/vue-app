<template>
  <div style="width: 100%; height: 600px">
    <yandex-map
      :coords="coords"
      :zoom="10"
    >
      <ymap-marker
        :coords="coords"
        marker-id="123"
        hint-content="some hint"
      />
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: {
    yandexMap,
    ymapMarker
  },
  data: () => ({
    coords: [55.7522200, 37.6155600]
  })
}
</script>

<style scoped>
.ymap-container {
  width: 100%;
  height: 100%;
}
</style>
