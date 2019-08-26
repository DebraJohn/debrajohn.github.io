<template>
  <div class="article">
    <div class="article-content" v-for="(item, index) in article" :key="index" v-html="item"></div>
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
      article: ARTICLE_LIST
    }
  },
  methods: {
  },
  created: function() {
  }
  
};
</script>

<style lang="less" scoped>
</style>

