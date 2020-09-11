<template>
  <header>
    <div class="header-container">
      <Profile/>
      <Menu class="pcOnly" />
      <div class="phoneOnly"><a-icon type="menu" /></div>
      <div v-if="menuBoardShow" class="menuBoard">
        <Menu />
      </div>
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
      menuBoardShow: false
    }
  },
  computed: {
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
    padding: 0 20px;
    i {
      font-size: 20px;
      cursor: pointer;
    }
  }
  .phoneOnly {
    display: none;
  }
  @media (max-width: 720px) {
  .phoneOnly {
    display: block;
  }
  .pcOnly {
    display: none;
  }
}
}
</style>
