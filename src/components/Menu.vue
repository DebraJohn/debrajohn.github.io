<template>
  <div class="menu_container" :class="stick ? 'stick': ''" ref="menu_container">
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/music" title="Songs I wrote.">Music</router-link>
      <!-- <router-link to="/thoughts" title="Things I saw.">Thoughts</router-link> -->
      <router-link to="/projects" title="Projects I build.">Projects</router-link>
      <router-link to="/about" title="Who I am.">About</router-link>
    </div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
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
    window.addEventListener("scroll", this.stickMenu, true);
  },
  methods: {
    getDescription() {
      const thisPage = this.$route.name;
      let description = "Welcome to whalsper.";
      switch (thisPage) {
        case "music":
          description = "Songs I wrote.";
          break;
        case "thoughts":
          description = "Things I saw.";
          break;
        case "projects":
          description = "Projects I build.";
          break;
        case "about":
          description = "Who I am.";
          break;
        default:
          break;
      }
      return (this.description = description);
    },
    stickMenu() {
      const fromTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.stick = fromTop > 120;
    }
  },
  watch: {
    $route: "getDescription"
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";

.menu_container {
  padding: 10% 1rem;
  // background: #e8f5ff;
  background: #fff;
  // height: 10%;
  &.stick {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem 1rem;
    z-index: 2;
  }
  .menu {
    display: flex;
    justify-content: center;
    a {
      font-weight: bold;
      color: @font-color;
      padding: 0 0.7rem;
      text-align: left;
      &.router-link-exact-active {
        color: @theme-color;
      }
    }
  }
  .description {
    margin-top: 1.5rem;
    font-size: 13px;
    color: @font-color;
  }
}
</style>

