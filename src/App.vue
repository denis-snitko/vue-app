<template>
  <div id="app">
    <h1>Hello from heroku deploy</h1>
    <hr>
    <testComponent/>
    <Map/>
  </div>
</template>

<script>
// import imgComponent from './components/imgComponent.vue'
import testComponent from './components/testComponent.vue'
import Map from './components/map'

export default {
  name: 'App',
  components: {
    // imgComponent,
    testComponent,
    Map
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
