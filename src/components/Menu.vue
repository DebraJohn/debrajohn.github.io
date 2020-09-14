<template>
  <div class="menu_container" ref="menu_container">
    <div class="menu">
      <router-link to="/" class="_home_"><a-icon type="home" />首页</router-link>
      <router-link to="/music" title="Songs I wrote." class="_music_"><a-icon type="customer-service" />音乐</router-link>
      <router-link to="/articles" title="Things I saw." class="_articles_"><a-icon type="file-text" />文集</router-link>
      <router-link to="/projects" title="Projects I build." class="_projects_"><a-icon type="project" />项目</router-link>
      <router-link to="/about" title="Who I am." class="_about_"><a-icon type="user" />关于</router-link>
    </div>
  </div>
</template>

<script>
import EventBus from "@/core/eventBus";

export default {
  name: "Menu",
  data() {
    return {
    };
  },
  props: {
    msg: String
  },
  watch: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";

.menu_container {
  min-width: 220px;
  .menu {
    display: flex;
    justify-content: space-between;
    a {
      margin-left: 40px;
      font-size: 13px;
      // font-weight: bold;
      color: @font-color;
      // padding: 0 20px;
      text-align: center;
      text-decoration: none;
      &._home_ {
        &.router-link-exact-active {
          color: @theme-color;
          text-decoration: underline;
        }
      }
      &._music_,
      &._articles_,
      &._projects_,
      &._about_ {
        &.router-link-active {
          color: @theme-color;
          text-decoration: underline;
        }
      }
      &:hover {
        text-decoration: underline;
      }
    }
    i {
      margin-bottom: 5px;
      display: block;
      // font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>

