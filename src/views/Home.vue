<template>
  <div class="home">
    <div v-html="article" class="artical-content"></div>
    <!-- <div class="card profile">
      <div>Name: DebraJohn</div>
      <div>Major: Front-End Engineer</div>
      <div>Sideline: Song Writer</div>
      <div>Hobbies: Movies | Books | Rock n Roll</div>
      <div class="follow-me">github | douban | music | subscription</div>
      <div class="contact-me">email: nihaozzihui@163.com</div>
      <div>......</div>
      <div>Not finished yet</div>
    </div> -->
    <!-- <div class="card"></div>
    <div class="card"></div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MD from '@/articles/Array.md'

export default {
  name: "home",
  components: {},
  data() {
    return {
      article: ''
    }
  },
  methods: {
    testMarkdown() {
      this.article = MD
    }
  },
  created: function() {
    this.testMarkdown()
  }
  
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";

.home {
  display: flex;
  justify-content: center;
  font-size: 13px;
  height: 90%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  // width: 900px;
  .card {
    // flex: 1;
    width: 300px;
    height: 400px;
    background: #f1f5ff;
    margin: 0.5rem;
    & > div {
      text-align: left;
      margin: 1rem;
    }
    &:hover {
      background: @theme-color;
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>

