<template>
  <div class="article">
    <div class="article-container" v-show="articleData">
      <div class="article-content" ref="articleContent">
        <div class="title">{{articleData.articleTitle}}</div>
        <div class="subTitle">{{articleData.subTitle}}</div>
        <div class="timeLine">
          <span>{{formatTime(articleData.publishDate)}}</span>
          <span class="tag" @click="$router.push({ name: 'articles', params: { categoryId: articleData.articleId.substr(0, 2) }})">
            <a-icon type="tag"></a-icon>
            文集《 {{articleData.tag}} 》
          </span>
        </div>
        <div class="content" v-html="md.render(articleData.content || '')"></div>
      </div>
    </div>
    <Loading v-if="showLoading" />
  </div>
</template>

<script>
import { formatTime } from '@/core/exc'
import Loading from '@/components/Loading.vue'
import markdown from 'markdown-it'
const md = markdown()

export default {
  name: "articleContent",
  components: {
    Loading
  },
  data() {
    return {
      articleData: '',
      md,
      formatTime,
      showLoading: false
    }
  },
  props: {
  },
  methods: {
    // 获取文章内容
    getArticleContent(articleId) {
      API.getArticleContent({ articleId }).then(res => {
        this.articleData = res.result
        this.showLoading = false
        // setTimeout(() => {
        //   if (this.$refs.articleContent.clientHeight >= document.documentElement.clientHeight) {
        //     window.scrollTo(0, 232)
        //   }
        // }, 200)
      }).catch(() => this.showLoading = false)
    }
  }, 
  created() {
    this.getArticleContent(this.$route.params.articleId)
  },
  beforeMount() {
    this.showLoading = true
  },
  mounted() {
  },
  beforeDestroy() {
  },
  
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";
.article {
  position: relative;
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
    position: relative;
    margin-bottom: 5rem;
    .title {
      font-size: 1.8rem;
      font-weight: 500;
      margin: 20px 0;
    }
    .subTitle {
      font-size: 12px;
      margin-top: -5px;
      margin-bottom: 10px;
      color: #777;
    }
    .timeLine {
      color: #777;
      padding-bottom: 10px;
      margin-bottom: 30px;
    }
    
    .tag {
      font-weight: 700;
      margin-left: 10px;
      color: @theme-color;
      i {
        position: relative;
        top: 2px;
      }
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
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

