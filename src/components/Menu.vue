<template>
  <div class="menu_container">
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/music" title="Songs I wrote">Music</router-link>
      <router-link to="/thoughts" title="Things I saw">Thoughts</router-link>
      <router-link to="/about" title="Something about me">About</router-link>
    </div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      description: "Welcome to whalsper."
    };
  },
  props: {
    msg: String
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
        case "about":
          description = "Who I am.";
          break;
        default:
          break;
      }
      return (this.description = description);
    }
  },
  watch: {
    $route: "getDescription"
  }
};
</script>

<style lang="less" scoped>
@theme-color: #628bd8;
@font-color: #2c3e50;
.menu_container {
  padding: 5rem 1rem;
  .menu {
    display: flex;
    justify-content: center;
    a {
      font-weight: bold;
      color: @font-color;
      padding: 0 1rem;
      text-align: left;
      &.router-link-exact-active {
        color: @theme-color;
      }
    }
  }
  .description {
    margin: 2rem;
    font-size: 14px;
    color: @font-color;
  }
}
</style>

