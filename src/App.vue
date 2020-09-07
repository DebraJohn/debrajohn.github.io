<template>
  <div id="app">
    <Navigator/>
    <div class="container">
      <transition name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Guide />
  </div>
</template>

<script>
import './config/variables'
import Navigator from "@/components/Navigator.vue";
import '@/assets/styles/markdown.less'
import { Icon } from 'ant-design-vue'
import Guide from '@/components/Guide'
import Vue from "vue";
Vue.use(Icon)

export default {
  name: "home",
  components: {
    Navigator,
    Guide
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
  /* background: #333; */
  /* background: #e1e2e4; */
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  min-height: 100%;
  background: #fff;
}
.container {
  width: 1080px;
  margin: 20px auto;
}

@media (max-width: 1080px) {
 .container,
  header .header-container,
  footer {
    width: 100%;
  }
}

footer {
  padding: 0.3rem;
  text-align: center;
  font-size: 12px;
  color: #333;
  margin: auto;
  /* background: #fff; */
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
