<template>
  <header>
    <div class="header-container">
      <Profile/>
      <Menu/>
    </div>
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Profile from '@/components/Profile.vue'

export default {
  name: "navigator",
  components: {
    Menu,
    Profile
  },
  data() {
    return {
    }
  },
  computed: {
    // hideProfile() { // 隐藏头像
    //   return this.$route.path.split('/').length > 2
    // }
  },
  mounted() {
  },
  beforeDestory() {
  },
  methods: {
  }
};
</script>

<style lang="less">
@import "~@/assets/styles/common.less";

header {
  width: 100%;
  // border-bottom: 2px dashed #ccc;
  box-shadow: 0px 4px 5px #eee;
  // background: #bbb;
  height: 100px;
  .header-container {
    margin: auto;
    width: 1080px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
