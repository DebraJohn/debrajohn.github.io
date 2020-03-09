<template>
  <header>
    <Profile/>
    <Menu/>
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
  // border-bottom: 1px dashed #333;
}
</style>
