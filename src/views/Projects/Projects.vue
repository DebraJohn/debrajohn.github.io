<template>
  <div class="projects">
    <div v-for="(item, i) in projectsData" :key="i" class="item" @click="goToLink(item.link)">
      <img :src="item.thumbnail" :title="item.title" />
      <div class="right-content">
        <div class="title">{{item.title}}</div>
        <div class="tag">{{item.tag}}</div>
      </div>
    </div>
  </div>
</template>


<script>
import projectsData from "./projectsData";
export default {
  name: "Projects",
  data() {
    return {
      projectsData
    };
  },
  methods: {
    goToLink(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";
.projects {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 20px;
  .item {
    display: flex;
    margin: 20px 0;
    width: 15rem;
    &:hover {
      cursor: pointer;
    }
    & > img {
      width: 40px;
      height: 40px;
    }
    .right-content {
      align-self: center;
      text-align: left;
      margin-left: 0.5rem;
      .title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .tag {
        font-size: 12px;
      }
    }
  }
}
</style>
