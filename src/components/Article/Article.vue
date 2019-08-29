<template>
  <div class="article">
    <div v-if="showCategory" class="category" :class="showCategoryFlag && 'show'">
      <div class="category-trigger"></div>
      <div class="category-item title">文章目录</div>
      <div class="category-item item" v-for="(item, index) in article" :key="index"
        @click="scrollToThisArticle(index)">{{item.title}}</div>
    </div>
    <div class="article-container">
      <div class="article-content" v-for="(item, index) in article" :key="index" ref="articleContent">
        <div class="content" v-html="item.content" :class="activeIndex !== index ? 'ellipsis': ''"></div>
        <div class="read-more" @click="toggleContent(index)">{{activeIndex !== index ? '展开' : '收起'}}全文</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
const { ARTICLE_LIST } = require('./articleList')
import { isPhone } from '@/core/exc'

export default {
  name: "article",
  components: {},
  data() {
    return {
      article: ARTICLE_LIST,
      activeIndex: -1,
      showCategoryFlag: false
    }
  },
  props: {
    showCategory: Boolean
  },
  methods: {
    toggleContent(index) {
      this.activeIndex = this.activeIndex !== index ? index : -1
      this.scrollToThisArticle(index)
    },
    scrollToThisArticle(index) {
      this.$refs.articleContent[index].scrollIntoView()
    },
    handleTouch(e) {
      if(isPhone()) return
      this.showCategoryFlag = e.target.className.indexOf('category') > -1
    }
  },
  created() {
  },
  mounted() {
    document.querySelector('#app').addEventListener('click', this.handleTouch, true)
  },
  beforeDestroy() {
    document.querySelector('#app').removeEventListener('touch', this.handleTouch, true)
  },
  
};
</script>

<style lang="less" scoped>
.article {
  width: 100%;
  .category {
    position: fixed;
    left: -15rem;
    top:0;
    bottom: 0;
    width: 15rem;
    text-align: left;
    padding: 2rem;
    background: #fff;
    box-shadow: 1px 0px 3px #999;
    z-index: 2;
    transition: 0.2s linear;
    &.show,
    &:hover {
      left: 0;
      transition: 0.2s linear;
    }
    .category-trigger {
      position: absolute;
      right: -3rem;
      top: 0;
      border: 1rem solid transparent;
      border-top: 1rem solid #628bd8;
      border-bottom: 1rem solid #628bd8;
      border-left: 1rem solid #628bd8;
      border-right: 1rem solid transparent;
      &::before {
        content: " ";
        position: absolute;
        top: -1rem;
        left: -17rem;
        width: 16rem;
        height: 2rem;
        background-color: #628bd8;
      }
    }
    .category-item {
      margin: 2rem 0;
      color: #2c3e50;
      &.item:hover {
        font-weight: bold;
        color: #628bd8;
        cursor: pointer;
      }
      &.title {
        padding-bottom: 0.5rem;
        font-weight: bold;
        border-bottom: 1px solid #2c3e50;
      }
    }
  }
  .article-content {
    margin-bottom: 5rem;
    .content {
      &.ellipsis {
        height: 25rem;
        overflow: hidden;
      }
    }
    .read-more {
      padding: 1rem 0;
      text-align: center;
    }
  }
}
</style>

