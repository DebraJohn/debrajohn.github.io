<template>
  <div class="article">
    <div class="article-content" v-for="(item, index) in article" :key="index">
      <div class="content" v-html="item" :class="activeIndex !== index ? 'ellipsis': ''"></div>
      <div class="readMore" @click="toggleContent(index)">{{activeIndex !== index ? '展开' : '收起'}}全文</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
const { ARTICLE_LIST } = require('./articleList')

export default {
  name: "article",
  components: {},
  data() {
    return {
      article: ARTICLE_LIST,
      activeIndex: -1,
    }
  },
  methods: {
    toggleContent(index) {
      this.activeIndex = this.activeIndex !== index ? index : -1
    }
  },
  created: function() {
  }
  
};
</script>

<style lang="less" scoped>
.article-content {
  margin-bottom: 5rem;
  .content {
    &.ellipsis {
      height: 30rem;
      overflow: hidden;
    }
  }
  .readMore {
    padding: 1rem 0;
    text-align: center;
  }
}
</style>

