<template>
  <div>
    <input
      type="file"
      accept="image/*,image/jpeg"
      ref="file"
    />
    <br>
    <br>
    <button @click="uploadFile">Upload</button>
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileInfo: {
        fileName: '',
        file: ''
      }
    }
  },
  methods: {
    uploadFile () {
      this.fileInfo.fileName = this.$refs.file.files[0].name
      this.fileInfo.file = this.$refs.file.files[0]
      this.$store.dispatch('uploadFile', this.fileInfo)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
