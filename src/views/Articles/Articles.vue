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
    <!-- TODO: tag分类功能 -->
    <!-- <div class="tag-container">
      <div class="">By Tag</div>
      <div class="tag-list" v-for="(item, index) in TAG_LIST" :key="index">
        {{item}}
      </div>
    </div> -->
  </div>
</template>

<script>
import Article from '@/components/Article/Article.vue';
const { ARTICLE_LIST, TAG_LIST } = require('@/components/Article/articleList')
import EventBus from '@/core/eventBus';

export default {
  name: "articles",
  components: {
    Article
  },
  data() {
    return {
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
    console.log(ARTICLE_LIST)
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
  // display: flex;
  .article-container {
    // flex-basis: 80%;
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
      padding: 1rem;
      .article-title {
        font-size: 18px;
        font-weight: bold;
        margin: 0.5rem 0;
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
  .tag-container {
    text-align: left;
  }
}
</style>

