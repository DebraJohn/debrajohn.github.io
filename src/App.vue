<template>
  <div id="app">
    <Menu/>
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
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
  min-height: 100%;
}

.footer {
  padding: 0.3rem;
  text-align: center;
  font-size: 12px;
  color: #2c3e50;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
