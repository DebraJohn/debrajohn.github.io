<template>
  <div class="articles" :class="stick ? 'stick': ''">
    <!-- <Article :showCategory="true" /> -->
    <div class="article-container">
      <div class="article-list" v-for="(item, index) in ARTICLE_LIST" :key="index" ref="articleContent">
        <div class="article-title" @click="toArticleDetail(item.id)">{{item.title}}</div>
        <span class="article-time">{{item.postTime}}
          <span class="article-tag" v-for="(tag, i) in item.tag" :key="i">{{tag}}</span>
        </span>
      </div>
    </div>
    <div class="category">
      <div class="categoryTitle">我的记本</div>
      <div class="categoryItem" v-for="(item, index) in category" :key="index">
        <a-icon type="book" />
        <span>{{item.categoryTitle}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Article from '@/components/Article/Article.vue';
const { ARTICLE_LIST, TAG_LIST } = require('@/components/Article/articleList')
import EventBus from '@/core/eventBus';
import { category, articleList, articleDetail } from './mock'

export default {
  name: "articles",
  components: {
    Article
  },
  data() {
    return {
      category,
      ARTICLE_LIST,
      TAG_LIST,
      stick: false
    }
  },
  methods: {
    toArticleDetail(articleId) {
      this.$router.push({ name: 'article', params: { articleId }})
    }
  },
  created: () => {
    console.log(category)
  },
  mounted() {
    EventBus.$on('stickMenu', data => {
      this.stick = data
    })
  }
  
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";

.articles {
  display: flex;
  .article-container {
    margin-right: 5rem;
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 13px;
    &.stick {
      margin-top: 160px;
    }
    .article-list {
      text-align: left;
      border-bottom: 2px solid #eaeaea;
      padding: 1rem 0;
      .article-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 0.5rem;
        &:hover {
          color: @theme-color;
          cursor: pointer;
        }
      }
      .article-time {
        font-size: 12px;
      }
      .article-tag {
        background-color: @theme-color;
        color: #fff;
        padding: 0.2rem;
        margin: 0.2rem;
        border-radius: 0.5rem;
      }
    }
  }
  
  .category {
    flex-basis: 25%;
    text-align: left;
    padding: 1rem 0;
    .categoryTitle {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eaeaea;
    }
    .categoryItem {
      font-size: 14px;
      margin: 1rem 0;
      display: flex;
      i {
        margin-right: 0.5rem;
        font-size: 16px;
      }
      &:hover {
        cursor: pointer;
        color: @theme-color;
        font-weight: bold;
      }
    }
  }
}
</style>

