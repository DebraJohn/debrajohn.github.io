<template>
  <div class="article">
    <div v-if="showCategory" class="category" :class="showCategoryFlag && 'show'">
      <div class="category-trigger"></div>
      <div class="category-item title">文章目录</div>
      <div class="category-item item" v-for="(item, index) in article" :key="index"
        @click="toThisArticle(item.id)">{{item.title}}</div>
    </div>
    <div class="article-container">
      <div class="article-content" ref="articleContent">
        <div class="content" v-html="md.render(thisArticle)"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
const { ARTICLE_LIST } = require('./articleList')
import { isPhone } from '@/core/exc'
import axios from 'axios'
import markdown from 'markdown-it'
const md = markdown()

export default {
  name: "articles",
  components: {
  },
  data() {
    return {
      ARTICLE_LIST,
      activeIndex: -1,
      showCategoryFlag: false,
      thisArticle: '',
      md
    }
  },
  props: {
    showCategory: Boolean
  },
  methods: {
    findThisArticle(id) {
      this.getArticleContent(id).then(res => {
        this.thisArticle = res.result
      })
    },
    scrollToThisArticle(index) {
      this.$refs.articleContent[index].scrollIntoView()
    },
    handleTouch(e) {
      if(!isPhone()) return
      this.showCategoryFlag = e.target.className.indexOf('category') > -1
    },
    toThisArticle(articleId) {
      this.$router.push({ name: 'test', params: { testId: articleId }})
    },
    
    // 获取文章内容
    getArticleContent(articleId) {
      return new Promise((resolve, reject) => {
        axios.get('/article/getArticleContent', { params: { articleId } })
        .then(res => resolve(res.data))
        .catch(reject)
      })
    }
  },
  created() {
    // console.log(ARTICLE_LIST)
  },
  mounted() {
    this.findThisArticle(this.$route.params.articleId)
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
  padding: 0 20px;
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

