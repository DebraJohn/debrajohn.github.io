<template>
  <div class="menu_container" :class="stick ? 'stick': ''" ref="menu_container">
    <div class="menu">
      <router-link to="/"><a-icon type="home" />Home</router-link>
      <router-link to="/music" title="Songs I wrote."><a-icon type="customer-service" />Music</router-link>
      <!-- <router-link to="/thoughts" title="Things I saw.">Thoughts</router-link> -->
      <router-link to="/articles" title="Things I saw."><a-icon type="file-text" />Articles</router-link>
      <router-link to="/projects" title="Projects I build."><a-icon type="project" />Projects</router-link>
      <router-link to="/about" title="Who I am."><a-icon type="user" />About</router-link>
    </div>
    <!-- <div v-if="!stick" class="description">{{description}}</div> -->
    <!-- <div class="srollToTop" v-show="stick" @click="scrollToTop()">Top</div> -->
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
  padding: 25px 0;
  // background: #e8f5ff;
  // background: #fff;
  // height: 10%;
  &.stick {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 1rem;
    z-index: 2;
    // border-bottom: 1px solid #eaeaea;
  }
  .menu {
    display: flex;
    justify-content: center;
    a {
      font-size: 13px;
      // font-weight: bold;
      color: @font-color;
      padding: 0 20px;
      text-align: center;
      text-decoration: none;
      &.router-link-exact-active {
        color: @theme-color;
        text-decoration: underline;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    i {
      margin-bottom: 5px;
      display: block;
      font-size: 16px;
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

