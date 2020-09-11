<template>
  <div class="menu_container" :class="stick ? 'stick': ''" ref="menu_container">
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
      description: "Welcome to whalsper.",
      stick: false
    };
  },
  props: {
    msg: String
  },
  mounted() {
    // window.addEventListener("scroll", this.stickMenu, true);
  },
  methods: {
    getDescription() {
      const thisPage = this.$route.name;
      let description = "";
      switch (thisPage) {
        case "home":
          description = "Welcome to whalsper.";
          break;
        case "music":
          description = "Songs I wrote.";
          break;
        case "articles":
          description = "Things I saw.";
          break;
        case "projects":
          description = "Projects I build.";
          break;
        case "about":
          description = "Who I am.";
          break;
        default:
          description = ""
          break;
      }
      return (this.description = description);
    },
    stickMenu() {
      const fromTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.stick = fromTop > 80;
      EventBus.$emit("stickMenu", this.stick);
    },
    scrollToTop() {
      document.getElementById("app").scrollIntoView("false");
      this.stick = false;
    }
  },
  watch: {
    // $route: "getDescription"
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";

.menu_container {
  min-width: 220px;
  &.stick {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 1rem;
    z-index: 2;
  }
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
  .description {
    margin-top: 1.5rem;
    font-size: 13px;
    color: @font-color;
  }
  .srollToTop {
    position: fixed;
    right: 1rem;
    bottom: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(#628bd8, 0.8);
    border-radius: 50%;
    color: #fff;
    line-height: 2.5rem;
    text-align: center;
  }
}
</style>

