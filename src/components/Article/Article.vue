<template>
  <div class="article">
    <div class="article-container" v-show="articleData">
      <div class="article-content" ref="articleContent">
        <div class="title">{{articleData.articleTitle}}</div>
        <div class="subTitle">{{formatTime(articleData.publishDate)}} {{articleData.subTitle}}</div>
        <div class="content" v-html="md.render(articleData.content || '')"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '@/core/request'
import { formatTime } from '@/core/exc'
import markdown from 'markdown-it'
const md = markdown()

export default {
  name: "articles",
  components: {
  },
  data() {
    return {
      articleData: '',
      md,
      formatTime
    }
  },
  props: {
  },
  methods: {
    // 获取文章内容
    getArticleContent(articleId) {
      get('/article/getArticleContent', { articleId }).then(res => {
        this.articleData = res.result
        setTimeout(() => {
          if (this.$refs.articleContent.clientHeight >= document.documentElement.clientHeight) {
            window.scrollTo(0, 232)
          }
        }, 200)
      })
    }
  }, 
  created() {
  },
  mounted() {
    this.getArticleContent(this.$route.params.articleId)
  },
  beforeDestroy() {
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
    position: relative;
    margin-bottom: 5rem;
    .title {
      font-size: 20px;
      font-weight: 700;
      margin: 10px 0;
    }
    .subTitle {
      font-size: 12px;
      // margin-top: -5px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #eaeaea;
      color: #777;
    }
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

