<template>
<div>
  {{ imgUrl }}
  <img
    :src="imgUrl"
    alt="#">
</div>
</template>

<script>
export default {
  name: 'imgComponent',
  data () {
    return {
      url: this.$store.getters('getFileFromStore')
    }
  },
  computed: {
    imgUrl: () => this.url
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
