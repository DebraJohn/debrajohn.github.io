<template>
  <router-link to="/" class="profile">
    <div class="avatar"><img :src=Avatar alt=""></div>
    <div class="siteName">
      <div class="chiName">呓语鲸人</div>
      <div class="engName">Whalsper</div>
    </div>
  </router-link>
</template>

<script>
import Avatar from '@/assets/images/favicon.png';
export default {
  name: "Profile",
  data() {
    return {
      Avatar
    }
  }
};
</script>

<style lang="less" scoped>
.profile {
  padding: 0 20px;
  display: flex;
  text-decoration: none;
  color: #333;
  .avatar {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .siteName {
    margin: 10px;
    text-align: right;
    .chiName {
      font-size: 20px;
      font-weight: bold;
      margin: 3px 0;
    }
    .engName {
      font-size: 13px;
      color: #555;
    }
  }
  @media (max-width: 550px) {
    .siteName {
      display: none;
    }
  }
}
</style>

