<template>
  <div id="app">
    <router-view></router-view>
     <notifications group="foo" />
  </div>
 
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #010c18;
  width: 50vw;
}
</style>
