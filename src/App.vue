<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import '@/assets/styles/markdown.less'

export default {
  name: "home",
  components: {
    Menu
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  display: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 10%;
}
</style>
