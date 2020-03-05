<template>
  <div class="profile">
    <div class="avatar"><img :src=Avatar alt=""></div>
    <div class="userName">DebraJohn</div>
  </div>
</template>

<script>
import Avatar from '@/assets/images/avatar.jpg';
export default {
  name: "Profile",
  data() {
    return {
      Avatar
    }
  },
  props: {
    msg: String
  }
};
</script>

<style lang="less" scoped>
.profile {
  width: 100%;
  padding: 15px 0;
  // height: 30rem;
  // border: 1px solid black;
  .avatar {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .userName {
    font-size: 15px;
    font-weight: bold;
    margin: 15px 0;
  }
}
</style>

