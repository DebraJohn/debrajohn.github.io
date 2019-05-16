<template>
  <div class="profile"></div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    msg: String
  }
};
</script>

<style lang="less" scoped>
.profile {
  width: 20rem;
  height: 30rem;
  border: 1px solid black;
}
</style>

