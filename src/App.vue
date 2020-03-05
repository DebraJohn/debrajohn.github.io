<template>
  <div id="app">
    <Navigator/>
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
import '@/assets/styles/markdown.less'
import { Icon } from 'ant-design-vue'
import Vue from "vue";
Vue.use(Icon)

export default {
  name: "home",
  components: {
    Navigator
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
  /* color: #2c3e50; */
  color: #333;
  width: 960px;
  margin: auto;
  /* padding: 0 10%; */
  min-height: 100%;
  background: #eee;
  padding: 20px;
}

@media (min-width: 960px) {
  #app {
    width: 960px;
  }
}

@media (min-width: 750px) {
  #app {
    width: 750px;
  }
}

@media (max-width: 749px) {
  #app {
    width: 100%;
  }
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
