<template>
  <div class="projects">
    <div v-for="(item, i) in projectsData" :key="i" class="item" @click="goToLink(item.link)">
      <img :src="item.thumbnail" :alt="item.title">
      <div>
        <div class="title">{{item.title}}</div>
        <div class="tag">{{item.tag}}</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Projects",
  data() {
    return {
      projectsData: [
        {
          title: "Calculator",
          tag: "React",
          thumbnail: require("@/assets/images/calculator.png"),
          link: 'https://debrajohn.github.io/calculator-react/build'
        }
      ]
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
  @import '~@/assets/styles/common.less';
  .projects {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      flex-basis: 25rem;
      height: 25rem;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      // margin: 2rem;
      background: #333;
      & > img {
        height: 100%;
      }
      & > div {
        position: absolute;
        width: 100%;
        bottom: 0;
        background: rgba(@font-color, .5);
        color: #fff;
        text-align: left;
        padding: .5rem;
        .tag {
          margin-top: .3rem;
          font-size: 13px;
        }
      }
    }
  }
</style>
